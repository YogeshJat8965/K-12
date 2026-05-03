import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
import AiPlaygroundApp from './AiPlaygroundApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiPlaygroundApp />
  </StrictMode>
);
