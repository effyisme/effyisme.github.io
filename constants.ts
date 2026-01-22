
import { BreadboardRow, ValidationRule } from './types';

export const MARKER_ROWS = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
export const BLOCK3_MARKERS = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
export const BLOCK4_MARKERS = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

export const BLOCK1_ROWS: Record<number, string> = {
  // Upper Section
  1: 'AI0 +',
  2: 'AI0 −',
  3: 'AI1 +',
  4: 'AI1 −',
  5: 'AI2 +',
  6: 'AI2 −',
  7: 'AI3 +',
  8: 'AI3 −',
  9: 'AI4 +',
  10: 'AI4 −',
  11: 'AI5 +',
  12: 'AI5 −',
  13: 'AI6 +',
  14: 'AI6 −',
  15: 'AI7 +',
  16: 'AI7 −',
  17: 'AISENSE',
  18: 'AIGND',
  
  // Row 19 is empty
  
  // Lower Section (PFI)
  20: 'PFI0',
  21: 'PFI1',
  22: 'PFI2',
  23: 'PFI5',
  24: 'PFI6',
  25: 'PFI7',
  26: 'PFI10',
  27: 'PFI11',

  // Lower Large Section starts at 28
  28: 'BASE',
  29: 'DUT+',
  30: 'DUT−',

  // Analog Outputs
  31: 'AO0',
  32: 'AO1',
  33: 'FGEN',
  34: 'SYNC',
  35: 'AM',
  36: 'FM',

  // Row 37 Gap

  // User Configurable
  38: 'BANANA A',
  39: 'BANANA B',
  40: 'BANANA C',
  41: 'BANANA D',
  42: 'BNC 1 +',
  43: 'BNC 1 −',
  44: 'BNC 2 +',
  45: 'BNC 2 −',

  // Row 46 Gap

  // Power & Supply
  47: 'SCREW TERMINAL 1',
  48: 'SCREW TERMINAL 2',
  49: 'SUPPLY +',
  50: 'GROUND',
  51: 'SUPPLY −',
  52: '+15V',
  53: '−15V',
  54: 'GROUND'
};

export const SECTION_HEADERS = [
  { row: 1, text: "Analog Inputs" },
  { row: 20, text: "PFI" },
  { row: 28, sub: "DMM / Impedance Analyzer" },
  { row: 31, sub: "Analog Outputs / Function Generator" },
  { row: 38, sub: "User Configurable I/O" },
  { row: 47, sub: "Power & Supply Section" }
];

export const VALIDATION_RULES: ValidationRule[] = [
  {
    id: 'opamp-pfi0-connection',
    label: 'Signal Routing Exercise',
    description: 'Connect Op-Amp Input (Pin 2 or 3) to PFI0.',
    startNodes: ['block3-16-E', 'block3-17-E'],
    targetNodes: [
      'block1-20-1', 'block1-20-2', 'block1-20-3', 'block1-20-4', 'block1-20-5'
    ]
  }
];
