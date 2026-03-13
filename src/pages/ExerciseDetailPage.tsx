import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Target, Clock, AlertTriangle, Lightbulb, Repeat, Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import { exercises } from "@/data/exercises";
import { exerciseImages } from "@/data/exerciseImages";

const ExerciseDetailPage = () => {
  const { id } = useParams();
  const exercise = exercises.find((e) => e.id === id);

  if (!exercise) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 font-display text-3xl text-foreground">Exercise Not Found</h1>
            <Link to="/workouts" className="text-primary hover:underline">← Back to Workouts</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden md:h-80">
        <img
          src={exerciseImages[exercise.id]}
          alt={exercise.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <Link to="/workouts" className="mb-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Back to Exercises
            </Link>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="rounded bg-secondary/80 px-3 py-1 font-display text-xs font-medium uppercase text-muted-foreground backdrop-blur-sm">
                {exercise.muscleGroup}
              </span>
              <span className="rounded bg-primary/20 px-3 py-1 font-display text-xs font-medium uppercase text-primary backdrop-blur-sm">
                {exercise.difficulty}
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {exercise.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Instructions */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                <Target className="h-5 w-5 text-primary" /> Step-by-Step Instructions
              </h2>
              <ol className="space-y-3">
                {exercise.instructions.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Common Mistakes */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-primary" /> Common Mistakes
              </h2>
              <ul className="space-y-2">
                {exercise.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                <Lightbulb className="h-5 w-5 text-primary" /> Pro Tips
              </h2>
              <ul className="space-y-2">
                {exercise.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Variations */}
            {exercise.variations.length > 0 && (
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                  <Repeat className="h-5 w-5 text-primary" /> Variations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {exercise.variations.map((v) => (
                    <span key={v} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-foreground">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Quick Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Equipment</p>
                  <p className="font-medium text-foreground">{exercise.equipment}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Primary Muscle</p>
                  <p className="font-medium text-foreground">{exercise.primaryMuscle}</p>
                </div>
                {exercise.secondaryMuscles.length > 0 && (
                  <div>
                    <p className="text-muted-foreground">Secondary Muscles</p>
                    <p className="font-medium text-foreground">{exercise.secondaryMuscles.join(", ")}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Recommended</p>
                  <p className="font-medium text-foreground">{exercise.sets} sets × {exercise.reps} reps</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Clock className="h-5 w-5 text-primary" /> Best Time
              </h3>
              <p className="text-sm text-muted-foreground">{exercise.bestTime}</p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/5 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Dumbbell className="h-5 w-5 text-primary" /> Related Exercises
              </h3>
              <div className="space-y-2">
                {exercises
                  .filter((e) => e.muscleGroup === exercise.muscleGroup && e.id !== exercise.id)
                  .slice(0, 4)
                  .map((e) => (
                    <Link
                      key={e.id}
                      to={`/exercise/${e.id}`}
                      className="flex items-center gap-3 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      <img src={exerciseImages[e.id]} alt={e.name} className="h-10 w-10 rounded object-cover" />
                      <span>{e.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExerciseDetailPage;
