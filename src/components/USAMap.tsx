import { useState } from 'react';
import { stateData, type StateInfo } from '@/lib/states';
import { cn } from '@/lib/utils';

interface USAMapProps {
  onStateClick: (state: StateInfo) => void;
  completedStates: Set<string>;
  className?: string;
}

// Approximate center coordinates for state labels
const stateLabels: Record<string, { x: number; y: number }> = {
  'AL': { x: 735, y: 485 },
  'AK': { x: 202, y: 485 },
  'AZ': { x: 333, y: 428 },
  'AR': { x: 592, y: 422 },
  'CA': { x: 207, y: 345 },
  'CO': { x: 484, y: 349 },
  'CT': { x: 791, y: 246 },
  'DE': { x: 751, y: 299 },
  'FL': { x: 771, y: 529 },
  'GA': { x: 751, y: 485 },
  'HI': { x: 314, y: 485 },
  'ID': { x: 340, y: 199 },
  'IL': { x: 584, y: 335 },
  'IN': { x: 610, y: 335 },
  'IA': { x: 532, y: 305 },
  'KS': { x: 484, y: 355 },
  'KY': { x: 658, y: 399 },
  'LA': { x: 592, y: 485 },
  'ME': { x: 797, y: 193 },
  'MD': { x: 731, y: 299 },
  'MA': { x: 771, y: 246 },
  'MI': { x: 624, y: 252 },
  'MN': { x: 532, y: 252 },
  'MS': { x: 638, y: 485 },
  'MO': { x: 532, y: 355 },
  'MT': { x: 418, y: 183 },
  'NE': { x: 484, y: 305 },
  'NV': { x: 301, y: 302 },
  'NH': { x: 777, y: 216 },
  'NJ': { x: 751, y: 269 },
  'NM': { x: 403, y: 429 },
  'NY': { x: 731, y: 236 },
  'NC': { x: 738, y: 435 },
  'ND': { x: 457, y: 183 },
  'OH': { x: 650, y: 335 },
  'OK': { x: 490, y: 407 },
  'OR': { x: 207, y: 252 },
  'PA': { x: 710, y: 269 },
  'RI': { x: 778, y: 259 },
  'SC': { x: 738, y: 435 },
  'SD': { x: 457, y: 252 },
  'TN': { x: 658, y: 399 },
  'TX': { x: 471, y: 470 },
  'UT': { x: 364, y: 335 },
  'VT': { x: 764, y: 216 },
  'VA': { x: 710, y: 399 },
  'WA': { x: 220, y: 183 },
  'WV': { x: 697, y: 349 },
  'WI': { x: 584, y: 252 },
  'WY': { x: 383, y: 252 }
};

export function USAMap({ onStateClick, completedStates, className }: USAMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-auto"
        style={{ maxHeight: '70vh' }}
      >
        <g>
          {stateData.map((state) => {
            const isCompleted = completedStates.has(state.name);
            const isHovered = hoveredState === state.name;
            
            return (
              <path
                key={state.abbreviation}
                d={state.path}
                className={cn(
                  "cursor-pointer transition-all duration-200 stroke-border stroke-1",
                  {
                    "fill-secondary": isCompleted,
                    "fill-primary": isHovered && !isCompleted,
                    "fill-background hover:fill-muted": !isHovered && !isCompleted,
                  }
                )}
                onMouseEnter={() => setHoveredState(state.name)}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => onStateClick(state)}
              />
            );
          })}
        </g>
        
        {/* State labels */}
        <g className="text-xs font-medium pointer-events-none">
          {stateData.map((state) => {
            const labelPos = stateLabels[state.abbreviation];
            if (!labelPos) return null;
            
            const isCompleted = completedStates.has(state.name);
            const isHovered = hoveredState === state.name;
            
            return (
              <text
                key={`label-${state.abbreviation}`}
                x={labelPos.x}
                y={labelPos.y}
                textAnchor="middle"
                className={cn(
                  "transition-colors duration-200 select-none",
                  {
                    "fill-secondary-foreground": isCompleted,
                    "fill-primary-foreground": isHovered && !isCompleted,
                    "fill-foreground": !isHovered && !isCompleted,
                  }
                )}
              >
                {state.abbreviation}
              </text>
            );
          })}
        </g>
      </svg>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-background border border-border rounded-sm"></div>
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