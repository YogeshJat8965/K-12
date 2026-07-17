import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UniversityHero from './components/university/UniversityHero';
import FutureOfEducation from './components/university/FutureOfEducation';
import UniversityFeatures from './components/university/UniversityFeatures';
import IndustryReadiness from './components/university/IndustryReadiness';
import LearningPathways from './components/university/LearningPathways';
import ProfessionalCertificates from './components/university/ProfessionalCertificates';
import IndustryCourses from './components/university/IndustryCourses';
import ProfessionalToolkit from './components/university/ProfessionalToolkit';
import FacultyDisciplines from './components/university/FacultyDisciplines';
import StudentOutcomes from './components/university/StudentOutcomes';
import StakeholderBenefits from './components/university/StakeholderBenefits';
import ProgramImplementation from './components/university/ProgramImplementation';
import WhyPartner from './components/university/WhyPartner';
import FAQ from './components/university/FAQ';

export default function UniversityApp() {
  useEffect(() => {
    document.title = 'University | Skillzza';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 w-full bg-white">
        <UniversityHero />
        <FutureOfEducation />
        <UniversityFeatures />
        <IndustryReadiness />
        <LearningPathways />
        <ProfessionalCertificates />
        <IndustryCourses />
        <ProfessionalToolkit />
        <FacultyDisciplines />
        <StudentOutcomes />
        <StakeholderBenefits />
        <ProgramImplementation />
        <WhyPartner />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
