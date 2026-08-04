import React from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: false }, resize: true } },
        particles: {
          color: { value: "#6C2BD9" },
          links: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 40 },
          opacity: { value: 0.3, animation: { enable: true, speed: 0.5, minimumValue: 0.1 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 }, random: true },
        },
        detectRetina: true,
      }}
    />
  );
}
