import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Comment } from '../types';

interface CommunitySectionProps {
  comments: Comment[];
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ comments }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Community Feedback</h2>
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-gray-300">{comment.user}</h3>
              <p className="mt-2 text-gray-400">{comment.comment}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </button>
              <span className="text-gray-400">{comment.votes}</span>
              <button className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors">
                <ThumbsDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);