export interface PlayerStats {
  kd: number;
  spm: number;
  winRate: number;
  matches: number;
}

export interface MatchData {
  date: string;
  oppKD: number;
  playerKD: number;
  difficulty: string;
}

export interface Comment {
  user: string;
  comment: string;
  votes: number;
}