import React from 'react';
import AgentCard from './AgentCard';

const featuredAgents = [
  { id: 1, name: 'Stock Watch 股票观察', image: '/stock-watch.jpg', description: 'Get latest news of stock market' },
  { id: 2, name: 'SEO Blog Writer SEO 博客作家', image: '/seo-writer.jpg', description: 'Write amazing SEO blog articles' },
  { id: 3, name: 'Zorina 佐里纳', image: '/zorina.jpg', description: 'I can generate line graphic in SVG format. Give it a name up...' },
  { id: 4, name: 'Flux Real Person Generator', image: '/flux-generator.jpg', description: 'Flux真人生成器' },
];

const FeaturedAgents = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Agents 特色代理商</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedAgents;