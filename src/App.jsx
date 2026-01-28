import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
