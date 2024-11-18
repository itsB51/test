import React from 'react';
import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import { EvidenceSection } from './components/EvidenceSection';
import { CommunitySection } from './components/CommunitySection';
import { playerStats, matchData, comments } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header username="XX_Cheater_99" platform="PC Player" />
      <main className="container mx-auto px-4 py-8">
        <StatsGrid stats={playerStats} />
        <EvidenceSection matchData={matchData} />
        <CommunitySection comments={comments} />
      </main>
    </div>
  );
}

export default App;