import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';

const categories = [
  'Business 商业', 'Productivity 生产力', 'Entertainment 娱乐', 'Finance 金融',
  'Marketing 营销', 'Shopping 购物', 'Art & Design 艺术与设计', 'Education 教育',
  'Lifestyle 生活方式', 'Mental Health 心理健康', 'News & Events 新闻与活动'
];

const CategoryTabs = () => {
  return (
    <ScrollArea className="w-full mb-6">
      <div className="flex space-x-4">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className="px-4 py-2 bg-gray-200 rounded-full text-sm whitespace-nowrap hover:bg-gray-300"
          >
            {category}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoryTabs;