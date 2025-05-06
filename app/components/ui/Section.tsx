// components/ui/Section.tsx
import { forwardRef, type CSSProperties, type ReactNode } from "react";

export type SectionProps = {
  className?: string;
  children: ReactNode;
  maxWidth?: string;
  style?: CSSProperties;
};

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className = "", maxWidth = "1280px", style = {} }, ref) => {
    return (
      <div
        className={`section-container ${className}`}
        ref={ref}
        style={{ ...style }}
      >
        <div className="section-inner" style={{ maxWidth }}>
          {children}
        </div>
      </div>
    );
  }
);

Section.displayName = "Section";
