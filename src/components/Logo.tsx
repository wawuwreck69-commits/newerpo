export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="8" fill="white"/>
      
      {/* Wavy lines for water */}
      <path d="M 15 120 Q 30 100 50 120 T 90 120 T 130 120 T 170 120 T 185 100" stroke="black" strokeWidth="4" fill="none"/>
      <path d="M 20 140 Q 40 120 60 140 T 100 140 T 140 140 T 180 140" stroke="black" strokeWidth="4" fill="none"/>
      <path d="M 30 160 Q 50 140 70 160 T 110 160 T 150 160 T 170 140" stroke="black" strokeWidth="4" fill="none"/>
      <path d="M 50 180 Q 70 160 90 180 T 130 180 T 150 160" stroke="black" strokeWidth="4" fill="none"/>

      {/* Fish silhouette (simplified cartoon fish) */}
      <path d="M 100 40 C 140 30, 160 70, 140 100 C 120 130, 80 140, 60 110 C 40 80, 60 50, 100 40 Z" fill="black"/>
      <path d="M 140 100 L 160 120 L 130 125 Z" fill="black"/>
      <circle cx="90" cy="60" r="8" fill="white"/>
      <circle cx="90" cy="60" r="3" fill="black"/>
      
      {/* Pipe and smoke/notes */}
      <path d="M 60 80 L 40 90 L 45 95 L 65 85 Z" fill="black"/>
      <circle cx="40" cy="90" r="6" fill="black"/>
      <text x="25" y="70" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="black">♪</text>
      <text x="45" y="50" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="black">♫</text>

      {/* Text "FISH WHISTLE" */}
      <text 
        x="220" 
        y="130" 
        fontFamily="Impact, sans-serif" 
        fontSize="110" 
        fontWeight="bold" 
        fill="black"
        letterSpacing="4"
      >
        FISH WHISTLE
      </text>

      {/* Underline */}
      <rect x="220" y="150" width="560" height="12" fill="black"/>
    </svg>
  );
}
