import { AlertTriangle, Clock, BookOpen, Sun, Moon, Pill, BedDouble } from "lucide-react";
import Layout from "@/components/Layout";

const mistakes = [
  { title: "Lifting Too Heavy", desc: "Ego lifting leads to injury. Start with a weight you can control with proper form." },
  { title: "Bad Form", desc: "Quality over quantity. Perfect your form before adding weight." },
  { title: "No Warm Up", desc: "Always warm up with 5-10 minutes of light cardio and dynamic stretches." },
  { title: "No Progressive Overload", desc: "Gradually increase weight, reps, or sets to continue making progress." },
  { title: "Overtraining", desc: "More isn't always better. Your muscles grow during rest, not during training." },
  { title: "Ignoring Rest Days", desc: "Take at least 1-2 rest days per week for recovery and muscle repair." },
];

const beginnerSteps = [
  "Set clear, realistic goals (e.g., gain 5kg muscle in 6 months)",
  "Start with a full-body 3-day program",
  "Learn proper form for compound movements first",
  "Focus on progressive overload week by week",
  "Track your workouts in a notebook or app",
  "Sleep 7-9 hours per night for optimal recovery",
  "Stay consistent — results come after 8-12 weeks",
];

const GuidesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 font-display text-4xl font-bold text-foreground">Fitness Guides</h1>
          <p className="text-muted-foreground">Essential knowledge to train safely and effectively</p>
        </div>

        {/* Beginner Guide */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <BookOpen className="h-6 w-6 text-primary" /> How to Start Going to the Gym
          </h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <ol className="space-y-4">
              {beginnerSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 font-display text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <AlertTriangle className="h-6 w-6 text-primary" /> Common Workout Mistakes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mistakes.map((m) => (
              <div key={m.title} className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Best Time to Workout */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <Clock className="h-6 w-6 text-primary" /> Best Time to Workout
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Sun className="h-5 w-5 text-yellow-400" /> Morning Training
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Boosts metabolism for the rest of the day</li>
                <li>• Fewer distractions, gym is less crowded</li>
                <li>• Improves mental focus and energy</li>
                <li>• Best for: fat loss, consistency seekers</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <Moon className="h-5 w-5 text-blue-400" /> Evening Training
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Body temperature peaks = better performance</li>
                <li>• More fuel from meals throughout the day</li>
                <li>• Higher strength and power output</li>
                <li>• Best for: muscle building, strength gains</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Supplements */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <Pill className="h-6 w-6 text-primary" /> Supplements Guide
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Whey Protein", use: "Post-workout recovery, meeting daily protein goals" },
              { name: "Creatine", use: "Increases strength, power, and muscle mass. 5g daily." },
              { name: "BCAAs", use: "May help reduce soreness. Not essential if protein is adequate." },
              { name: "Multivitamin", use: "Fills nutritional gaps. Take with a meal." },
              { name: "Fish Oil", use: "Omega-3 for joint health and inflammation." },
              { name: "Caffeine", use: "Pre-workout energy boost. 200-400mg 30 min before training." },
            ].map((s) => (
              <div key={s.name} className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{s.name}</h3>
                <p className="text-xs text-muted-foreground">{s.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery */}
        <section>
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <BedDouble className="h-6 w-6 text-primary" /> Recovery & Sleep
          </h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Why Sleep Matters</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Growth hormone is released during deep sleep</li>
                  <li>• Muscles repair and grow during rest</li>
                  <li>• Poor sleep increases cortisol (stress hormone)</li>
                  <li>• Aim for 7-9 hours of quality sleep</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">Recovery Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stretch after every workout (5-10 min)</li>
                  <li>• Stay hydrated — 3-4 liters of water daily</li>
                  <li>• Consider foam rolling for tight muscles</li>
                  <li>• Take deload weeks every 6-8 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GuidesPage;
