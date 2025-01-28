import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';

import App from './app.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <HashRouter>
         <Routes>
            <Route path={'/*'} element={<App />} />
         </Routes>
      </HashRouter>
   </StrictMode>
);
