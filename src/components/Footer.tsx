import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold tracking-wider">
              MUSCLE<span className="text-primary">LAB</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Train Smarter. Build Stronger. Your complete fitness learning platform.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Training</h4>
          <div className="flex flex-col gap-2">
            <Link to="/workouts" className="text-sm text-muted-foreground hover:text-primary">Workouts</Link>
            <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary">Programs</Link>
            <Link to="/muscles" className="text-sm text-muted-foreground hover:text-primary">Muscle Groups</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Learn</h4>
          <div className="flex flex-col gap-2">
            <Link to="/diet" className="text-sm text-muted-foreground hover:text-primary">Diet Plans</Link>
            <Link to="/guides" className="text-sm text-muted-foreground hover:text-primary">Beginner Guide</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-sm font-semibold text-foreground">Motivation</h4>
          <p className="text-sm italic text-muted-foreground">"Consistency builds strength."</p>
          <p className="mt-2 text-sm italic text-muted-foreground">"Train with purpose."</p>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 MuscleLab. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
