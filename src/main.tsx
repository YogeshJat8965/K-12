import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import PageLoader from './PageLoader.tsx';
import './index.css';

// Lazy load all page components - only the visited page's code + assets will be downloaded
const HomeApp = lazy(() => import('./HomeApp.tsx'));
const AiPlaygroundApp = lazy(() => import('./AiPlaygroundApp.tsx'));
const SkillStudioApp = lazy(() => import('./SkillStudioApp.tsx'));
const DigitalCreativityApp = lazy(() => import('./DigitalCreativityApp.tsx'));
const InternationalStudioApp = lazy(() => import('./InternationalStudioApp.tsx'));
const StudentsApp = lazy(() => import('./StudentsApp.tsx'));
const LearnersApp = lazy(() => import('./LearnersApp.tsx'));
const App = lazy(() => import('./App.tsx'));
const LoginApp = lazy(() => import('./LoginApp.tsx'));
const SignupApp = lazy(() => import('./SignupApp.tsx'));
const ContactApp = lazy(() => import('./ContactApp.tsx'));
const UniversityApp = lazy(() => import('./UniversityApp.tsx'));
const EducatorApp = lazy(() => import('./EducatorApp.tsx'));
const CcmmApp = lazy(() => import('./CcmmApp.tsx'));

const path = window.location.pathname;

function AppRouter() {
  return (
    path === '/' || path === '/home' ? <HomeApp /> :
      path === '/ai-playground' ? <AiPlaygroundApp /> :
        path === '/skill-studio' ? <SkillStudioApp /> :
          path === '/digital-creativity' ? <DigitalCreativityApp /> :
            path === '/international-studio' ? <InternationalStudioApp /> :
              path === '/students' ? <StudentsApp /> :
                path === '/learners' ? <LearnersApp /> :
                  path === '/virtual-internship' ? <App /> :
                    path === '/login' ? <LoginApp /> :
                      path === '/signup' ? <SignupApp /> :
                        path === '/contact' ? <ContactApp /> :
                          path === '/university' ? <UniversityApp /> :
                            path === '/educator' ? <EducatorApp /> :
                              path === '/ccmm' ? <CcmmApp /> :
                                <HomeApp />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <AppRouter />
    </Suspense>
  </StrictMode>
);
