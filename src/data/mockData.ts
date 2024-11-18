import { PlayerStats, MatchData, Comment } from '../types';

export const playerStats: PlayerStats = {
  kd: 5.0,
  spm: 850,
  winRate: 92,
  matches: 1337
};

export const matchData: MatchData[] = [
  { date: '2024-03-17', oppKD: 0.4, playerKD: 5.0, difficulty: 'Low' },
  { date: '2024-03-18', oppKD: 0.5, playerKD: 4.8, difficulty: 'Low' },
  { date: '2024-03-19', oppKD: 0.3, playerKD: 6.2, difficulty: 'Low' }
];

export const comments: Comment[] = [
  { user: 'User123', comment: 'This guy has been dodging high K/D lobbies for months. Seen it firsthand.', votes: 42 },
  { user: 'ProPlayer', comment: 'Clear evidence of reverse boosting in these matches.', votes: 28 }
];