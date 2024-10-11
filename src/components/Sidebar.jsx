import React from 'react';
import { Home, Download, Settings, User, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white shadow-md">
      <div className="flex flex-col items-center py-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mb-8" />
        <nav className="flex flex-col space-y-4">
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100">
            <Home size={24} />
          </a>
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100">
            <Download size={24} />
          </a>
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100">
            <Settings size={24} />
          </a>
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100">
            <User size={24} />
          </a>
          <a href="#" className="p-2 rounded-lg hover:bg-gray-100">
            <MessageSquare size={24} />
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;