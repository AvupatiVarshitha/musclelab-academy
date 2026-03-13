import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import Layout from "@/components/Layout";
import { exercises } from "@/data/exercises";
import { exerciseImages } from "@/data/exerciseImages";

const allMuscleGroups = ["All", ...Array.from(new Set(exercises.map((e) => e.muscleGroup)))];
const allDifficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const difficultyColor: Record<string, string> = {
  Beginner: "bg-green-900/30 text-green-400",
  Intermediate: "bg-yellow-900/30 text-yellow-400",
  Advanced: "bg-red-900/30 text-red-400",
};

const WorkoutsPage = () => {
  const [search, setSearch] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filtered = exercises.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = muscleFilter === "All" || e.muscleGroup === muscleFilter;
    const matchesDifficulty = difficultyFilter === "All" || e.difficulty === difficultyFilter;
    return matchesSearch && matchesMuscle && matchesDifficulty;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 font-display text-4xl font-bold text-foreground">Exercise Library</h1>
          <p className="text-muted-foreground">Master every movement with detailed guides and tips</p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            <Filter className="h-5 w-5 shrink-0 text-muted-foreground" />
            {allMuscleGroups.map((mg) => (
              <button
                key={mg}
                onClick={() => setMuscleFilter(mg)}
                className={`shrink-0 rounded-full px-4 py-1.5 font-display text-xs font-medium uppercase tracking-wider transition-colors ${
                  muscleFilter === mg
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {mg}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {allDifficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={`shrink-0 rounded-full px-4 py-1.5 font-display text-xs font-medium uppercase tracking-wider transition-colors ${
                  difficultyFilter === d
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="mb-4 text-sm text-muted-foreground">{filtered.length} exercises found</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exercise) => (
            <Link
              key={exercise.id}
              to={`/exercise/${exercise.id}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-glow"
            >
              {/* Exercise Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exerciseImages[exercise.id]}
                  alt={exercise.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded bg-background/80 px-2 py-1 font-display text-xs font-medium uppercase text-muted-foreground backdrop-blur-sm">
                    {exercise.muscleGroup}
                  </span>
                  <span className={`rounded px-2 py-1 text-xs font-medium backdrop-blur-sm ${difficultyColor[exercise.difficulty]}`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exercise.name}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Primary: {exercise.primaryMuscle}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{exercise.equipment}</span>
                  <span>{exercise.sets} × {exercise.reps}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WorkoutsPage;
