import Link from "next/link";

// Type definition for projects
export interface Project {
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

// Sample data - replace with your actual projects
const projects: Project[] = [
  {
    title: "Project One",
    description: "A minimal project description",
    href: "/project-one",
  },
  {
    title: "Project Two",
    description: "Another interesting project",
    href: "/project-two",
  },
  {
    title: "Open Source Tool",
    description: "A useful developer tool",
    href: "https://github.com/yourusername/tool",
    external: true,
  },
  {
    title: "Portfolio Site",
    description: "My design portfolio",
    href: "https://portfolio.example.com",
    external: true,
  },
  {
    title: "Blog",
    description: "Thoughts on design and tech",
    href: "/blog",
  },
];

export default function ProjectsSection() {
  return (
    <section className="mb-16">
      <h2 className="section-title">Projects</h2>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.href}>
            <Link
              href={project.href}
              className="group block"
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
