import { useState, useRef, useEffect } from 'react';
import { type StateInfo } from '@/lib/states';
import { cn } from '@/lib/utils';

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
    fetch('/src/assets/images/us.svg')
      .then(response => response.text())
      .then(svgText => {
        // Process the SVG to add interactivity
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (svgElement) {
          // Set responsive attributes
          svgElement.setAttribute('width', '100%');
          svgElement.setAttribute('height', 'auto');
          svgElement.style.maxHeight = '70vh';
          svgElement.style.cursor = 'pointer';
          
          // Update all state paths with proper styling
          Object.keys(stateNameMap).forEach(stateId => {
            const path = svgElement.querySelector(`#${stateId}`);
            if (path) {
              path.style.transition = 'all 0.2s ease';
              path.style.strokeWidth = '0.97px';
              path.style.stroke = 'hsl(var(--border))';
              path.style.strokeLinejoin = 'round';
              path.style.cursor = 'pointer';
              
              // Set initial fill
              const stateName = stateNameMap[stateId];
              const isCompleted = stateName && completedStates.has(stateName);
              path.style.fill = isCompleted ? 'hsl(var(--secondary))' : 'hsl(var(--muted))';
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

  const handleStateClick = (stateId: string) => {
    const stateName = stateNameMap[stateId];
    if (stateName) {
      const stateInfo: StateInfo = {
        name: stateName,
        abbreviation: stateId
      };
      onStateClick(stateInfo);
    }
  };

  const getStateFill = (stateId: string) => {
    const stateName = stateNameMap[stateId];
    const isCompleted = stateName && completedStates.has(stateName);
    const isHovered = hoveredState === stateId;
    
    if (isCompleted) return 'hsl(var(--secondary))';
    if (isHovered) return 'hsl(var(--primary))';
    return 'hsl(var(--muted))';
  };

  useEffect(() => {
    if (!svgContent || !containerRef.current) return;

    const container = containerRef.current;
    const svgElement = container.querySelector('svg');
    if (!svgElement) return;

    // Find all state paths and add interactivity
    Object.keys(stateNameMap).forEach(stateId => {
      const path = svgElement.querySelector(`#${stateId}`);
      if (path) {
        // Add event listeners
        const handleMouseEnter = () => {
          setHoveredState(stateId);
          path.style.fill = getStateFill(stateId);
        };
        
        const handleMouseLeave = () => {
          setHoveredState(null);
          path.style.fill = getStateFill(stateId);
        };
        
        const handleClick = () => {
          handleStateClick(stateId);
        };

        path.addEventListener('mouseenter', handleMouseEnter);
        path.addEventListener('mouseleave', handleMouseLeave);
        path.addEventListener('click', handleClick);

        // Store cleanup functions
        (path as any).__cleanupHandlers = () => {
          path.removeEventListener('mouseenter', handleMouseEnter);
          path.removeEventListener('mouseleave', handleMouseLeave);
          path.removeEventListener('click', handleClick);
        };
      }
    });

    // Cleanup function
    return () => {
      Object.keys(stateNameMap).forEach(stateId => {
        const path = svgElement.querySelector(`#${stateId}`);
        if (path && (path as any).__cleanupHandlers) {
          (path as any).__cleanupHandlers();
        }
      });
    };
  }, [svgContent]);

  // Update fills when completedStates or hoveredState changes
  useEffect(() => {
    if (!containerRef.current) return;
    
    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    Object.keys(stateNameMap).forEach(stateId => {
      const path = svgElement.querySelector(`#${stateId}`);
      if (path) {
        path.style.fill = getStateFill(stateId);
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