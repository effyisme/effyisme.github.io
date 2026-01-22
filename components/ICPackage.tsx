
import React, { useLayoutEffect, useState, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface ICPackageProps {
  pinMapping: string[]; // Order: Pin 1, 2, 3, 4, 5, 6, 7, 8
  boardRef: React.RefObject<HTMLDivElement | null>;
  label?: string;
}

export const ICPackage: React.FC<ICPackageProps> = ({ pinMapping, boardRef, label = "TL082" }) => {
  const [pinCoords, setPinCoords] = useState<Point[]>([]);

  const calculateCoords = useCallback(() => {
    if (!boardRef.current) return;
    const boardRect = boardRef.current.getBoundingClientRect();
    
    const newCoords = pinMapping.map(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - boardRect.left,
          y: rect.top + rect.height / 2 - boardRect.top
        };
      }
      return { x: 0, y: 0 };
    });

    setPinCoords(newCoords);
  }, [pinMapping, boardRef]);

  useLayoutEffect(() => {
    // Small timeout to ensure DOM is ready and layout has settled
    const timer = setTimeout(calculateCoords, 100);
    window.addEventListener('resize', calculateCoords);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateCoords);
    };
  }, [calculateCoords]);

  if (pinCoords.length < 8 || pinCoords.every(p => p.x === 0)) return null;

  // Calculate body geometry
  // Average X of left pins vs right pins
  const leftX = (pinCoords[0].x + pinCoords[3].x) / 2;
  const rightX = (pinCoords[4].x + pinCoords[7].x) / 2;
  const centerX = (leftX + rightX) / 2;
  
  const topY = Math.min(pinCoords[0].y, pinCoords[7].y);
  const bottomY = Math.max(pinCoords[3].y, pinCoords[4].y);
  
  const bodyWidth = Math.abs(rightX - leftX) * 0.85;
  const bodyHeight = Math.abs(bottomY - topY) + 20;
  const bodyY = (topY + bottomY) / 2 - bodyHeight / 2;
  const bodyX = centerX - bodyWidth / 2;

  return (
    <g className="pointer-events-none select-none">
      {/* Pins / Legs */}
      {pinCoords.map((coord, i) => {
        const isLeft = i < 4;
        const targetX = isLeft ? bodyX + 2 : bodyX + bodyWidth - 2;
        return (
          <path
            key={i}
            d={`M ${coord.x} ${coord.y} L ${targetX} ${coord.y}`}
            stroke="#94a3b8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}

      {/* IC Body */}
      <rect
        x={bodyX}
        y={bodyY}
        width={bodyWidth}
        height={bodyHeight}
        rx="4"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1"
        className="shadow-xl"
      />

      {/* Pin 1 Notch */}
      <circle
        cx={centerX}
        cy={bodyY}
        r={bodyWidth / 6}
        fill="#1e293b"
      />
      
      {/* Pin 1 Indicator Dot */}
      <circle
        cx={bodyX + 8}
        cy={bodyY + 12}
        r="2"
        fill="#334155"
      />

      {/* Chip Label */}
      <text
        x={centerX}
        y={bodyY + bodyHeight / 2 + 4}
        textAnchor="middle"
        fill="#475569"
        className="mono font-bold"
        style={{ fontSize: '8px' }}
      >
        {label}
      </text>
    </g>
  );
};
