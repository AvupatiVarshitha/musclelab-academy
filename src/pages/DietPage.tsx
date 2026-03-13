import { Utensils, Apple, Beef, Egg, Wheat, Flame, Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import dietHero from "@/assets/diet-hero.jpg";

const mealPlan = [
  { meal: "Breakfast (7 AM)", items: ["4 egg whites + 1 whole egg omelette", "Oats with banana", "Black coffee or green tea"] },
  { meal: "Pre-Workout (10 AM)", items: ["Banana with peanut butter", "Handful of almonds"] },
  { meal: "Lunch (1 PM)", items: ["200g grilled chicken breast", "1 cup brown rice", "Mixed vegetables", "Side salad with olive oil"] },
  { meal: "Post-Workout (4 PM)", items: ["Protein shake with milk", "1 banana", "Handful of dried fruits"] },
  { meal: "Dinner (7 PM)", items: ["200g grilled fish or chicken", "Sweet potato or quinoa", "Steamed broccoli and spinach"] },
  { meal: "Before Bed (9 PM)", items: ["Greek yogurt with berries", "Casein protein (optional)"] },
];

const muscleGainFoods = [
  { name: "Chicken Breast", benefit: "High protein, low fat", icon: Beef },
  { name: "Eggs", benefit: "Complete protein source", icon: Egg },
  { name: "Brown Rice", benefit: "Complex carbs for energy", icon: Wheat },
  { name: "Oats", benefit: "Slow-digesting carbs", icon: Wheat },
  { name: "Fruits", benefit: "Vitamins and natural sugars", icon: Apple },
  { name: "Healthy Fats", benefit: "Avocado, nuts, olive oil", icon: Droplets },
];

const DietPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-48 overflow-hidden md:h-64">
        <img src={dietHero} alt="Healthy meal prep" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground">Diet & Nutrition</h1>
            <p className="text-muted-foreground">Fuel your training with the right nutrition</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Muscle Gain Section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <Flame className="h-6 w-6 text-primary" /> Muscle Gain Diet
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {muscleGainFoods.map((food) => (
              <div key={food.name} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
                <food.icon className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-display font-semibold text-foreground">{food.name}</p>
                  <p className="text-sm text-muted-foreground">{food.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fat Loss Section */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <Utensils className="h-6 w-6 text-primary" /> Fat Loss Principles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Maintain calorie deficit (300-500 cal below maintenance)", "High protein intake (1.6-2.2g per kg bodyweight)", "Eat fiber-rich foods for satiety", "Minimize added sugars and processed foods"].map((tip) => (
              <div key={tip} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meal Plan */}
        <section>
          <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Sample Daily Meal Plan</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mealPlan.map((meal) => (
              <div key={meal.meal} className="rounded-lg border border-border bg-card p-5">
                <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-primary">
                  {meal.meal}
                </h3>
                <ul className="space-y-2">
                  {meal.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DietPage;
