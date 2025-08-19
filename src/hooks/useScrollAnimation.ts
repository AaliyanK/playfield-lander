import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

export function useStaggerAnimation(delay = 0.1) {
  const [animations, setAnimations] = useState<boolean[]>([]);

  const triggerStagger = (count: number) => {
    const newAnimations = new Array(count).fill(false);
    setAnimations(newAnimations);

    newAnimations.forEach((_, index) => {
      setTimeout(() => {
        setAnimations((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * delay * 1000);
    });
  };

  return { animations, triggerStagger };
}
