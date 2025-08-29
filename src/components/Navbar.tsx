"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <nav className="container mx-auto pt-4 flex items-center justify-between px-4 relative">
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

        {/* Contact Me Dropdown */}
        <div className="relative" ref={contactRef}>
          <button
            type="button"
            className="text-white font-semibold py-2 px-4 bg-[#608AF5] rounded-xl text-lg cursor-pointer"
            onClick={() => setContactOpen(!contactOpen)}
          >
            Contact Me
          </button>
          {contactOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl py-3 flex flex-col gap-3 z-50">
              <a
                href="https://github.com/muzammilDaku"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muzammilabbaskhanbaloch/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href="mailto:khanbalochmuzammilabbas@gmail.com"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          )}
        </div>
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

          {/* Contact Me Links (Mobile) */}
          <div className="flex flex-col gap-4 mt-4">
            <a
              href="https://github.com/muzammilDaku"
              target="_blank"
              className="flex items-center gap-2 text-gray-700"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muzammilabbaskhanbaloch/"
              target="_blank"
              className="flex items-center gap-2 text-gray-700"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="mailto:khanbalochmuzammilabbas@gmail.com"
              className="flex items-center gap-2 text-gray-700"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
