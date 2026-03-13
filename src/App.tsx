import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import WorkoutsPage from "./pages/WorkoutsPage.tsx";
import ExerciseDetailPage from "./pages/ExerciseDetailPage.tsx";
import ProgramsPage from "./pages/ProgramsPage.tsx";
import MusclesPage from "./pages/MusclesPage.tsx";
import DietPage from "./pages/DietPage.tsx";
import GuidesPage from "./pages/GuidesPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/exercise/:id" element={<ExerciseDetailPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/muscles" element={<MusclesPage />} />
          <Route path="/diet" element={<DietPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
