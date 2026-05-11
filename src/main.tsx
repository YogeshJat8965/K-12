import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AiPlaygroundApp from './AiPlaygroundApp.tsx';
import SkillStudioApp from './SkillStudioApp.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/ai-playground' ? <AiPlaygroundApp /> : 
     path === '/skill-studio' ? <SkillStudioApp /> : <App />}
  </StrictMode>
);
