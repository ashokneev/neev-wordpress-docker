import React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

const noInvertLogos = ['Salesforce', 'Incorta'];

const LogoCard = ({ logo }: { logo: Logo }) => {
  const [hovered, setHovered] = React.useState(false);
  const shouldInvert = hovered && !noInvertLogos.includes(logo.alt);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="shrink-0 relative flex items-center justify-center rounded-2xl overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      style={{
        width: hovered ? 180 : 130,
        height: hovered ? 110 : 90,
        background: hovered
          ? `linear-gradient(135deg, ${logo.gradient.from}, ${logo.gradient.via}, ${logo.gradient.to})`
          : '#F8F9FA',
        boxShadow: hovered
          ? `0 8px 30px -5px ${logo.gradient.from}44`
          : '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="relative z-10 max-w-[70%] max-h-[50%] w-auto h-auto object-contain transition-all duration-300"
        style={{
          filter: shouldInvert ? 'brightness(0) invert(1)' : 'none',
        }}
        loading="lazy"
      />
    </div>
  );
};

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    const durationMap = { normal: '35s', slow: '60s', fast: '20s' };
    const animationDuration = durationMap[speed];

    return (
      <>
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}</style>

        <section
          ref={ref}
          className={cn('relative py-20 lg:py-28 bg-background', className)}
          {...props}
        >
          <div className="container mx-auto px-6 lg:px-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div
            className="marquee-container"
            style={{
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <div
              className="marquee-track"
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '24px',
                width: 'max-content',
                animation: 'marquee-scroll 25s linear infinite',
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={index} logo={logo} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
export type { Logo, MarqueeLogoScrollerProps };
