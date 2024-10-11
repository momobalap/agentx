import React from 'react';
import SearchBar from './SearchBar';
import PublishButton from './PublishButton';

const Header = () => {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold mb-2">Welcome to Agent Space 欢迎来到特工空间</h1>
      <p className="text-gray-600 mb-4">Explore various agents from the community, get inspirations to kickstart your next big idea.</p>
      <p className="text-gray-600 mb-4">探索社区中的各种代理，获取灵感来启动你的下一个伟大想法。</p>
      <div className="flex justify-between items-center">
        <SearchBar />
        <PublishButton />
      </div>
    </header>
  );
};

export default Header;