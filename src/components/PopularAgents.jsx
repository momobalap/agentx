import React from 'react';
import AgentCard from './AgentCard';

const popularAgents = [
  { id: 1, name: 'Vendedor internet ilimitado', image: '/vendedor.jpg', description: '无限网络销售员' },
  { id: 2, name: 'Amina 阿米娜', image: '/amina.jpg', description: 'A helpful real Estate agent for Olaya/Alhia Homes...' },
  { id: 3, name: 'Domiza 多米扎', image: '/domiza.jpg', description: 'AI tutor devoted for entertainment' },
  { id: 4, name: 'EYE ELITE 眼睛精英', image: '/eye-elite.jpg', description: 'Eye Elite is an advanced AI chatbot designed to provide reliable and...' },
  // Add more popular agents as needed
];

const PopularAgents = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Popular Agents 热门代理商</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default PopularAgents;