
import React, { useState, useRef, useMemo } from 'react';
import { BreadboardBlock } from './components/BreadboardBlock';
import { RailBlock } from './components/RailBlock';
import { MainGridBlock } from './components/MainGridBlock';
import { ICPackage } from './components/ICPackage';
import { Resistor } from './components/Resistor';
import { BLOCK3_MARKERS, BLOCK4_MARKERS, VALIDATION_RULES } from './constants';
import { ValidationResult, Resistor as ResistorType } from './types';

interface Point {
  x: number;
  y: number;
  holeId: string;
}

interface Line {
  id: string;
  start: Point;
  end: Point;
  color: string;
}

export default function App() {
  const [selectedHole, setSelectedHole] = useState<string | null>(null);
  const [activeTool, setActiveTool] = useState<'line' | 'resistor' | null>(null);
  const [pendingFirstPoint, setPendingFirstPoint] = useState<Point | null>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [resistors, setResistors] = useState<ResistorType[]>([]);
  
  const workspaceRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  const colors = ['#f97316', '#3b82f6', '#10b981', '#ef4444', '#a855f7', '#eab308'];

  // Define row ranges for Block 1 split
  const block1Section1Rows = Array.from({ length: 27 }, (_, i) => i + 1);
  const block1Section2Rows = Array.from({ length: 27 }, (_, i) => i + 28); 

  // Standard DIP-8 mapping for the default Op-Amp
  const opAmpPins = [
    'block3-15-E', // Pin 1
    'block3-16-E', // Pin 2
    'block3-17-E', // Pin 3
    'block3-18-E', // Pin 4
    'block4-18-G', // Pin 5
    'block4-17-G', // Pin 6
    'block4-16-G', // Pin 7
    'block4-15-G'  // Pin 8
  ];

  /**
   * DATA-DRIVEN CONNECTIVITY ENGINE
   */
  const validationResults = useMemo(() => {
    const adj = new Map<string, Set<string>>();
    const addEdge = (u: string, v: string) => {
      if (!adj.has(u)) adj.set(u, new Set());
      if (!adj.has(v)) adj.set(v, new Set());
      adj.get(u)!.add(v);
      adj.get(v)!.add(u);
    };

    // Static Physics
    for (let r = 1; r <= 54; r++) {
      for (let c = 1; c < 5; c++) addEdge(`block1-${r}-${c}`, `block1-${r}-${c+1}`);
    }
    const cols3 = ['A', 'B', 'C', 'D', 'E'];
    for (let r = 1; r <= 63; r++) {
      for (let i = 0; i < cols3.length - 1; i++) addEdge(`block3-${r}-${cols3[i]}`, `block3-${r}-${cols3[i+1]}`);
    }
    const cols4 = ['G', 'H', 'I', 'J'];
    for (let r = 1; r <= 63; r++) {
      for (let i = 0; i < cols4.length - 1; i++) addEdge(`block4-${r}-${cols4[i]}`, `block4-${r}-${cols4[i+1]}`);
    }
    for (let r = 1; r < 50; r++) {
      addEdge(`rail-red-${r}`, `rail-red-${r+1}`);
      addEdge(`rail-blue-${r}`, `rail-blue-${r+1}`);
    }

    // Dynamic User Wires
    lines.forEach(line => addEdge(line.start.holeId, line.end.holeId));
    
    // Dynamic User Resistors (Electrical path)
    resistors.forEach(r => addEdge(r.start.holeId, r.end.holeId));

    // Process Rules
    return VALIDATION_RULES.map(rule => {
      const targetSet = new Set(rule.targetNodes);
      const visited = new Set<string>();
      const queue = [...rule.startNodes];
      let isPassed = false;

      while (queue.length > 0) {
        const current = queue.shift()!;
        if (targetSet.has(current)) {
          isPassed = true;
          break;
        }
        if (visited.has(current)) continue;
        visited.add(current);

        const neighbors = adj.get(current);
        if (neighbors) {
          for (const n of neighbors) {
            if (!visited.has(n)) queue.push(n);
          }
        }
      }

      return { ruleId: rule.id, isPassed };
    });
  }, [lines, resistors]);

  const allPassed = validationResults.every(r => r.isPassed);

  const handleToggleHole = (holeId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const boardRect = boardRef.current?.getBoundingClientRect();

    if (!boardRect) return;

    // Use boardRect as the origin for all (x,y) calculations
    const x = rect.left + rect.width / 2 - boardRect.left;
    const y = rect.top + rect.height / 2 - boardRect.top;

    if (activeTool === 'line') {
      if (!pendingFirstPoint) {
        setPendingFirstPoint({ x, y, holeId });
        setSelectedHole(holeId);
      } else {
        if (pendingFirstPoint.holeId === holeId) {
          setPendingFirstPoint(null);
          setSelectedHole(null);
          return;
        }
        setLines([...lines, {
          id: `line-${Date.now()}`,
          start: pendingFirstPoint,
          end: { x, y, holeId },
          color: colors[lines.length % colors.length]
        }]);
        setPendingFirstPoint(null);
        setActiveTool(null);
        setSelectedHole(null);
      }
    } else if (activeTool === 'resistor') {
      if (!pendingFirstPoint) {
        setPendingFirstPoint({ x, y, holeId });
        setSelectedHole(holeId);
      } else {
        if (pendingFirstPoint.holeId === holeId) {
          setPendingFirstPoint(null);
          setSelectedHole(null);
          return;
        }
        setResistors([...resistors, {
          id: `res-${Date.now()}`,
          start: pendingFirstPoint,
          end: { x, y, holeId },
          resistance: "10k"
        }]);
        setPendingFirstPoint(null);
        setActiveTool(null);
        setSelectedHole(null);
      }
    } else {
      setSelectedHole(prev => (prev === holeId ? null : holeId));
    }
  };

  const deleteResistor = (id: string) => {
    setResistors(resistors.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col relative">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-slate-900 text-white p-3 shadow-xl z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <h1 className="text-xl font-black tracking-tighter uppercase">Breadboard demo</h1>
              <div className="flex items-center gap-3 mt-1 overflow-x-auto pb-1 max-w-md">
                {VALIDATION_RULES.map(rule => {
                  const result = validationResults.find(r => r.ruleId === rule.id);
                  const isDone = result?.isPassed;
                  return (
                    <div key={rule.id} className="flex items-center gap-2 whitespace-nowrap">
                      <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest border transition-all duration-300 ${isDone ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-500 border-slate-700'}`}>
                        {isDone ? `✓ ${rule.label}` : rule.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  setActiveTool(activeTool === 'line' ? null : 'line');
                  setPendingFirstPoint(null);
                  setSelectedHole(null);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  activeTool === 'line' 
                  ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-105' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
                }`}
              >
                <svg 
                  className={`w-3 h-3 ${activeTool === 'line' ? 'text-white animate-pulse' : 'text-slate-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                {activeTool === 'line' ? 'Click 2 Holes' : 'Add Wire'}
              </button>

              <button 
                onClick={() => {
                  setActiveTool(activeTool === 'resistor' ? null : 'resistor');
                  setPendingFirstPoint(null);
                  setSelectedHole(null);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  activeTool === 'resistor' 
                  ? 'bg-amber-600 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
                }`}
              >
                <svg 
                  className={`w-3 h-3 ${activeTool === 'resistor' ? 'text-white animate-pulse' : 'text-amber-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                {activeTool === 'resistor' ? 'Click 2 Holes' : 'Add Resistor'}
              </button>

              <button 
                onClick={() => { setLines([]); setResistors([]); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 border-2 bg-slate-800 border-slate-700 text-slate-400 hover:text-red-400 hover:border-red-900"
              >
                Reset All
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-3">
              <div className={`text-right ${allPassed ? 'text-emerald-400' : 'text-slate-400'}`}>
                 <p className="text-[10px] font-black uppercase tracking-tighter">Continuity State</p>
                 <p className="text-xs font-bold">{allPassed ? 'VERIFIED' : 'PENDING'}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${allPassed ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]' : 'bg-slate-800 border-slate-700'}`}>
                {allPassed ? (
                   <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                   </svg>
                ) : (
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadboard Viewport */}
      <main className="flex-grow overflow-auto relative scroll-smooth" ref={workspaceRef}>
        {/* Board Origin Container: Fixes coordinate drift by keeping SVG and Holes in the same relative space */}
        <div ref={boardRef} className="relative p-4 w-fit mx-auto min-w-max">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="1" dy="1" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            <ICPackage pinMapping={opAmpPins} boardRef={boardRef} label="TL082 CP" />
            
            {resistors.map(r => (
              <Resistor 
                key={r.id} 
                id={r.id} 
                start={r.start} 
                end={r.end} 
                onDelete={deleteResistor}
              />
            ))}

            {lines.map(line => (
              <g key={line.id} filter="url(#shadow)">
                <line 
                  x1={line.start.x} y1={line.start.y} 
                  x2={line.end.x} y2={line.end.y} 
                  stroke={line.color} strokeWidth="4" strokeLinecap="round"
                  className="transition-all duration-500"
                />
                <circle cx={line.start.x} cy={line.start.y} r="3" fill={line.color} />
                <circle cx={line.end.x} cy={line.end.y} r="3" fill={line.color} />
              </g>
            ))}
            
            {pendingFirstPoint && (
               <circle 
                 cx={pendingFirstPoint.x} cy={pendingFirstPoint.y} 
                 r="6" fill="none" stroke={activeTool === 'resistor' ? '#f59e0b' : '#3b82f6'} 
                 strokeWidth="2" className="animate-pulse"
               />
            )}
          </svg>

          <div className="flex gap-6 justify-center items-start relative z-10">
            <div className="flex flex-col gap-6">
               <BreadboardBlock 
                 selectedHole={selectedHole} 
                 onToggleHole={handleToggleHole}
                 rows={block1Section1Rows}
               />
               <BreadboardBlock 
                 selectedHole={selectedHole} 
                 onToggleHole={handleToggleHole}
                 rows={block1Section2Rows}
               />
            </div>

            <div className="flex flex-col gap-4">
               <div className="bg-white rounded-lg shadow-xl p-2 flex flex-row h-fit">
                  <RailBlock selectedHole={selectedHole} onToggleHole={handleToggleHole} />
                  <div className="mx-2 w-px bg-slate-300 self-stretch mt-2" />
                  <div className="flex flex-col">
                    <div className="flex gap-0">
                      <MainGridBlock 
                        blockNumber={3}
                        blockTitle="GRID A–E" subTitle="Left Logic"
                        columns={['A', 'B', 'C', 'D', 'E']}
                        rowCount={63} markers={BLOCK3_MARKERS}
                        labelSide="left" selectedHole={selectedHole}
                        onToggleHole={handleToggleHole}
                      />
                      <div className="w-12 flex flex-col items-center justify-start pt-8">
                         <div className="w-6 h-full bg-slate-100/50 rounded-sm border-x border-slate-200 shadow-inner" />
                      </div>
                      <MainGridBlock 
                        blockNumber={4}
                        blockTitle="GRID G–J" subTitle="Right Logic"
                        columns={['G', 'H', 'I', 'J']}
                        rowCount={63} markers={BLOCK4_MARKERS}
                        labelSide="right" selectedHole={selectedHole}
                        onToggleHole={handleToggleHole}
                      />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
