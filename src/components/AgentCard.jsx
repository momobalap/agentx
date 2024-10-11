import React from 'react';
import { Heart } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const AgentCard = ({ agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={agent.image} alt={agent.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{agent.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="w-6 h-6 mr-2">
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-500">@username</span>
          </div>
          <button className="text-gray-500 hover:text-red-500">
            <Heart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;