import { useState, useRef, useEffect, useCallback } from 'react';
import { type StateInfo } from '@/lib/states';
import { cn } from '@/lib/utils';
import usSvgUrl from '@/assets/images/us.svg';

interface USAMapProps {
  onStateClick: (state: StateInfo) => void;
  completedStates: Set<string>;
  className?: string;
}

// State abbreviation to full name mapping
const stateNameMap: Record<string, string> = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'DC': 'District of Columbia'
};

export function USAMap({ onStateClick, completedStates, className }: USAMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    // Load the SVG content from the assets directory
    fetch(usSvgUrl)
      .then(response => response.text())
      .then(svgText => {
        console.log('SVG loaded successfully');
        // Process the SVG to add interactivity
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (svgElement) {
          console.log('SVG element found');
          // Set responsive attributes
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', 'auto');
          svgElement.style.maxHeight = '70vh';
          svgElement.style.cursor = 'pointer';
          
          // Find all path elements and log them
          const allPaths = svgElement.querySelectorAll('path');
          console.log('Total paths found:', allPaths.length);
          
          // Update all state paths with proper styling
          Object.keys(stateNameMap).forEach(stateId => {
            const path = svgElement.querySelector(`#${stateId}`);
            if (path) {
              console.log('Found path for state:', stateId);
              path.style.transition = 'all 0.2s ease';
              path.style.strokeWidth = '0.97px';
              path.style.stroke = 'hsl(var(--border))';
              path.style.strokeLinejoin = 'round';
              path.style.cursor = 'pointer';
              
              // Set initial fill
              const stateName = stateNameMap[stateId];
              const isCompleted = stateName && completedStates.has(stateName);
              path.style.fill = isCompleted ? 'hsl(var(--secondary))' : 'hsl(var(--muted))';
            } else {
              console.log('No path found for state:', stateId);
            }
          });
          
          setSvgContent(svgElement.outerHTML);
        }
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
        // Fallback to a basic message
        setSvgContent('<svg viewBox="0 0 1000 589" class="w-full h-auto"><text x="500" y="300" text-anchor="middle" fill="hsl(var(--muted-foreground))">Map loading failed</text></svg>');
      });
  }, [completedStates]);

  const handleStateClick = useCallback((stateId: string) => {
    console.log('handleStateClick called with:', stateId);
    const stateName = stateNameMap[stateId];
    console.log('State name:', stateName);
    if (stateName) {
      const stateInfo: StateInfo = {
        name: stateName,
        abbreviation: stateId
      };
      console.log('Calling onStateClick with:', stateInfo);
      onStateClick(stateInfo);
    }
  }, [onStateClick]);



  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const container = containerRef.current;
    const svgElement = container.querySelector('svg');
    if (!svgElement) return;

    console.log('Setting up event listeners on SVG');

    // Store the listener functions so we can remove them properly
    const clickListeners = new Map<Element, () => void>();
    const mouseEnterListeners = new Map<Element, () => void>();
    const mouseLeaveListeners = new Map<Element, () => void>();

    // Add click listener to all path elements directly
    const allPaths = svgElement.querySelectorAll('path[id]');
    console.log('Found paths with IDs:', allPaths.length);
    
    allPaths.forEach((path) => {
      const stateId = path.id;
      if (stateNameMap[stateId]) {
        console.log('Adding click listener to:', stateId);
        
        const clickHandler = () => {
          console.log('Direct click on path:', stateId);
          handleStateClick(stateId);
        };
        
        const mouseEnterHandler = () => setHoveredState(stateId);
        const mouseLeaveHandler = () => setHoveredState(null);
        
        // Store references for cleanup
        clickListeners.set(path, clickHandler);
        mouseEnterListeners.set(path, mouseEnterHandler);
        mouseLeaveListeners.set(path, mouseLeaveHandler);
        
        path.addEventListener('click', clickHandler);
        path.addEventListener('mouseenter', mouseEnterHandler);
        path.addEventListener('mouseleave', mouseLeaveHandler);
      }
    });

    // Cleanup function
    return () => {
      allPaths.forEach((path) => {
        const clickHandler = clickListeners.get(path);
        const mouseEnterHandler = mouseEnterListeners.get(path);
        const mouseLeaveHandler = mouseLeaveListeners.get(path);
        
        if (clickHandler) path.removeEventListener('click', clickHandler);
        if (mouseEnterHandler) path.removeEventListener('mouseenter', mouseEnterHandler);
        if (mouseLeaveHandler) path.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, [svgContent, handleStateClick]);

  // Separate effect for updating fill colors
  useEffect(() => {
    if (!containerRef.current) return;
    
    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    Object.keys(stateNameMap).forEach(stateId => {
      const path = svgElement.querySelector(`#${stateId}`);
      if (path) {
        const stateName = stateNameMap[stateId];
        const isCompleted = stateName && completedStates.has(stateName);
        const isHovered = hoveredState === stateId;
        
        let fill = 'hsl(var(--muted))';
        if (isCompleted) fill = 'hsl(var(--secondary))';
        else if (isHovered) fill = 'hsl(var(--primary))';
        
        path.style.fill = fill;
      }
    });
  }, [completedStates, hoveredState]);



  if (!svgContent) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto flex items-center justify-center h-96", className)}>
        <div className="text-muted-foreground">Loading map...</div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div 
        ref={containerRef}
        className="w-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-muted border border-border rounded-sm"></div>
          <span className="text-muted-foreground">Not Started</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-secondary rounded-sm"></div>
          <span className="text-muted-foreground">Completed</span>
        </div>
      </div>
    </div>
  );
}