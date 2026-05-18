import Navbar from './components/Navbar';
import HomeHero from './home/HomeHero';
import HomeMission from './home/HomeMission';
import HomeTrusted from './home/HomeTrusted';
import HomeAbout from './home/HomeAbout';
import HomeEcosystem from './home/HomeEcosystem';
import HomeExecution from './home/HomeExecution';
import HomePhilosophy from './home/HomePhilosophy';
import HomeAdobe from './home/HomeAdobe';

export default function HomeApp() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <HomeHero />
        <HomeMission />
        <HomeTrusted />
        <HomeAbout />
        <HomeEcosystem />
        <HomeExecution />
        <HomePhilosophy />
        <HomeAdobe />
      </div>
    </div>
  );
}
