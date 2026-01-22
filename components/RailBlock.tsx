
import React from 'react';

interface RailBlockProps {
  selectedHole: string | null;
  onToggleHole: (holeId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RailBlock: React.FC<RailBlockProps> = ({ selectedHole, onToggleHole }) => {
  const SECTIONS = 10;
  const ROWS_PER_SECTION = 5;

  return (
    <div className="flex flex-col min-w-[100px]">
      <div className="relative flex justify-center flex-grow pt-20">
        {/* Uninterrupted Vertical Lines */}
        <div className="absolute left-[calc(50%-28px)] top-6 bottom-2 w-0.5 bg-red-600 z-0 opacity-100" />
        <div className="absolute right-[calc(50%-28px)] top-6 bottom-2 w-0.5 bg-blue-600 z-0 opacity-100" />

        <div className="flex flex-col z-10 w-full items-center">
          {Array.from({ length: SECTIONS }).map((_, sectionIdx) => (
            <React.Fragment key={sectionIdx}>
              <div className="flex flex-col gap-0">
                {Array.from({ length: ROWS_PER_SECTION }).map((_, rowIdx) => {
                  const absoluteRow = sectionIdx * ROWS_PER_SECTION + rowIdx + 1;
                  
                  return (
                    <div key={rowIdx} className="flex gap-4 items-center h-8 px-2">
                      {['red', 'blue'].map((side) => {
                        const holeId = `rail-${side}-${absoluteRow}`;
                        const isActive = selectedHole === holeId;
                        
                        return (
                          <button 
                            key={side}
                            id={holeId}
                            onClick={(e) => onToggleHole(holeId, e)}
                            className={`w-4 h-4 rounded-[1px] border-2 flex items-center justify-center relative transition-all duration-150
                              ${isActive 
                                ? 'bg-blue-600 border-blue-900 scale-105 z-10 shadow-md' 
                                : 'bg-slate-200 border-slate-400 shadow-inner hover:border-slate-600 hover:bg-slate-300'
                              }`}
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
                  );
                })}
              </div>

              {sectionIdx < SECTIONS - 1 && (
                <div 
                  className="w-full" 
                  style={{ height: '20.2px' }} 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
