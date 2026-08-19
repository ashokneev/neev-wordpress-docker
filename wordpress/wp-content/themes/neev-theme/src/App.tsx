import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import ContactFormModal from "@/components/ContactFormModal";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

// Lazy-load every non-home route so the initial bundle stays small.
const NotFound = lazy(() => import("./pages/NotFound"));
const Workato = lazy(() => import("./pages/Workato"));
const Oracle = lazy(() => import("./pages/Oracle"));
const Salesforce = lazy(() => import("./pages/Salesforce"));
const ServiceNow = lazy(() => import("./pages/ServiceNow"));
const EnterpriseApplicationServices = lazy(() => import("./pages/EnterpriseApplicationServices"));
const EnterpriseIntegrationServices = lazy(() => import("./pages/EnterpriseIntegrationServices"));
const ProductEngineering = lazy(() => import("./pages/ProductEngineering"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const ApplicationManagementServices = lazy(() => import("./pages/ApplicationManagementServices"));
const VirtualCaptiveCenter = lazy(() => import("./pages/VirtualCaptiveCenter"));
const TestingServices = lazy(() => import("./pages/TestingServices"));
const LifeSciences = lazy(() => import("./pages/LifeSciences"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const CpgRetail = lazy(() => import("./pages/CpgRetail"));
const Hitech = lazy(() => import("./pages/Hitech"));
const BankingFinancialServices = lazy(() => import("./pages/BankingFinancialServices"));
const Blogs = lazy(() => import("./pages/Blogs"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Leadership = lazy(() => import("./pages/Leadership"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ContactFormProvider>
          <ContactFormModal />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/technologies/workato" element={<Workato />} />
                <Route path="/technologies/oracle" element={<Oracle />} />
                <Route path="/technologies/salesforce" element={<Salesforce />} />
                <Route path="/technologies/servicenow" element={<ServiceNow />} />
                <Route path="/services/enterprise-application-services" element={<EnterpriseApplicationServices />} />
                <Route path="/services/enterprise-integration-services" element={<EnterpriseIntegrationServices />} />
                <Route path="/services/product-engineering" element={<ProductEngineering />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/application-management-services" element={<ApplicationManagementServices />} />
                <Route path="/services/virtual-captive-center" element={<VirtualCaptiveCenter />} />
                <Route path="/services/testing-services" element={<TestingServices />} />
                <Route path="/industries/life-sciences" element={<LifeSciences />} />
                <Route path="/industries/healthcare" element={<Healthcare />} />
                <Route path="/industries/cpg-retail" element={<CpgRetail />} />
               <Route path="/industries/hi-tech" element={<Hitech />} />
               <Route path="/industries/banking-financial-services" element={<BankingFinancialServices />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/about/leadership" element={<Leadership />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ContactFormProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
