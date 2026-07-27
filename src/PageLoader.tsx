import logoImg from './assets/skillzza-k12-horizontal copy.webp';

export default function PageLoader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FAFAFE',
      zIndex: 99999,
    }}>
      <style>{`
        @keyframes pl-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.96); }
        }
        @keyframes pl-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        @keyframes pl-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {/* Logo */}
      <img
        src={logoImg}
        alt="Skillzza K-12"
        style={{
          height: '56px',
          width: 'auto',
          objectFit: 'contain',
          animation: 'pl-pulse 2s ease-in-out infinite',
          marginBottom: '32px',
        }}
      />

      {/* Progress Bar */}
      <div style={{
        width: '180px',
        height: '3px',
        borderRadius: '4px',
        background: '#E5E7EB',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          borderRadius: '4px',
          background: 'linear-gradient(90deg, #6C3CF7, #4200FF, #E82194)',
          backgroundSize: '200% 100%',
          animation: 'pl-bar 1.8s ease-in-out infinite, pl-shimmer 1.5s linear infinite',
        }} />
      </div>
    </div>
  );
}
