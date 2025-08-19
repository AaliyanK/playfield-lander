"use client";

import { motion } from "framer-motion";

// Network data
const nodes: [number, number, number][] = [
  [160, 120, 3], [260, 180, 2.5], [380, 90, 3], [520, 160, 2.5], [720, 110, 3], [920, 160, 2.5], [1040, 90, 3],
  [240, 320, 2.5], [420, 300, 3], [600, 260, 2.5], [780, 320, 3], [980, 300, 2.5],
  [200, 480, 3], [420, 480, 2.5], [640, 460, 3], [860, 500, 2.5], [1060, 460, 3],
];

const connections: [number, number, number, number][] = [
  [160, 120, 260, 180], [260, 180, 380, 90], [380, 90, 520, 160], [520, 160, 720, 110], [720, 110, 920, 160], [920, 160, 1040, 90],
  [240, 320, 420, 300], [420, 300, 600, 260], [600, 260, 780, 320], [780, 320, 980, 300],
  [200, 480, 420, 480], [420, 480, 640, 460], [640, 460, 860, 500], [860, 500, 1060, 460],
];

export default function AnimatedNetwork() {
  return (
    <div className="absolute inset-0">
      <svg className="h-full w-full opacity-30" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <defs>
          <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Soft gradient mesh backdrop */}
        <g>
          <circle cx="200" cy="200" r="180" fill="url(#pulse)" className="animate-pulse-slow" />
          <circle cx="1000" cy="140" r="200" fill="url(#pulse)" className="animate-pulse-slower" />
          <circle cx="700" cy="480" r="220" fill="url(#pulse)" className="animate-pulse-slowest" />
        </g>

        {/* Network lines */}
        <g stroke="#9ca3af" strokeOpacity="0.25">
          {connections.map((c, i) => (
            <motion.line
              key={i}
              x1={c[0]}
              y1={c[1]}
              x2={c[2]}
              y2={c[3]}
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n[0]}
              cy={n[1]}
              r={n[2]}
              fill="#3b82f6"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.04 }}
              className="drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          ))}
        </g>
      </svg>

      <style>{`
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse 9s ease-in-out infinite; }
        .animate-pulse-slowest { animation: pulse 12s ease-in-out infinite; }
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: .6 } 
          50% { transform: scale(1.08); opacity: .9 } 
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow, .animate-pulse-slower, .animate-pulse-slowest { animation: none; }
        }
      `}</style>
    </div>
  );
}
