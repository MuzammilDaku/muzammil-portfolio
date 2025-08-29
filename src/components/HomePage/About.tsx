"use client";

import { Briefcase, Code, Cloud, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center ">
          About Me
        </h2>

        {/* Card Container */}
        <div className="mt-12 bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-6 text-center border border-gray-100">
          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed">
           I&apos;m <span className="font-semibold text-indigo-600">Muzammil Abbas</span>, 
            a passionate <span className="font-semibold">Full Stack Developer</span> 
            with expertise in building modern, scalable, and user-friendly web applications.
          </p>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
            <div className="flex items-start space-x-3">
              <Code className="w-6 h-6 text-indigo-600 mt-1" />
              <p className="text-gray-700">
                Skilled in <span className="font-medium">React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL</span>, and TypeScript.  
                Experienced with real-time features using <span className="font-medium">WebSockets</span>.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Cloud className="w-6 h-6 text-blue-500 mt-1" />
              <p className="text-gray-700">
                Passionate about deployment and scaling apps using 
                <span className="font-medium"> AWS, Docker, Vercel, and Railway</span>.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700">
                Currently working at <span className="font-medium">SpiralSols</span>, 
                contributing to innovative and high-impact projects.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-pink-500 mt-1" />
              <p className="text-gray-700">
                Beyond coding, I love exploring new places, reading tech blogs, 
                and contributing to <span className="font-medium">open-source projects</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
