import HomeNavbar from './home/HomeNavbar';
import HomeHero from './home/HomeHero';
import HomeMission from './home/HomeMission';
import HomeTrusted from './home/HomeTrusted';
import HomeAbout from './home/HomeAbout';
import HomeEcosystem from './home/HomeEcosystem';
import HomeExecution from './home/HomeExecution';
import HomeJourney from './home/HomeJourney';
import HomePhilosophy from './home/HomePhilosophy';
import HomeAdobe from './home/HomeAdobe';
import HomeCompare from './home/HomeCompare';
import HomeReady from './home/HomeReady';
import HomeCTA from './home/HomeCTA';
import HomeLearningEcosystem from './home/HomeLearningEcosystem';

export default function HomeApp() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      <HomeNavbar />
      <div style={{ paddingTop: '70px' }}>
        <HomeHero />
        <HomeMission />
        <HomeTrusted />
        <HomeAbout />
        <HomeLearningEcosystem />
        <HomeCompare />
        <HomeExecution />
        <HomeJourney />
        <HomePhilosophy />
        <HomeAdobe />
        <HomeEcosystem />
        <HomeReady />
        <HomeCTA />
      </div>
    </div>
  );
}
