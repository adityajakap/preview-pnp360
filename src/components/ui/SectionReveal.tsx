'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export function SectionReveal({
  children,
  className = '',
  delayMs = 0,
}: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately without animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </div>
  );
}

