import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';

// Pages
import Home from './pages/Home';

// Styles
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
