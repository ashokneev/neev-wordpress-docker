import { useState, useEffect } from "react";
import neevLogo from "@/assets/neev-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useContactForm } from "@/contexts/ContactFormContext";

type NavChild = string | { label: string; href: string };

const childLabel = (c: NavChild) => (typeof c === "string" ? c : c.label);
const childHref = (c: NavChild) => (typeof c === "string" ? "#" : c.href);

const navItems: { label: string; children: NavChild[] }[] = [
  {
    label: "About Us",
    children: [
      { label: "About Neev", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      "Partners",
      "Careers",
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Enterprise Application Services", href: "/services/enterprise-application-services" },
      { label: "Enterprise Integration Services", href: "/services/enterprise-integration-services" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Application Management Services", href: "/services/application-management-services" },
      { label: "Virtual Captive Center (VCC)", href: "/services/virtual-captive-center" },
      { label: "Testing as a Service", href: "/services/testing-services" },
    ],
  },
  {
    label: "Technologies",
    children: [
      { label: "Oracle", href: "/technologies/oracle" },
      { label: "Salesforce", href: "/technologies/salesforce" },
      { label: "ServiceNow", href: "/technologies/servicenow" },
      { label: "Workato", href: "/technologies/workato" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Life Sciences", href: "/industries/life-sciences" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "CPG & Retail", href: "/industries/cpg-retail" },
      { label: "Hi-tech", href: "/industries/hi-tech" },
      { label: "Banking & Financial Services", href: "/industries/banking-financial-services" },
    ],
  },
  {
    label: "Resources",
    children: [{ label: "Blogs", href: "/blogs" }, "eBooks", "Whitepapers", { label: "Case Studies", href: "/case-studies" }, "FAQs"],
  },
];

const Navbar = ({ scrolledClassName, unscrolledClassName, logoClassName }: { scrolledClassName?: string; unscrolledClassName?: string; logoClassName?: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { openContactForm } = useContactForm();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `${scrolledClassName || "bg-background/80"} backdrop-blur-2xl shadow-[0_1px_20px_-6px_hsl(226_60%_35%/0.08)] border-b border-border/30`
          : unscrolledClassName || "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center group shrink-0">
            <img src={neevLogo} alt="Neev Systems" className={`h-12 lg:h-14 w-auto ${logoClassName || ""}`} />
          </a>

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground hover:bg-primary/[0.05] data-[state=open]:bg-primary/[0.05] data-[state=open]:text-foreground">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[220px] p-2">
                    <ul className="flex flex-col gap-0.5">
                      {item.children.map((child) => (
                        <li key={childLabel(child)}>
                          <NavigationMenuLink
                            href={childHref(child)}
                            className="block select-none rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 no-underline"
                          >
                            {childLabel(child)}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button
              size="sm"
              className="rounded-xl px-6 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={() => openContactForm("navbar")}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border/30 animate-hero-fade max-h-[80vh] overflow-y-auto">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Collapsible key={item.label}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/[0.05] rounded-lg transition-all duration-300 group">
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-0.5 pl-4 py-1">
                    {item.children.map((child) => (
                      <a
                        key={childLabel(child)}
                        href={childHref(child)}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                      >
                        {childLabel(child)}
                      </a>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Button
                size="sm"
                className="flex-1 rounded-xl"
                onClick={() => {
                  setMobileOpen(false);
                  openContactForm("navbar");
                }}
              >
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
