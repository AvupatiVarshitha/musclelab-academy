import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { muscleGroups, exercises } from "@/data/exercises";
import { exerciseImages } from "@/data/exerciseImages";
import musclesHero from "@/assets/muscles-hero.jpg";

const MusclesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <img src={musclesHero} alt="Muscle anatomy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground">Muscle Groups</h1>
            <p className="text-muted-foreground">Understand your muscles and how to train them effectively</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {muscleGroups.map((mg) => {
            const relatedExercises = exercises.filter((e) => e.muscleGroup === mg.name);
            return (
              <div key={mg.name} className="overflow-hidden rounded-lg border border-border bg-card">
                {/* Show first exercise image as category header */}
                {relatedExercises[0] && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={exerciseImages[relatedExercises[0].id]}
                      alt={mg.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="rounded bg-primary/20 px-3 py-1 font-display text-xs uppercase text-primary backdrop-blur-sm">
                        {mg.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h2 className="mb-2 font-display text-2xl font-bold text-foreground">{mg.name}</h2>
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
                    <div className="grid grid-cols-2 gap-2">
                      {relatedExercises.slice(0, 4).map((e) => (
                        <Link
                          key={e.id}
                          to={`/exercise/${e.id}`}
                          className="flex items-center gap-2 rounded-md border border-border bg-background p-2 text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <img src={exerciseImages[e.id]} alt={e.name} className="h-8 w-8 rounded object-cover" />
                          <span className="truncate">{e.name}</span>
                        </Link>
                      ))}
                    </div>
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
