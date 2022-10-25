export interface noteData {
  guitarString: number;
  fret: number;
  beatCount: number;
  type: string;
}

export interface songType {
  name: string;
  bpm: number;
  data: noteData[];
}
