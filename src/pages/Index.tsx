import { Link } from "react-router-dom";
import { Dumbbell, Target, Utensils, AlertTriangle, Users, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-gym.jpg";

const categories = [
  { icon: Dumbbell, title: "Workouts", desc: "Complete exercise library with step-by-step guides", link: "/workouts" },
  { icon: Target, title: "Programs", desc: "Structured training plans for every level", link: "/programs" },
  { icon: Users, title: "Muscle Groups", desc: "Learn anatomy and targeted training", link: "/muscles" },
  { icon: Utensils, title: "Diet Plans", desc: "Nutrition guides for muscle gain and fat loss", link: "/diet" },
  { icon: AlertTriangle, title: "Common Mistakes", desc: "Avoid training pitfalls and injuries", link: "/guides" },
  { icon: BookOpen, title: "Beginner Guide", desc: "Everything you need to start your journey", link: "/guides" },
];

const testimonials = [
  { name: "Alex M.", text: "MuscleLab helped me go from skinny to confident in 6 months. The beginner program was perfect.", rating: 5 },
  { name: "Sarah K.", text: "Finally a fitness platform that explains the WHY behind every exercise. Game changer!", rating: 5 },
  { name: "Raj P.", text: "The structured programs saved me from wasting time with random workouts. Highly recommend.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Athlete training in dark gym" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Your Fitness Journey Starts Here
            </p>
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-foreground md:text-7xl">
              Train Smarter.<br />
              <span className="text-gradient">Build Stronger.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Complete workout guides, structured programs, and nutrition plans designed for beginners to advanced athletes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="bg-gradient-primary rounded-md px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground shadow-glow transition-transform hover:scale-105"
              >
                Start Training
              </Link>
              <Link
                to="/workouts"
                className="rounded-md border border-border bg-secondary px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
              >
                Explore Workouts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need
            </h2>
            <p className="text-muted-foreground">Explore our comprehensive fitness knowledge base</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-glow"
              >
                <cat.icon className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold text-foreground">What Athletes Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground italic">"{t.text}"</p>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Ready to <span className="text-gradient">Transform</span>?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Start with our beginner program and build the foundation for a stronger you.
          </p>
          <Link
            to="/programs"
            className="bg-gradient-primary inline-block rounded-md px-10 py-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground shadow-glow transition-transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
