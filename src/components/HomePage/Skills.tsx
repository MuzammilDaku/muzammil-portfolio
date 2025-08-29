"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "Angular",
  "NodeJS",
  "NestJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "GitHub",
  "React Native"
];

const Skills: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section
    className={`py-20 px-6 sm:px-10 lg:px-20  transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="skills"
    >
      <h2 className="text-3xl text-center font-semibold text-[#14279B]">
        My Skills
      </h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl flex flex-col items-center py-6 px-2"
          >
            <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-blue-50">
              <Image
                src={`/${skill
                  .toLowerCase() === "react native" ? 'reactnative': skill.toLowerCase()
                  }.png`}
                alt={skill}
                height={48}
                width={48}
                className="object-contain"
              />
            </div>
            <p className="text-[#14279B] font-medium text-lg">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
