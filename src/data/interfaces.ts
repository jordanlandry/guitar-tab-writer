export interface noteData {
  guitarString: number;
  fret: number;
  beatCount: number;
  type: string;
  instrument: number;
}

export interface instrumentData {
  name: string;
  index: number;
  sound: string; // This is the sound file name
}

export interface songType {
  name: string;
  artist: string;
  bpm: number;
  measures: noteData[][];
  tuning: string[];
  instruments: instrumentData[];
}
