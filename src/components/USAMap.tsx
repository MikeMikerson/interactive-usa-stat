import { useState, useEffect } from 'react';
import { type StateInfo } from '@/lib/states';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getQuizForState } from '@/lib/quizData';
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
  const [svgContent, setSvgContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(usSvgUrl);
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status}`);
        }

        const content = await response.text();
        
        // Parse the SVG to add styles and interactivity
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(content, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (!svgElement) {
          throw new Error('No SVG element found in loaded content');
        }

        // Style the SVG
        svgElement.style.width = '100%';
        svgElement.style.height = 'auto';
        svgElement.style.display = 'block';
        svgElement.style.maxHeight = '70vh';
        
        // Remove any existing fill attribute to ensure our styles take precedence
        svgElement.removeAttribute('fill');
        
        // Ensure the SVG itself doesn't interfere with clicks
        svgElement.style.pointerEvents = 'none';

        // Add styles to state paths
        const statePaths = svgElement.querySelectorAll('path[id]');
        console.log('Found state paths:', statePaths.length);
        
        statePaths.forEach((pathElement) => {
          const path = pathElement as HTMLElement;
          const stateCode = path.id;
          const stateName = stateNameMap[stateCode];
          const hasQuiz = stateName && getQuizForState(stateName);

          console.log(`Processing state: ${stateCode} -> ${stateName}, hasQuiz: ${!!hasQuiz}`);

          // Set basic styling for all paths
          path.style.stroke = 'hsl(var(--border))';
          path.style.strokeWidth = '1px';
          path.style.strokeLinejoin = 'round';
          path.style.transition = 'fill 0.2s ease';
          
          // Ensure the entire path area is clickable
          path.style.pointerEvents = 'all';

          if (hasQuiz && stateName) {
            path.style.cursor = 'pointer';
            const isCompleted = completedStates.has(stateName);
            path.style.fill = isCompleted ? 'hsl(var(--secondary))' : 'hsl(var(--primary))';
            path.setAttribute('data-interactive', 'true');
            path.setAttribute('data-state-name', stateName);
            
            console.log(`Made ${stateName} interactive with fill: ${path.style.fill}`);
            
            // Add hover effects
            path.addEventListener('mouseenter', () => {
              const currentCompleted = completedStates.has(stateName);
              path.style.fill = currentCompleted ? 'hsl(var(--secondary)/0.8)' : 'hsl(var(--primary)/0.8)';
              path.style.strokeWidth = '2px';
            });

            path.addEventListener('mouseleave', () => {
              const currentCompleted = completedStates.has(stateName);
              path.style.fill = currentCompleted ? 'hsl(var(--secondary))' : 'hsl(var(--primary))';
              path.style.strokeWidth = '1px';
            });
          } else {
            path.style.fill = 'hsl(var(--muted))';
            path.style.cursor = 'default';
            path.removeAttribute('data-interactive');
            console.log(`No quiz for ${stateCode}, filled with muted color`);
          }
        });

        // Serialize back to string
        const serializer = new XMLSerializer();
        const styledSvgContent = serializer.serializeToString(svgElement);
        
        setSvgContent(styledSvgContent);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading map:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setIsLoading(false);
      }
    };

    loadMap();
  }, [completedStates]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    console.log('Click detected on:', target.tagName, 'ID:', target.id);
    
    if (target.tagName.toLowerCase() === 'path' && target.id) {
      const stateCode = target.id;
      const stateName = stateNameMap[stateCode];
      console.log(`Clicked on state: ${stateCode} -> ${stateName}`);
      
      if (stateName && getQuizForState(stateName)) {
        const stateInfo: StateInfo = {
          name: stateName,
          abbreviation: stateCode
        };
        console.log('Calling onStateClick with:', stateInfo);
        onStateClick(stateInfo);
      } else {
        console.log('No quiz available for this state');
      }
    } else {
      console.log('Click not on a valid state path');
    }
  };

  if (isLoading) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto", className)}>
        <div className="flex items-center justify-center h-96">
          <div className="text-muted-foreground">Loading USA map...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto", className)}>
        <div className="flex flex-col items-center justify-center h-96 space-y-4">
          <div className="text-destructive">Failed to load map: {error}</div>
          <Button
            onClick={() => {
              setError(null);
              setIsLoading(true);
            }}
            className="px-4 py-2"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div 
        className="w-full" 
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded-sm"></div>
          <span className="text-muted-foreground">Quiz Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-secondary rounded-sm"></div>
          <span className="text-muted-foreground">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-muted border border-border rounded-sm"></div>
          <span className="text-muted-foreground">No Quiz Data</span>
        </div>
      </div>
    </div>
  );
}