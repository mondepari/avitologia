import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CasesPage from "@/pages/cases";
import CaseDetails from "@/pages/case-details";
import BackToTop from "@/components/ui/back-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cases" component={CasesPage} />
      <Route path="/cases/:id" component={CaseDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="dark">
      <QueryClientProvider client={queryClient}>
        <div className="bg-background min-h-screen">
          <Router />
          <Toaster />
          <BackToTop />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
