# USA State Quiz Map

Interactive educational website where users click on US states to take state-specific trivia quizzes.

**Experience Qualities**: 
1. Educational - Clear, informative quiz content that teaches users about state facts
2. Interactive - Engaging map interface with responsive hover and click states 
3. Playful - Gamified quiz experience with immediate feedback and scoring

**Complexity Level**: Light Application (multiple features with basic state)
- Features multiple state quizzes with score tracking and progress persistence across sessions

## Essential Features

**Interactive USA Map**
- Functionality: SVG-based clickable map of all 50 US states
- Purpose: Primary navigation interface for accessing state quizzes
- Trigger: User clicks on any state
- Progression: Page load → hover state highlights → click opens quiz dialog → quiz completion → return to map
- Success criteria: All states clickable, visual feedback on hover, smooth transitions

**State Quiz System**
- Functionality: Multiple choice questions about state facts (capital, nickname, landmarks, history)
- Purpose: Educational content delivery through engaging quiz format
- Trigger: State selection from map
- Progression: State click → quiz dialog opens → question display → answer selection → feedback → next question → final score → close dialog
- Success criteria: 3-5 questions per state, immediate feedback, score calculation

**Progress Tracking**
- Functionality: Track completed quizzes and scores for each state
- Purpose: Encourage completion and provide sense of achievement
- Trigger: Quiz completion
- Progression: Quiz finish → score calculation → save to persistent storage → visual indicator on map
- Success criteria: Completed states visually distinct, scores persist between sessions

## Edge Case Handling

- **No Quiz Data**: Display "Quiz coming soon" message with encouraging copy
- **Interrupted Quiz**: Save progress and allow resuming from same question
- **Multiple Attempts**: Allow retaking quizzes, track best score
- **Mobile Touch**: Ensure state boundaries are touch-friendly with adequate hit areas

## Design Direction

The design should feel educational yet engaging - combining the authority of a learning platform with the approachability of a game, using clean modern aesthetics that don't overwhelm the educational content.

## Color Selection

Triadic color scheme using educational blue, encouraging green, and warm accent orange to create a balanced, trustworthy learning environment.

- **Primary Color**: Deep Educational Blue (oklch(0.45 0.15 240)) - Communicates trust, knowledge, and stability
- **Secondary Colors**: Fresh Green (oklch(0.65 0.12 150)) for success states and completion indicators
- **Accent Color**: Warm Orange (oklch(0.7 0.15 60)) - Attention-grabbing highlight for interactive elements and CTAs
- **Foreground/Background Pairings**: 
  - Background (White oklch(1 0 0)): Charcoal text (oklch(0.2 0 0)) - Ratio 16:1 ✓
  - Primary (Deep Blue oklch(0.45 0.15 240)): White text (oklch(1 0 0)) - Ratio 9.2:1 ✓
  - Secondary (Fresh Green oklch(0.65 0.12 150)): White text (oklch(1 0 0)) - Ratio 5.8:1 ✓
  - Accent (Warm Orange oklch(0.7 0.15 60)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓

## Font Selection

Clean, highly legible sans-serif typography that balances educational authority with modern approachability using Inter for its excellent readability across all sizes.

- **Typographic Hierarchy**: 
  - H1 (App Title): Inter Bold/32px/tight letter spacing
  - H2 (Quiz Title): Inter Semibold/24px/normal spacing  
  - H3 (Question): Inter Medium/18px/normal spacing
  - Body (Answers): Inter Regular/16px/relaxed line height
  - Caption (Score): Inter Medium/14px/wide letter spacing

## Animations

Subtle, purposeful animations that enhance the educational experience without distraction - focusing on smooth state transitions and gentle feedback that guides attention to learning moments.

- **Purposeful Meaning**: Map state hover effects communicate interactivity, quiz transitions maintain focus, success animations celebrate learning achievements
- **Hierarchy of Movement**: State highlights > quiz dialog entrance > answer feedback > completion celebration

## Component Selection

- **Components**: Dialog for quiz modal, Card for quiz questions, Button for answers and navigation, Badge for state completion indicators, Progress for quiz advancement
- **Customizations**: Custom SVG map component with interactive state paths, custom quiz progress indicator
- **States**: Map states (default/hover/completed), quiz buttons (default/hover/selected/correct/incorrect), dialog (enter/exit animations)
- **Icon Selection**: Check circle for correct answers, X circle for incorrect, Trophy for completion, Map pin for state indicators
- **Spacing**: Consistent 4-unit (16px) spacing for major sections, 2-unit (8px) for related elements, 1-unit (4px) for tight groupings
- **Mobile**: Map scales responsively, quiz dialog becomes full-screen on mobile, touch-optimized state boundaries with minimum 44px hit areas