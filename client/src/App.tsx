import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import BuyerInspection from "./pages/BuyerInspection";
import PreListingInspection from "./pages/PreListingInspection";
import NewConstructionInspection from "./pages/NewConstructionInspection";
import RadonTesting from "./pages/RadonTesting";
import AreasServed from "./pages/AreasServed";
import SandpointInspection from "./pages/SandpointInspection";
import CdaInspection from "./pages/CdaInspection";
import PostFallsInspection from "./pages/PostFallsInspection";
import Reviews from "./pages/Reviews";
import SampleReports from "./pages/SampleReports";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import WellWaterTesting from "./pages/WellWaterTesting";
import SewerScope from "./pages/SewerScope";
import LeadMoldPest from "./pages/LeadMoldPest";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/buyer-home-inspection" component={BuyerInspection} />
      <Route path="/services/pre-listing-inspection" component={PreListingInspection} />
      <Route path="/services/new-construction-inspection" component={NewConstructionInspection} />
      <Route path="/services/radon-testing" component={RadonTesting} />
      <Route path="/services/well-water-testing" component={WellWaterTesting} />
      <Route path="/services/sewer-scope" component={SewerScope} />
      <Route path="/services/lead-mold-pest" component={LeadMoldPest} />
      <Route path="/areas-served" component={AreasServed} />
      <Route path="/sandpoint-home-inspector" component={SandpointInspection} />
      <Route path="/coeur-dalene-home-inspection" component={CdaInspection} />
      <Route path="/post-falls-home-inspector" component={PostFallsInspection} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/sample-reports" component={SampleReports} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
