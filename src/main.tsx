import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AiPlaygroundApp from './AiPlaygroundApp.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/ai-playground' ? <AiPlaygroundApp /> : <App />}
  </StrictMode>
);
