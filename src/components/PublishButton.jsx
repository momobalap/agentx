import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';

const PublishButton = () => {
  return (
    <Button className="bg-purple-600 text-white px-4 py-2 rounded-full">
      <Plus size={20} className="mr-2" />
      Publish 发布
    </Button>
  );
};

export default PublishButton;