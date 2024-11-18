import React from 'react';
import { Trophy, Swords, Target, Users } from 'lucide-react';
import { PlayerStats } from '../types';

interface StatsGridProps {
  stats: PlayerStats;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const statItems = [
    { icon: Swords, label: 'K/D Ratio', value: stats.kd },
    { icon: Target, label: 'Score/Min', value: stats.spm },
    { icon: Trophy, label: 'Win Rate', value: `${stats.winRate}%` },
    { icon: Users, label: 'Matches', value: stats.matches }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {statItems.map((stat, index) => (
        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-700/50 rounded-lg">
              <stat.icon className="w-6 h-6 text-gray-300" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};