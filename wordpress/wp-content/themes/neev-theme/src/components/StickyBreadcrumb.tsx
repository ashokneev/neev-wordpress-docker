import { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

interface StickyBreadcrumbProps {
  children: ReactNode;
  className?: string;
}

const StickyBreadcrumb = ({ children, className }: StickyBreadcrumbProps) => {
  return (
    <div className={`sticky top-16 lg:top-20 z-40 transition-all duration-300 backdrop-blur-xl border-b border-border/30 shadow-[0_1px_8px_-4px_hsl(var(--foreground)/0.06)] ${className || "bg-background"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <Breadcrumb className="py-3 text-sm md:text-sm text-xs">
          <BreadcrumbList>
            {children}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default StickyBreadcrumb;
