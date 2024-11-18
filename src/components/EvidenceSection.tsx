import React, { useState } from 'react';
import { Youtube, Image as ImageIcon, FileText } from 'lucide-react';
import { MatchData } from '../types';

interface EvidenceSectionProps {
  matchData: MatchData[];
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ matchData }) => {
  const [activeTab, setActiveTab] = useState('video');

  const tabs = [
    { id: 'video', icon: Youtube, label: 'Video Evidence' },
    { id: 'image', icon: ImageIcon, label: 'Screenshots' },
    { id: 'data', icon: FileText, label: 'Match Data' }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
      <div className="border-b border-gray-700">
        <nav className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-700/50 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'video' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <Youtube className="w-12 h-12 text-gray-600" />
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <Youtube className="w-12 h-12 text-gray-600" />
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="p-4">Date</th>
                  <th className="p-4">Opponent Avg K/D</th>
                  <th className="p-4">Player K/D</th>
                  <th className="p-4">Lobby Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {matchData.map((match, index) => (
                  <tr key={index} className="border-b border-gray-700/50">
                    <td className="p-4">{match.date}</td>
                    <td className="p-4">{match.oppKD}</td>
                    <td className="p-4">{match.playerKD}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">
                        {match.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};