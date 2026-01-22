
import React from 'react';

interface MainGridBlockProps {
  blockNumber: number;
  blockTitle: string;
  subTitle: string;
  columns: string[];
  rowCount: number;
  markers: number[];
  labelSide?: 'left' | 'right';
  selectedHole: string | null;
  onToggleHole: (holeId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MainGridBlock: React.FC<MainGridBlockProps> = ({
  blockNumber,
  blockTitle,
  subTitle,
  columns,
  rowCount,
  markers,
  labelSide = 'left',
  selectedHole,
  onToggleHole
}) => {
  const rows = Array.from({ length: rowCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        {labelSide === 'left' && <div className="w-10 flex-shrink-0" />}
        <div className="flex gap-1.5 px-3">
          {columns.map((col) => (
            <div key={col} className="w-4 text-center">
              <span className="text-[10px] font-black text-slate-500 mono">{col}</span>
            </div>
          ))}
        </div>
        {labelSide === 'right' && <div className="w-10 flex-shrink-0" />}
      </div>

      <div className="space-y-0">
        {rows.map((rowNum) => {
          const isMarker = markers.includes(rowNum);
          const isGroupEnd = rowNum % 5 === 0;

          return (
            <div 
              key={rowNum} 
              className={`flex items-center group h-8 ${isGroupEnd ? 'mb-1' : ''}`}
            >
              {labelSide === 'left' && (
                <div className="w-10 flex-shrink-0 flex justify-end pr-3">
                  {isMarker && (
                    <span className="text-[10px] font-bold text-slate-500 mono">
                      {rowNum}
                    </span>
                  )}
                </div>
              )}

              <div className="flex gap-1.5 px-3 py-1 bg-slate-50 rounded-sm border border-slate-100 group-hover:border-slate-300 transition-colors">
                {columns.map((col, i) => {
                  const holeId = `block${blockNumber}-${rowNum}-${col}`;
                  const isActive = selectedHole === holeId;
                  
                  return (
                    <button 
                      key={col} 
                      id={holeId}
                      onClick={(e) => onToggleHole(holeId, e)}
                      className={`w-4 h-4 rounded-[1px] border-2 flex items-center justify-center relative transition-all duration-150
                        ${isActive 
                          ? 'bg-blue-600 border-blue-900 scale-105 z-10 shadow-md' 
                          : 'bg-slate-200 border-slate-400 shadow-inner hover:border-slate-600 hover:bg-slate-300'
                        }`}
                      title={`Block ${blockNumber}, Row ${rowNum}, Col ${col}`}
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

              {labelSide === 'right' && (
                <div className="w-10 flex-shrink-0 flex justify-start pl-3">
                  {isMarker && (
                    <span className="text-[10px] font-bold text-slate-500 mono">
                      {rowNum}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
