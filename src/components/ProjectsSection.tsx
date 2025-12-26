import { useInView } from '@/hooks/useInView';
import { Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Interactive Navbar',
    description: 'Modern responsive navbar with smooth hover effects, scroll animations, and mobile-friendly hamburger menu.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Dhanu1910',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing skills, projects, and achievements with modern dark theme and glassmorphism design.',
    tech: ['React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/Dhanu1910',
    featured: true,
  },
  {
    title: 'Responsive Landing Page',
    description: 'Clean and modern landing page with smooth animations and fully responsive design for all devices.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Dhanu1910',
    featured: true,
  },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-primary font-mono text-sm mb-4">// MY WORK</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass-card glow-effect p-6 rounded-2xl flex flex-col ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className={`text-center mt-12 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Dhanu1910"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
