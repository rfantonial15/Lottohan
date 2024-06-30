import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Users from './pages/Users';
import Bets from './pages/Bets';
import Results from './pages/Results';
import Winners from './pages/Winners';
import Login from './pages/Login';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/bets"
        element={
          <Layout>
            <Bets />
          </Layout>
        }
      />
      <Route
        path="/results"
        element={
          <Layout>
            <Results />
          </Layout>
        }
      />
      <Route
        path="/winners"
        element={
          <Layout>
            <Winners />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
