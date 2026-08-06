import React from 'react';

interface LogoMarkProps {
  className?: string;
}

/**
 * Minimalist Christian Logo Mark: The Anchor of Hope (Hebrews 6:19)
 * Represents steadfast risk protection, divine stewardship, and grounded strategy.
 */
export const LogoMark: React.FC<LogoMarkProps> = ({ className = 'w-5 h-5 text-[#B08D57]' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Top Eye / Ring */}
      <circle cx="12" cy="4.5" r="2" />
      {/* Crossbar */}
      <path d="M7 9.5h10" />
      {/* Main Shaft */}
      <path d="M12 6.5v13" />
      {/* Anchor Arms */}
      <path d="M5 15.5a7 7 0 0 0 14 0" />
      {/* Flukes */}
      <path d="M5 13.5v2" />
      <path d="M19 13.5v2" />
    </svg>
  );
};
