export interface noteData {
  guitarString: number;
  fret: number;
  beatCount: number;
  type: string;
}

export interface instrumentData {
  name: string;
  measures: noteData[][];
}

export interface songType {
  name: string;
  artist: string;
  bpm: number;
  instruments: instrumentData[];
  tuning: string[];
}
