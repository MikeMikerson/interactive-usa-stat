import { useState } from 'react';
import { useKV } from '@github/spark/hooks';
import { USAMap } from '@/components/USAMap';
import { QuizDialog } from '@/components/QuizDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, MapPin } from '@phosphor-icons/react';
import { type StateInfo } from '@/lib/states';
import { getQuizForState } from '@/lib/quizData';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

interface StateScore {
  score: number;
  totalQuestions: number;
  completedAt: string;
}

function App() {
  const [selectedState, setSelectedState] = useState<StateInfo | null>(null);
  const [quizOpen, setQuizOpen] = useState(false);
  const [stateScores, setStateScores] = useKV<Record<string, StateScore>>('state-scores', {});

  const completedStates = new Set(Object.keys(stateScores));

  const handleStateClick = (state: StateInfo) => {
    console.log('Opening quiz for:', state.name);
    setSelectedState(state);
    setQuizOpen(true);
  };

  const handleQuizComplete = (score: number) => {
    if (!selectedState) return;
    
    const quiz = getQuizForState(selectedState.name);
    if (!quiz) return;

    const newScore: StateScore = {
      score,
      totalQuestions: quiz.questions.length,
      completedAt: new Date().toISOString(),
    };

    setStateScores(current => ({
      ...current,
      [selectedState.name]: newScore
    }));

    const percentage = Math.round((score / quiz.questions.length) * 100);
    toast.success(`${selectedState.name} quiz completed with ${percentage}%!`);
  };

  const totalStatesCompleted = completedStates.size;
  const totalScore = Object.values(stateScores).reduce((sum, score) => sum + score.score, 0);
  const totalQuestions = Object.values(stateScores).reduce((sum, score) => sum + score.totalQuestions, 0);
  const averagePercentage = totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">USA State Quiz Map</h1>
          <p className="text-muted-foreground text-lg">
            Click on any state to test your knowledge with fun trivia questions!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">States Completed</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStatesCompleted}</div>
              <p className="text-xs text-muted-foreground">
                out of 51 states & territories
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Score</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalScore}</div>
              <p className="text-xs text-muted-foreground">
                out of {totalQuestions} questions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <Badge variant="secondary">{averagePercentage}%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalQuestions > 0 ? `${averagePercentage}%` : '-'}
              </div>
              <p className="text-xs text-muted-foreground">
                across all quizzes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <USAMap 
              onStateClick={handleStateClick}
              completedStates={completedStates}
            />
          </CardContent>
        </Card>

        {/* Recent Completions */}
        {totalStatesCompleted > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Completions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(stateScores)
                  .sort(([,a], [,b]) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
                  .slice(0, 5)
                  .map(([stateName, score]) => (
                    <div key={stateName} className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                      <span className="font-medium">{stateName}</span>
                      <Badge variant="outline">
                        {score.score}/{score.totalQuestions} ({Math.round((score.score / score.totalQuestions) * 100)}%)
                      </Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quiz Dialog */}
      <QuizDialog
        open={quizOpen}
        onOpenChange={setQuizOpen}
        stateName={selectedState?.name || 'Unknown State'}
        quiz={selectedState ? getQuizForState(selectedState.name) : null}
        onQuizComplete={handleQuizComplete}
      />

      <Toaster />
    </div>
  );
}

export default App;