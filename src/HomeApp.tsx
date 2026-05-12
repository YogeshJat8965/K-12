import HomeNavbar from './home/HomeNavbar';

export default function HomeApp() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      <HomeNavbar />
      {/* Hero section aayega yahan — agle step mein */}
      <div style={{ paddingTop: '70px' }} />
    </div>
  );
}
