import { ArrowRight, Linkedin, Phone, MapPin } from "lucide-react";
import neevLogo from "@/assets/neev-logo.png";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/contexts/ContactFormContext";

const services = [
  { label: "Enterprise Application Services", href: "/services/enterprise-application-services" },
  { label: "Enterprise Integration Services", href: "/services/enterprise-integration-services" },
  { label: "Product Engineering", href: "/services/product-engineering" },
  { label: "Data & Analytics", href: "/services/data-analytics" },
  { label: "Application Management Services", href: "/services/application-management-services" },
  { label: "Virtual Captive Center", href: "/services/virtual-captive-center" },
  { label: "Testing as a Service", href: "/services/testing-services" },
];

const technologies = [
  { label: "Oracle", href: "/technologies/oracle" },
  { label: "Salesforce", href: "/technologies/salesforce" },
  { label: "ServiceNow", href: "/technologies/servicenow" },
  { label: "Workato", href: "/technologies/workato" },
];

const resources = [
  { label: "Blogs", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ", href: "https://neevsystems.com/faqs/" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Careers", href: "https://neevsystems.com/careers/" },
  { label: "Contact Us", href: "#contact-us" },
  { label: "Privacy Policy", href: "https://neevsystems.com/privacy-policy/" },
];

const industries = [
  { label: "Life Sciences", href: "/industries/life-sciences" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "CPG & Retail", href: "/industries/cpg-retail" },
];

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors duration-200"
    aria-label={label}
  >
    {children}
  </a>
);

const LinkColumn = ({ title, items }: { title: string; items: { label: string; href: string }[] }) => (
  <div>
    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/80 mb-4">{title}</h4>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


const Footer = () => {
  const { openContactForm } = useContactForm();
  return (
    <footer className="relative">
      {/* Grid background — darker base so pattern is visible behind the floating card */}
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: "hsl(226, 30%, 14%)" }}>
        <AnimatedGridPattern numSquares={40} maxOpacity={0.25} duration={4} className="text-white/10 stroke-white/10 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)]" />
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-wave-float" />
        <div className="absolute bottom-20 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-wave-float-reverse" />
      </div>

      {/* Floating card */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-[1360px] mx-auto rounded-3xl shadow-[0_8px_60px_-12px_hsl(226,55%,8%/0.25)] overflow-hidden border border-border/40 bg-card">
          {/* ── Top CTA section ── */}
          <div className="px-6 sm:px-10 lg:px-14 pt-12 pb-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-border/60">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold tracking-tight leading-snug text-foreground max-w-lg">
              Reliable IT solutions —{" "}
              <span className="text-foreground/75 font-semibold">built for your business.</span>
            </h2>

            <div className="flex w-full flex-col sm:flex-row items-start sm:items-center gap-5 lg:w-auto">
              {/* CTA Buttons */}
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="w-full rounded-xl px-5 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 sm:w-auto sm:px-7"
                  onClick={() => openContactForm("footer")}
                >
                  Get started for free <ArrowRight className="ml-1" size={16} />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-xl px-5 sm:w-auto sm:px-7"
                  onClick={() => openContactForm("footer")}
                >
                  Contact us <ArrowRight className="ml-1" size={16} />
                </Button>
              </div>

              {/* Logo + Social */}
              <div className="flex items-center gap-4 lg:ml-4">
                <img src={neevLogo} alt="Neev Systems" className="h-12 w-auto hidden sm:block" />
                <SocialIcon href="https://www.linkedin.com/company/neev-systems/" label="LinkedIn">
                  <Linkedin size={15} />
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* ── Main link grid ── */}
          <div className="px-8 sm:px-10 lg:px-14 pt-10 pb-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
              <LinkColumn title="Services" items={services} />
              <LinkColumn title="Technologies" items={technologies} />
              <LinkColumn title="Industries" items={industries} />
              <LinkColumn title="Resources" items={resources} />
              <LinkColumn title="Company" items={company} />
            </div>
          </div>

          {/* ── Office Locations ── */}
          <div className="px-8 sm:px-10 lg:px-14 pt-8 pb-8 border-t border-border/60">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/80 mb-5">Our Offices</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex gap-2.5">
                <Phone size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-[13px] text-muted-foreground leading-relaxed">408-676-NEEV</p>
              </div>
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  691 S Milpitas Blvd, #217, Milpitas, CA-95035, United States
                </p>
              </div>
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  505 E Palm Valley Blvd, Ste 110, Round Rock, TX – 78664, United States
                </p>
              </div>
              <div className="flex gap-2.5">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  4th Floor, Hive Space 2.0, Divine Babylon building, Ramalayam Road, Whitefields, Kondapur, HITECH City Hyderabad – 500084, Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="px-8 sm:px-10 lg:px-14 py-5 border-t border-border/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} — Neev Systems. Built with care.
              </p>
              <p className="text-xs text-muted-foreground/60">ISO 27001:2022 Certified</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
