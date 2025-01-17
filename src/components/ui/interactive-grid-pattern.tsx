import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? 
      Math.max(document.documentElement.scrollHeight, window.innerHeight) : 1080
  });
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  const squareSize = 60;
  const horizontal = Math.ceil(dimensions.width / squareSize) + 1;
  const vertical = Math.ceil(dimensions.height / squareSize) + 1;

  useEffect(() => {
    function handleResize() {
      const totalHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      );

      setDimensions({
        width: window.innerWidth,
        height: totalHeight
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <svg
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      className={cn(
        "fixed inset-0 w-full mix-blend-color-dodge",
        className
      )}
      style={{
        width: '100%',
        height: dimensions.height + 'px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: 'linear-gradient(to bottom,rgb(10, 5, 35),rgb(16, 37, 49))'
      }}
      {...props}
    >
      <defs>
        <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)">
            <animate
              attributeName="offset"
              values="0;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="20%" stopColor="rgba(255, 255, 255, 0.3)">
            <animate
              attributeName="offset"
              values="0.2;1.2"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="40%" stopColor="rgba(255,255,255,0.1)">
            <animate
              attributeName="offset"
              values="0.4;1.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * squareSize;
        const y = Math.floor(index / horizontal) * squareSize;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={squareSize}
            height={squareSize}
            className={cn(
              "transition-all duration-300 ease-in-out",
              hoveredSquare === index ? "fill-gray-300/10" : "fill-transparent",
              squaresClassName
            )}
            style={{
              stroke: 'url(#grid-gradient)',
              strokeWidth: '0.5'
            }}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
      
      {/* Capa de destello animado */}
      <rect
        width="100%"
        height="100%"
        fill="url(#grid-gradient)"
        className="opacity-5"
        style={{
          mixBlendMode: 'overlay'
        }}
      >
        <animate
          attributeName="opacity"
          values="0.05;0.1;0.05"
          dur="4s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}