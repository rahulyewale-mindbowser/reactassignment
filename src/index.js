import React from 'react';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);


reportWebVitals();
