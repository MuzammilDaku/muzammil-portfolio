"use client";
import Image from "next/image";
import React, { useEffect, memo, useMemo, useCallback } from "react";

const Projects: React.FC = memo(() => {
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = useMemo(() => [
    {
      name: "Deal Finder App",
      link: "https://buzzcompare.com",
      description:
        "Made this full app for finding best deals across various e-commerce platforms using NextJS, HonoJs, PSQL , Docker.",
      image: "/dealfinder.png",
    },
    {
      name: "Risk Score AI",
      link: "https://risk-score-ai-eta.vercel.app",
      description:
        "Made Landing page for Risk Score AI, a tool that uses machine learning to assess and predict risk levels for various applications.",
      image: "/riskscore.png",
    },
    {
      name: "Larya",
      link: "https://larya.com.br",
      description:
        "Frontend development for Larya, a platform connecting language learners with native speakers for immersive learning experiences.",
      image: "/larya.png",
    },
    {
        name:"Balantia Mobile App",
        link:"https://play.google.com/store/apps/details?id=com.balantia.mobileapp&pli=1",
        description:"Implemented Apis and integrated with frontend of Balantia Mobile Application using React Native.",
        image:"/balantia.png"
    },
    {
        name:"Motor Car",
        link:"https://motor-car-web.vercel.app/",
        description:"Developed a car rental web application using NextJS and Bootstrap.",
        image:"/motor-car.png"
    },
    {
        name:"Contract & Sign Editor",
        link:"https://revmap-cns-fe.vercel.app/dashboard/editor-dahsbord",
        description:"Developed a contract and sign editor using QuillJs In ReactJs.",
        image:"/revmap.png"
    }
  ], []);

  const handleProjectClick = useCallback((link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <section
      id="projects"
      className={`py-20 px-6 sm:px-10 lg:px-20  transition-all duration-1000 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-[#14279B]">
        My <span className="text-indigo-600">Projects</span>
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Here are some of the projects I’ve worked on recently.
      </p>

      {/* Projects Grid */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                height={300}
                width={400}
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-44">
              <div>
                <h3 className="text-xl font-semibold text-[#14279B] group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => handleProjectClick(project.link)}
                className="mt-4 inline-block text-center px-5 py-2.5 rounded-xl text-sm font-semibold 
             bg-gradient-to-r from-[#608AF5] via-[#6366f1] to-[#608AF5] text-white 
             shadow-md hover:shadow-lg hover:scale-105 
             hover:from-[#4338ca] hover:via-[#4f46e5] hover:to-[#6366f1] 
             transition-all duration-300 ease-out"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
