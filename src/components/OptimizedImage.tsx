import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  eager?: boolean;
}

const OptimizedImage = ({ src, alt, className = "", style, eager = false }: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(eager);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return;
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {/* Skeleton placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
      />
      {inView && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
          style={style}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
