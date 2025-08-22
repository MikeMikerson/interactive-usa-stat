import { useState } from 'react';
import { type StateInfo } from '@/lib/states';
import { cn } from '@/lib/utils';

interface USASvgMapProps {
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

export function USASvgMap({ onStateClick, completedStates, className }: USASvgMapProps) {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

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

  const getStateProps = (stateId: string) => ({
    fill: getStateFill(stateId),
    onClick: () => handleStateClick(stateId),
    onMouseEnter: () => setHoveredState(stateId),
    onMouseLeave: () => setHoveredState(null),
    className: "cursor-pointer transition-all duration-200 hover:opacity-80",
    style: {
      strokeWidth: '0.97px',
      stroke: 'hsl(var(--border))',
      strokeLinejoin: 'round' as const
    }
  });

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <svg
        className="w-full h-auto"
        style={{ maxHeight: '70vh' }}
        enableBackground="new 0 0 1000 589"
        height="589px"
        version="1.1"
        viewBox="0 0 1000 589"
        width="1000px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style type="text/css">
            {`path { fill-rule: evenodd; }`}
          </style>
        </defs>

        {/* Massachusetts */}
        <path id="MA" data-name="Massachusetts" 
          d="m 956.31178,153.05085 -0.29118,-0.19412 0,0.29119 0.29118,-0.0971 z m -2.91189,-2.6207 0.67944,-0.29119 0,-0.38825 -0.67944,0.67944 z m 12.03583,-7.57092 -0.0971,-1.35889 -0.19412,-0.7765 0.29119,2.13539 z m -42.41659,-9.9975 -0.67944,0.29119 -5.5326,1.65007 -1.94126,0.67944 -2.23245,0.67944 -0.7765,0.29119 0,0.29119 0.29118,5.04728 0.29119,4.65903 0.29119,4.27078 0.48532,0.29119 1.74714,-0.48532 7.86211,-2.32951 0.19412,0.48531 13.97709,-5.33847 0.0971,0.19413 1.26182,-0.48532 4.4649,-1.74713 4.27078,5.14434 0,0 0.58238,-0.48531 0.29119,-1.45595 -0.0971,2.32952 0,0 0.97063,0 0.29119,1.16475 0.87357,1.65008 0,0 4.56197,-5.5326 3.78546,1.26182 0.87357,-1.94126 6.21204,-3.30015 -2.62071,-5.14435 0.67945,3.30015 -3.20309,2.42658 -3.59133,0.29119 -7.18267,-7.66799 -3.20309,-4.85315 3.20309,-3.39721 -3.30015,-0.19413 -1.35888,-3.20308 -0.0971,-0.19413 -5.53259,6.01791 -12.22996,4.07666 -3.97959,1.26182 0,0 z"
          {...getStateProps('MA')} />
        
        {/* Minnesota */}
        <path id="MN" data-name="Minnesota"
          d="m 558.54712,73.847349 1.94126,6.891482 4.07665,24.848159 1.94126,9.90044 0.58238,8.73568 2.23246,5.24141 0.48531,4.4649 0.38825,1.45595 -0.0971,0.29119 -3.88252,6.40616 2.52364,4.27078 4.85315,34.16622 0.19413,4.4649 4.85315,-0.29119 19.12144,-1.06769 47.75505,-3.97959 4.7561,-0.48532 0,-0.48531 -1.35889,-7.47386 -5.92085,-3.00896 -4.65903,-4.85315 -7.37679,-4.46491 -2.32952,-0.19412 -3.59133,-2.71777 0.97063,-13.39471 -3.39721,-3.10602 1.16476,-5.43554 6.21204,-5.62966 -1.0677,-11.64757 2.23245,-2.52364 0,0 7.57093,-7.95918 8.63861,-11.065195 3.30015,-2.329514 5.82379,-2.814831 6.11497,-4.561967 -4.07665,0.776505 -2.42658,-1.844199 -9.31806,1.261821 -1.45594,-1.747136 -8.34743,3.397209 -6.69736,-2.814831 -1.84419,-2.232452 -5.33848,0.388253 -3.59133,-1.844199 1.16476,-1.358884 -4.56197,-1.455947 -4.07665,0 -6.50323,2.814831 -1.26182,-1.941263 -10.28869,-1.455947 -3.49427,-8.73568 -0.38826,-2.620705 -4.4649,-1.26182 0.38825,7.47386 -11.8417,0.873568 -14.65653,0.582379 -0.97063,0.09706 z"
          {...getStateProps('MN')} />

        {/* Montana */}
        <path id="MT" data-name="Montana"
          d="m 465.65771,72.973781 -32.12789,-2.135389 -23.39221,-2.232451 -23.29515,-2.717768 -14.46241,-1.941262 -23.10102,-3.591336 -11.55051,-1.941262 -25.81879,-4.950219 -2.71777,-0.582379 -4.17371,19.800877 1.8442,3.591335 1.45595,5.532598 -0.87357,0.776505 1.8442,5.047282 2.52364,2.135389 7.18267,12.035829 0.67944,2.03832 2.91189,-0.19412 -3.39721,15.91835 -1.35888,0.38825 -1.8442,5.33847 9.60925,0.67944 0.77651,4.46491 5.43553,13.29765 0.97063,0.7765 3.78546,7.76505 0.97063,-0.7765 8.05624,-0.0971 10.19163,1.0677 2.52364,-3.30015 3.00896,5.43553 0.58238,0.29119 0.0971,-0.58237 1.35888,-9.51219 33.19559,4.07665 26.49823,2.52364 13.97709,1.16476 24.94522,1.45595 1.26182,0.0971 0.29119,0 0.0971,-1.35888 0.29119,-6.69736 0.38825,-8.83274 0.0971,-2.23246 0.19413,-3.88252 1.55301,-30.47782 1.26182,-23.683401 0.0971,-3.882525 -1.8442,-0.09706 z"
          {...getStateProps('MT')} />

        {/* North Dakota */}
        <path id="ND" data-name="North Dakota"
          d="m 556.50879,73.847349 -29.31306,0.582379 -20.48032,-0.09706 -17.56842,-0.388253 -20.57738,-0.776505 -1.0677,-0.09706 -0.0971,3.882525 -1.26182,23.683405 -1.55301,30.47782 -0.19413,3.88252 3.78546,0.19413 42.80484,1.16476 39.50469,-0.29119 16.40367,-0.48532 3.30014,-0.19412 -0.38825,-1.45595 -0.48531,-4.4649 -2.23246,-5.24141 -0.58238,-8.73568 -1.94126,-9.90044 -4.07665,-24.848163 -1.94126,-6.891482 -2.03833,0 z"
          {...getStateProps('ND')} />

        {/* Note: This is a simplified version with just a few states for demonstration.
            In a full implementation, you would include all 50 states from the SVG file. */}
        
        {/* For now, show a message about incomplete map */}
        <text x="500" y="300" textAnchor="middle" className="text-sm font-medium" fill="hsl(var(--muted-foreground))">
          Interactive US Map - Click any state to start a quiz!
        </text>
        <text x="500" y="320" textAnchor="middle" className="text-xs" fill="hsl(var(--muted-foreground))">
          (Showing sample states from uploaded SVG)
        </text>
      </svg>
      
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