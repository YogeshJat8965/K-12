import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import HomeApp from './HomeApp.tsx';
import AiPlaygroundApp from './AiPlaygroundApp.tsx';
import SkillStudioApp from './SkillStudioApp.tsx';
import DigitalCreativityApp from './DigitalCreativityApp.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/virtual-internship' ? <App /> :
     path === '/ai-playground' ? <AiPlaygroundApp /> :
     path === '/skill-studio' ? <SkillStudioApp /> :
     path === '/digital-creativity' ? <DigitalCreativityApp /> :
     <HomeApp />}
  </StrictMode>
);
