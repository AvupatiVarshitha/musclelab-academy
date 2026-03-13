import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { muscleGroups, exercises } from "@/data/exercises";

const MusclesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 font-display text-4xl font-bold text-foreground">Muscle Groups</h1>
          <p className="text-muted-foreground">Understand your muscles and how to train them effectively</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {muscleGroups.map((mg) => {
            const relatedExercises = exercises.filter((e) => e.muscleGroup === mg.name);
            return (
              <div key={mg.name} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-foreground">{mg.name}</h2>
                  <span className="rounded bg-secondary px-3 py-1 font-display text-xs uppercase text-muted-foreground">
                    {mg.category}
                  </span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{mg.description}</p>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Training Frequency</span>
                    <span className="text-foreground">{mg.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Recommended Split</span>
                    <span className="text-foreground">{mg.recommendedSplit}</span>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-primary">
                    Best Exercises
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {relatedExercises.slice(0, 5).map((e) => (
                      <Link
                        key={e.id}
                        to={`/exercise/${e.id}`}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {e.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MusclesPage;
