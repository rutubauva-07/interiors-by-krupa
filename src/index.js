import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import App from './App';

AOS.init({
  duration: 1000,
  once: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);