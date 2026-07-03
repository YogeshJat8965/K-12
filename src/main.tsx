import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import HomeApp from './HomeApp.tsx';
import AiPlaygroundApp from './AiPlaygroundApp.tsx';
import SkillStudioApp from './SkillStudioApp.tsx';
import DigitalCreativityApp from './DigitalCreativityApp.tsx';
import InternationalStudioApp from './InternationalStudioApp.tsx';
import LearnersApp from './LearnersApp.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/' || path === '/home' ? <HomeApp /> :
     path === '/ai-playground' ? <AiPlaygroundApp /> :
     path === '/skill-studio' ? <SkillStudioApp /> :
     path === '/digital-creativity' ? <DigitalCreativityApp /> :
     path === '/international-studio' ? <InternationalStudioApp /> :
     path === '/learners' ? <LearnersApp /> :
     path === '/virtual-internship' ? <App /> :
     <HomeApp />}
  </StrictMode>
);
