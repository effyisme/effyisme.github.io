
import React from 'react';

interface ResistorProps {
  id: string;
  start: { x: number; y: number };
  end: { x: number; y: number };
  onDelete?: (id: string) => void;
}

export const Resistor: React.FC<ResistorProps> = ({ id, start, end, onDelete }) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  const bodyWidth = 32;
  const bodyHeight = 12;

  return (
    <g 
      className="group cursor-pointer select-none"
      onClick={() => onDelete?.(id)}
    >
      {/* Hover background for easy deletion */}
      <rect
        x={start.x - 10}
        y={start.y - 10}
        width={length + 20}
        height={20}
        transform={`rotate(${angle} ${start.x} ${start.y})`}
        fill="transparent"
        className="group-hover:fill-red-500/10 transition-colors"
      />

      {/* Leads (Metal Wires) */}
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="#94a3b8"
        strokeWidth="1.5"
      />

      {/* Body Transform Group */}
      <g transform={`translate(${(start.x + end.x) / 2}, ${(start.y + end.y) / 2}) rotate(${angle})`}>
        {/* Shadow */}
        <rect
          x={-bodyWidth / 2}
          y={-bodyHeight / 2 + 1}
          width={bodyWidth}
          height={bodyHeight}
          rx="3"
          fill="rgba(0,0,0,0.15)"
        />

        {/* Ceramic Body */}
        <rect
          x={-bodyWidth / 2}
          y={-bodyHeight / 2}
          width={bodyWidth}
          height={bodyHeight}
          rx="3"
          fill="#d4b483"
          stroke="#b59461"
          strokeWidth="0.5"
        />

        {/* Color Bands (Standard 10k: Brown, Black, Orange, Gold) */}
        <rect x={-10} y={-bodyHeight / 2} width="3" height={bodyHeight} fill="#5d4037" /> {/* Brown */}
        <rect x={-4} y={-bodyHeight / 2} width="3" height={bodyHeight} fill="#212121" />  {/* Black */}
        <rect x={2} y={-bodyHeight / 2} width="3" height={bodyHeight} fill="#f57c00" />   {/* Orange */}
        <rect x={10} y={-bodyHeight / 2} width="2" height={bodyHeight} fill="#ffd700" />   {/* Gold */}

        {/* Delete Tooltip Icon */}
        <g className="opacity-0 group-hover:opacity-100 transition-opacity">
           <circle cx="0" cy="0" r="10" fill="#ef4444" />
           <path d="M-4 -4 L4 4 M-4 4 L4 -4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
};
