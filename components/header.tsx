"use client";

import Link from "next/link";
import { X, Github, FileText, Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed z-50 w-full top-4 px-4 py-2">
      <div className="max-w-fit mx-auto rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl shadow-2xl border border-white/10 px-4 py-4">
        <div className="flex items-center gap-2">
          {/* Logo/Cyberwon Path */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 border border-[#ef444430] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-[2px] p-1">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-900/20"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-900/20"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-900/20"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400/20 to-purple-900/20"></div>
              </div>
            </div>
            
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-white/20"></div>

          {/* Icons */}
          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition p-1"
              aria-label="Home"
            >
              <X className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/cyberwon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition p-1"
              aria-label="Blog"
            >
              <FileText className="w-4 h-4" />
            </Link>
            <Link
              href="/resume.pdf"
              download
              className="text-white/80 hover:text-white transition p-1 flex items-center gap-1"
              aria-label="Download Resume"
            >
              <span className="text-xs font-medium">Resume</span>
              <Download className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
