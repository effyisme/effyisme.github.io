
import React from 'react';
import { BreadboardRowItem } from './BreadboardRowItem';
import { BLOCK1_ROWS, SECTION_HEADERS } from '../constants';

interface BreadboardBlockProps {
  selectedHole: string | null;
  onToggleHole: (holeId: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  rows: number[];
}

export const BreadboardBlock: React.FC<BreadboardBlockProps> = ({ selectedHole, onToggleHole, rows }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 w-fit">
      <div className="space-y-0 relative">
        {rows.map((rowNum) => {
          const label = BLOCK1_ROWS[rowNum];
          const section = SECTION_HEADERS.find(h => h.row === rowNum && !h.sub);
          const subSection = SECTION_HEADERS.find(h => h.row === rowNum && h.sub);
          const isEmpty = rowNum === 19 || rowNum === 37 || rowNum === 46;

          return (
            <React.Fragment key={rowNum}>
              {section && (
                <div className="mb-2 flex">
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wide px-1.5 py-0.5 bg-blue-50 rounded">
                    {section.text}
                  </span>
                </div>
              )}

              {subSection && (
                <div className="mb-2 flex">
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wide px-1.5 py-0.5 bg-blue-50 rounded">
                    {subSection.sub}
                  </span>
                </div>
              )}

              <BreadboardRowItem 
                rowNumber={rowNum} 
                label={label}
                isEmpty={isEmpty}
                selectedHole={selectedHole}
                onToggleHole={onToggleHole}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
