
import React from 'react';
import { MARKER_ROWS } from '../constants';

interface BreadboardRowItemProps {
  rowNumber: number;
  label?: string;
  isEmpty?: boolean;
  selectedHole: string | null;
  onToggleHole: (holeId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BreadboardRowItem: React.FC<BreadboardRowItemProps> = ({ 
  rowNumber, 
  label, 
  isEmpty,
  selectedHole,
  onToggleHole
}) => {
  const isMarker = MARKER_ROWS.includes(rowNumber);

  return (
    <div className={`flex items-center group h-8 ${isEmpty ? 'opacity-20 cursor-not-allowed' : ''}`}>
      {/* Label Section - Left Aligned with Fixed Width */}
      <div className="w-20 flex-shrink-0 flex items-center pr-2">
        {label && (
          <div className="flex items-center justify-between w-full">
            <span className="text-[11px] font-bold text-slate-800 tracking-tight whitespace-nowrap mono uppercase text-left">
              {label}
            </span>
            <div className="flex-grow mx-2 h-px bg-slate-200" />
          </div>
        )}
      </div>

      {/* Row Number Column (Marker) */}
      <div className="w-8 flex-shrink-0 flex justify-center">
        {isMarker && (
          <span className="text-[10px] font-bold text-slate-500 mono">
            {rowNumber}
          </span>
        )}
      </div>

      {/* Grid Section */}
      <div className="flex gap-1.5 px-3 py-1 bg-slate-50 rounded-sm border border-slate-100 group-hover:border-slate-300 transition-colors ml-1">
        {[1, 2, 3, 4, 5].map((i) => {
          const holeId = `block1-${rowNumber}-${i}`;
          const isActive = selectedHole === holeId;
          
          return (
            <button
              key={i}
              id={holeId}
              onClick={(e) => onToggleHole(holeId, e)}
              disabled={isEmpty}
              className={`w-4 h-4 rounded-[1px] border-2 flex items-center justify-center relative transition-all duration-150 
                ${isActive 
                  ? 'bg-blue-600 border-blue-900 scale-105 z-10 shadow-md' 
                  : 'bg-slate-200 border-slate-400 shadow-inner hover:border-slate-600 hover:bg-slate-300'
                }`}
              title={!isEmpty ? `Row ${rowNumber}, Hole ${i}` : undefined}
            >
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-sm bg-white" />
              )}
              {isActive && (
                <div className="absolute inset-0 bg-blue-400/30 animate-pulse rounded-[1px]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
