import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Banner />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
