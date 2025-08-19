"use client";

import { useState } from "react";
import { smoothScrollTo } from "@/lib/utils";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  const link =
    "font-mono text-black/80 hover:text-ink underline underline-offset-[6px] decoration-transparent hover:decoration-[1px] hover:decoration-ink transition-all duration-200";
  const active = "font-mono text-ink underline decoration-[1px]";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    smoothScrollTo(id);
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-sm border-b border-[color:var(--rule)]">
      <div className="mx-auto max-w-[880px] px-6 py-5 relative">
        <div className="flex items-center justify-between">
          <span className="brand-name text-[22px] tracking-tight">
            Playfield
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className={activeSection === "home" ? active : link}
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 w-[1px] paper-rail" />
      </div>
    </nav>
  );
}
