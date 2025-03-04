import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
function App() {
  return (
    <Router>
      <MainLayout>
        <Home />
      </MainLayout>
    </Router>
  );
}

export default App;
