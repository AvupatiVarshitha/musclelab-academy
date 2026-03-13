import { useState } from "react";
import { Calendar, Dumbbell, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";
import { workoutPrograms } from "@/data/exercises";
import programsHero from "@/assets/programs-hero.jpg";

const levelColor: Record<string, string> = {
  Beginner: "bg-green-900/30 text-green-400 border-green-800",
  Intermediate: "bg-yellow-900/30 text-yellow-400 border-yellow-800",
  Advanced: "bg-red-900/30 text-red-400 border-red-800",
};

const ProgramsPage = () => {
  const [expanded, setExpanded] = useState<string | null>("beginner");

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <img src={programsHero} alt="Workout planning" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground">Workout Programs</h1>
            <p className="text-muted-foreground">Structured training plans for every fitness level</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          {workoutPrograms.map((program) => (
            <div key={program.id} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === program.id ? null : program.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium ${levelColor[program.level]}`}>
                      {program.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {program.daysPerWeek} days/week
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{program.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{program.description}</p>
                </div>
                {expanded === program.id ? (
                  <ChevronUp className="h-6 w-6 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-6 w-6 shrink-0 text-muted-foreground" />
                )}
              </button>

              {expanded === program.id && (
                <div className="border-t border-border p-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {program.schedule.map((day) => (
                      <div key={day.day} className="rounded-lg border border-border bg-background p-4">
                        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                          {day.day}
                        </h3>
                        <div className="space-y-2">
                          {day.exercises.map((ex) => (
                            <div key={ex.name} className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-2 text-foreground">
                                <Dumbbell className="h-3 w-3 text-muted-foreground" />
                                {ex.name}
                              </span>
                              <span className="text-muted-foreground">{ex.sets}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProgramsPage;
