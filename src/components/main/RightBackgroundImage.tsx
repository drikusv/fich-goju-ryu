import React from 'react';

export default function RightBackgroundImage() {
  return (
    <div
      className="fixed top-0 right-0 h-screen w-[227px] pointer-events-none z-0"
      style={{
        background: `
          linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255)),
          url("/images/Small_untitled_design.png")
        `,
        backgroundPosition: 'right center',
        backgroundRepeat: 'repeat-y'
      }}
      aria-hidden="true"
    />
  );
}