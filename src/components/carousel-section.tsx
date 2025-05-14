import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Assuming this is a utility for merging class names

type Partner = {
  id: number;
  name: string;
  logo: string;
  url?: string;
};

interface PartnershipCarouselProps {
  title?: string;
  partners: Partner[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  className?: string;
}

export default function PartnershipCarousel({
  title = "Be part of the Cult",
  partners,
  autoScroll = true,
  scrollSpeed = 30,
  className,
}: PartnershipCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoScroll || isHovering || !scrollContainerRef.current) return;

    const pixelsPerFrame = (100 - Math.min(Math.max(scrollSpeed, 10), 90)) / 10;
    let animationFrameId: number;

    const scroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      container.scrollLeft += pixelsPerFrame;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    const timerId = setTimeout(() => {
      if (!isHovering) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    }, 100);

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoScroll, isHovering, scrollSpeed]);

  if (!partners || partners.length === 0) {
    console.warn("PartnershipCarousel: No partners provided");
    return null;
  }

  const displayPartners = [...partners, ...partners];

  return (
    <section className={cn(
      "w-full min-h-screen flex flex-col justify-evenly py-8", // Center vertically using flex
      "bg-neutral-800", // Main background color
      className
    )}>
      <h2 className={cn(
        "text-6xl font-bold mb-8 text-center px-8 ", // Center text horizontally
        "text-neutral-200",
        "wave-animation",
      )}>
        {title}
      </h2>

      <div
        className="relative overflow-hidden h-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={scrollContainerRef}
          className="flex items-center justify-start overflow-x-auto scrollbar-hide gap-8 pb-4 px-8" // Align items vertically in the center
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'auto'
          }}
        >
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className={cn(
                "flex-none rounded-lg flex items-center justify-center transition-all p-4",
                "bg-neutral-700",       // Card background color
                "border border-neutral-600", // Card border color
                "hover:border-red-700",   // Card hover border accent color
                "hover:scale-105",       // Card hover scale effect
                "shadow-lg",             // Card shadow
                "transition-transform duration-300 ease-in-out",
                "cursor-pointer"
              )}
              style={{
                width: "360px",
                height: "360px",
                flexShrink: 0
              }}
            >
              {partner.url ? (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                  aria-label={`Visit ${partner.name}`}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-fill outline-neutral-400"
                  />
                </a>
              ) : (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-w-full max-h-full object-fill outline-neutral-400"
                />
              )}
            </div>
          ))}
        </div>

        {/* Gradient overlays using the chosen Tailwind background color */}
        <div className={cn(
          "absolute top-0 left-0 h-full w-12 z-10 to-transparent pointer-events-none",
          "bg-gradient-to-r from-neutral-800"
        )} />
        <div className={cn(
          "absolute top-0 right-0 h-full w-12 z-10 to-transparent pointer-events-none",
          "bg-gradient-to-l from-neutral-800"
        )} />
      </div>
    </section>
  );
}