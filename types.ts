
export interface BreadboardRow {
  rowNumber: number;
  label?: string;
  section?: string;
  subSection?: string;
  isEmpty?: boolean;
  isMarker?: boolean;
}

export interface SectionConfig {
  name: string;
  start: number;
  end: number;
  color?: string;
}

export interface ValidationRule {
  id: string;
  label: string;
  description: string;
  startNodes: string[];
  targetNodes: string[];
}

export interface ValidationResult {
  ruleId: string;
  isPassed: boolean;
}

export interface Resistor {
  id: string;
  start: { x: number; y: number; holeId: string };
  end: { x: number; y: number; holeId: string };
  resistance: string; // e.g. "10k"
}
