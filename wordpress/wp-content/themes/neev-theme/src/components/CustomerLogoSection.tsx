import React from "react";
import { MarqueeLogoScroller, type Logo } from "@/components/MarqueeLogoScroller";

// Centralized brand-aligned gradient map for customer logos.
// Each gradient is used for the hover state on the corresponding logo card.
const CUSTOMER_GRADIENTS: Record<string, Logo["gradient"]> = {
  // Life Sciences
  Cepheid:           { from: "#0072CE", via: "#00A3E0", to: "#005EB8" },
  "Guardant Health": { from: "#1B4F8C", via: "#2E7CC1", to: "#0E2F5C" },
  Natera:            { from: "#E4002B", via: "#FF4D6D", to: "#A80020" },

  // CPG & Retail
  "Bellwether Coffee":     { from: "#6F4E37", via: "#A0522D", to: "#3E2723" },
  "Brilliant Earth":       { from: "#7BA098", via: "#A8C5BD", to: "#4F726B" },
  Cricut:                  { from: "#46B49E", via: "#6FD3BC", to: "#2E8472" },
  Duraflame:               { from: "#E25822", via: "#F2994A", to: "#B23A0B" },
  "Restoration Hardware":  { from: "#3A3A3A", via: "#6B6B6B", to: "#1A1A1A" },
  "Stitch Fix":            { from: "#1F1646", via: "#3B2E80", to: "#0F0A26" },

  // Hi-tech (staged for future use)
  F5:                 { from: "#E4002B", via: "#FF4D6D", to: "#A80020" },
  "General Datatech": { from: "#003B71", via: "#0070BA", to: "#001F3F" },
  Genesys:            { from: "#FF4F1F", via: "#FF7A4F", to: "#C7330E" },
  Icertis:            { from: "#0078D4", via: "#3FA9F5", to: "#005A9E" },
  Lenovo:             { from: "#E2231A", via: "#F25B52", to: "#A8120C" },
  Logitech:           { from: "#00B8FC", via: "#4DD2FF", to: "#0086C7" },
  OneTrust:           { from: "#0F5DA8", via: "#3A86D6", to: "#08407A" },
  Unity:              { from: "#222C37", via: "#3E4D5E", to: "#0E141B" },
  Upwork:             { from: "#14A800", via: "#3FCD2A", to: "#0C7B00" },
  "View Inc.":        { from: "#1F4E79", via: "#3A78AE", to: "#0F2C45" },

  // Banking & Financial Services (staged for future use)
  Mizuho:          { from: "#003F7F", via: "#0066B3", to: "#00264D" },
  "Verition Fund": { from: "#1A2A4F", via: "#3E5689", to: "#0A1530" },
};

const FALLBACK_GRADIENT: Logo["gradient"] = {
  from: "#243E90",
  via: "#3163AF",
  to: "#1A2D6B",
};

export interface CustomerLogo {
  src: string;
  alt: string;
}

interface CustomerLogoSectionProps {
  logos: CustomerLogo[];
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Reusable "Trusted By Industry Leaders" section for industry subpages.
 * Wraps MarqueeLogoScroller with brand-aligned gradients per customer.
 * Renders nothing when `logos` is empty so pages without customers
 * (e.g. Healthcare) can opt out cleanly.
 */
const CustomerLogoSection: React.FC<CustomerLogoSectionProps> = ({
  logos,
  title = "Trusted By Industry Leaders",
  description = "Enterprises that partner with Neev Systems to drive their digital transformation.",
  className,
}) => {
  if (!logos || logos.length === 0) return null;

  const enriched: Logo[] = logos.map((l) => ({
    src: l.src,
    alt: l.alt,
    gradient: CUSTOMER_GRADIENTS[l.alt] ?? FALLBACK_GRADIENT,
  }));

  // Use a slower marquee when only a handful of logos are present so the
  // strip feels intentional rather than spinning.
  const speed = logos.length <= 3 ? "slow" : "normal";

  return (
    <MarqueeLogoScroller
      title={title}
      description={description}
      logos={enriched}
      speed={speed}
      className={className}
    />
  );
};

export default CustomerLogoSection;