import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Trophy } from '@phosphor-icons/react';
import { type StateQuiz, type QuizQuestion } from '@/lib/quizData';
import { cn } from '@/lib/utils';

interface QuizDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stateName: string;
  quiz: StateQuiz | null;
  onQuizComplete: (score: number) => void;
}

export function QuizDialog({ open, onOpenChange, stateName, quiz, onQuizComplete }: QuizDialogProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  console.log('QuizDialog render - open:', open, 'stateName:', stateName, 'quiz:', quiz);

  useEffect(() => {
    if (open && quiz) {
      console.log('QuizDialog useEffect - resetting quiz state');
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setScore(0);
      setIsComplete(false);
    }
  }, [open, quiz]);

  // Always show dialog, but with different content based on quiz availability
  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{stateName}</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">Quiz coming soon for {stateName}!</p>
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    
    if (selectedAnswer === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsComplete(true);
      onQuizComplete(score + (selectedAnswer === question.correctAnswer ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setIsComplete(false);
  };

  if (isComplete) {
    const finalScore = score + (selectedAnswer === question.correctAnswer ? 1 : 0);
    const percentage = Math.round((finalScore / quiz.questions.length) * 100);
    
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Quiz Complete!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h3 className="text-3xl font-bold mb-2">{stateName}</h3>
            <div className="mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {finalScore}/{quiz.questions.length} ({percentage}%)
              </Badge>
            </div>
            <p className="text-muted-foreground mb-6">
              {percentage >= 80 ? "Excellent work!" : 
               percentage >= 60 ? "Good job!" : 
               "Keep learning!"}
            </p>
            <div className="flex gap-2">
              <Button onClick={handleRestart} variant="outline" className="flex-1">
                Retake Quiz
              </Button>
              <Button onClick={() => onOpenChange(false)} className="flex-1">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{stateName} Quiz</DialogTitle>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
              <span>Score: {score}/{quiz.questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </DialogHeader>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const isIncorrect = showFeedback && isSelected && !isCorrect;
                const showAsCorrect = showFeedback && isCorrect;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                    className={cn(
                      "w-full p-4 text-left rounded-lg border-2 transition-all",
                      "hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring",
                      {
                        "border-primary bg-primary/5": isSelected && !showFeedback,
                        "border-secondary bg-secondary/20": showAsCorrect,
                        "border-destructive bg-destructive/20": isIncorrect,
                        "border-border": !isSelected && !showAsCorrect,
                        "cursor-not-allowed": showFeedback,
                      }
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showFeedback && (
                        <>
                          {showAsCorrect && <CheckCircle className="w-5 h-5 text-secondary" />}
                          {isIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                        </>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {showFeedback && question.explanation && (
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="flex justify-end gap-2">
          {!showFeedback ? (
            <Button 
              onClick={handleSubmitAnswer} 
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestion < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}