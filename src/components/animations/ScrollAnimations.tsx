import React from 'react';

export const TypewriterText = ({ text, className }: { text: string, className?: string, delay?: number }) => (
  <span className={className}>{text}</span>
);

export const WordReveal = ({ text, className }: { text: string, className?: string, delay?: number }) => (
  <span className={className}>{text}</span>
);

export const FadeIn3D = ({ children, className }: { children: React.ReactNode, className?: string, delay?: number, y?: number, rotateX?: number, rotateY?: number }) => (
  <div className={className}>{children}</div>
);

export const StaggerContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
);

export const StaggerItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={className}>{children}</div>
);
