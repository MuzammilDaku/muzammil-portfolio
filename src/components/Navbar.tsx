"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSkillsClick = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const handleProjectClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const handleAboutClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="container mx-auto pt-4 flex items-center justify-between px-4">
      {/* Logo */}
      <h1 className="text-2xl font-semibold">
        <span className="text-[#14279B]">Muzammil</span>{" "}
        <span className="text-[#002265]">Abbas</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href=""
          className="hover:underline text-[#212121] text-lg"
          onClick={handleAboutClick}
        >
          About
        </Link>
        <Link
          href=""
          className="hover:underline text-[#212121] text-lg"
          onClick={handleProjectClick}
        >
          Projects
        </Link>
        <Link
          href=""
          className="hover:underline text-[#212121] text-lg"
          onClick={handleSkillsClick}
        >
          Skills
        </Link>
        <button
          type="button"
          className="text-white font-semibold py-2 px-4 bg-[#608AF5] rounded-xl text-lg cursor-pointer"
        >
          Contact Me
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-[#212121]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link
            href=""
            className="hover:underline text-[#212121] text-lg"
            onClick={handleAboutClick}
          >
            About
          </Link>
          <Link
            href=""
            className="hover:underline text-[#212121] text-lg"
            onClick={handleProjectClick}
          >
            Projects
          </Link>
          <Link
            href=""
            className="hover:underline text-[#212121] text-lg"
            onClick={handleSkillsClick}
          >
            Skills
          </Link>
          <button
            type="button"
            className="text-white font-semibold py-2 px-4 bg-[#608AF5] rounded-xl text-lg cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
