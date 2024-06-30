import React from 'react';

const SoundIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="80" height="80">
  <path id="line1" d="M20 10 L20 90" stroke="white" stroke-width="8" stroke-linecap="round" begin="0s">
    <animate attributeName="d" dur="1s" values="M20 10 L20 90; M20 30 L20 70; M20 10 L20 90;" repeatCount="indefinite" begin="0.1s"/>
  </path>
  <path id="line2" d="M35 20 L35 80" stroke="white" stroke-width="8" stroke-linecap="round">
    <animate attributeName="d" dur="1s" values="M35 20 L35 80; M35 40 L35 60; M35 20 L35 80;" repeatCount="indefinite" begin="0.2s"/>
  </path>
  <path id="line3" d="M50 10 L50 90" stroke="white" stroke-width="8" stroke-linecap="round">
    <animate attributeName="d" dur="1s" values="M50 10 L50 90; M50 30 L50 70; M50 10 L50 90;" repeatCount="indefinite" begin="0.3s"/>
  </path>
  <path id="line4" d="M65 20 L65 80" stroke="white" stroke-width="8" stroke-linecap="round">
    <animate attributeName="d" dur="1s" values="M65 20 L65 80; M65 40 L65 60; M65 20 L65 80;" repeatCount="indefinite" begin="0.4s"/>
  </path>
  <path id="line5" d="M80 10 L80 90" stroke="white" stroke-width="8" stroke-linecap="round">
    <animate attributeName="d" dur="1s" values="M80 10 L80 90; M80 30 L80 70; M80 10 L80 90;" repeatCount="indefinite" begin="0.5s"/>
  </path>
</svg>
);

export default SoundIcon;
