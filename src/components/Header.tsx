import React from 'react';
import { Shield, Monitor, Flag } from 'lucide-react';

interface HeaderProps {
  username: string;
  platform: string;
}

export const Header: React.FC<HeaderProps> = ({ username, platform }) => (
  <header className="bg-black/40 backdrop-blur-sm border-b border-gray-700">
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/20 rounded-lg">
            <Shield className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-500">{username}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Monitor className="w-4 h-4" />
              <span className="text-gray-400 text-sm">{platform}</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2">
          <Flag className="w-4 h-4" />
          Report for Review
        </button>
      </div>
    </div>
  </header>
);