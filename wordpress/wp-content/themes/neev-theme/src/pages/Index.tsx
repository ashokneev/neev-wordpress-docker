import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AiPositioningSection from "@/components/AiPositioningSection";
import ServicesSection from "@/components/ServicesSection";
import WhyNeevSection from "@/components/WhyNeevSection";
import { MarqueeLogoScroller } from "@/components/MarqueeLogoScroller";
import IndustriesSection from "@/components/IndustriesSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import salesforceLogo from "@/assets/salesforce-logo.png";
import workatoLogo from "@/assets/workato-logo.png";
import incortaLogo from "@/assets/incorta-logo.png";
import muleSoftLogo from "@/assets/mulesoft-logo.png";
import CustomerLogoSection from "@/components/CustomerLogoSection";
import cricutLogo from "@/assets/customers/cricut.png";
import genesysLogo from "@/assets/customers/genesys.png";
import guardantLogo from "@/assets/customers/guardant-health.png";
import lenovoLogo from "@/assets/customers/lenovo.png";
import logitechLogo from "@/assets/customers/logitech.png";
import nateraLogo from "@/assets/customers/natera.png";
import unityLogo from "@/assets/customers/unity.png";

const trustedCustomers = [
  { src: unityLogo, alt: "Unity" },
  { src: logitechLogo, alt: "Logitech" },
  { src: guardantLogo, alt: "Guardant Health" },
  { src: nateraLogo, alt: "Natera" },
  { src: cricutLogo, alt: "Cricut" },
  { src: genesysLogo, alt: "Genesys" },
  { src: lenovoLogo, alt: "Lenovo" },
];

const partnerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", alt: "Oracle", gradient: { from: "#F80000", via: "#C74634", to: "#8B0000" } },
  { src: salesforceLogo, alt: "Salesforce", gradient: { from: "#00A1E0", via: "#1798C1", to: "#032D60" } },
  { src: incortaLogo, alt: "Incorta", gradient: { from: "#0072CE", via: "#005BAC", to: "#003F7D" } },
  { src: workatoLogo, alt: "Workato", gradient: { from: "#4B48EC", via: "#6C63FF", to: "#3D3AB5" } },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg", alt: "ServiceNow", gradient: { from: "#81B532", via: "#62A60A", to: "#4C8C00" } },
  { src: muleSoftLogo, alt: "MuleSoft", gradient: { from: "#00A0DF", via: "#0080C0", to: "#005A8C" } },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CustomerLogoSection
        logos={trustedCustomers}
        title="Trusted By Industry Leaders"
        description="Enterprises across industries partner with Neev Systems to power their digital transformation."
      />
      <AiPositioningSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="why-neev">
        <WhyNeevSection />
      </div>
      <MarqueeLogoScroller
        title="Alliances and Partnership"
        description="Partnering with the world's leading technology platforms to deliver enterprise excellence."
        logos={partnerLogos}
        speed="normal"
      />
      <div id="industries">
        <IndustriesSection />
      </div>
      <div id="contact">
        <FinalCtaSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
