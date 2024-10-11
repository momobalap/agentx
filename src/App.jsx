import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import FeaturedAgents from './components/FeaturedAgents';
import PopularAgents from './components/PopularAgents';

function App() {
  return (
    <Layout>
      <Header />
      <CategoryTabs />
      <FeaturedAgents />
      <PopularAgents />
    </Layout>
  );
}

export default App;