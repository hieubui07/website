"use client";

import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web App",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.",
      image: "🛒",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management Dashboard",
      category: "Web App",
      description:
        "Collaborative task management tool with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "📋",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      github: "#",
    },
    {
      title: "Weather Forecast App",
      category: "Mobile App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts.",
      image: "🌤️",
      tags: ["React Native", "API Integration", "Redux"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description:
        "Modern portfolio website with animations, dark mode, and responsive design for a creative agency.",
      image: "🎨",
      tags: ["Next.js", "Framer Motion", "CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      description:
        "Health and fitness tracking app with workout plans, nutrition tracking, and progress visualization.",
      image: "💪",
      tags: ["Flutter", "Firebase", "Charts"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Analytics",
      category: "Web App",
      description:
        "Analytics dashboard for tracking social media performance across multiple platforms with AI insights.",
      image: "📊",
      tags: ["Vue.js", "Python", "D3.js", "AI/ML"],
      link: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Web Design"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Page Header */}
        <div className="py-16">
          <h1 className="text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-light-textSecondary dark:text-dark-textSecondary max-w-2xl">
            A showcase of my recent work spanning web applications, mobile apps,
            and creative design projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-light-text dark:bg-dark-text text-light-primary dark:text-dark-primary"
                  : "bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-light-secondary dark:bg-dark-secondary border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className="bg-light-primary dark:bg-dark-primary h-48 flex items-center justify-center text-7xl border-b border-light-border dark:border-dark-border">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-full border border-light-border dark:border-dark-border mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-light-primary dark:bg-dark-primary text-light-textSecondary dark:text-dark-textSecondary rounded border border-light-border dark:border-dark-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 bg-light-text dark:bg-dark-text text-light-primary dark:text-dark-primary rounded-lg font-medium hover:scale-105 transition-transform"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-light-text dark:text-dark-text rounded-lg font-medium border border-light-border dark:border-dark-border hover:scale-105 transition-transform"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
