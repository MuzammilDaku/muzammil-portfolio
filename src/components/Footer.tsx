"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* Logo / Name */}
          <h3 className="text-2xl font-bold text-gray-800">Muzammil Abbas</h3>
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              href="https://github.com/muzammilDaku"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muzammilabbaskhanbaloch/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:khanbalochmuzammilabbas@gmail.com"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Muzammil Abbas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
