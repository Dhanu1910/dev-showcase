import { useInView } from '@/hooks/useInView';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Weather App',
    description: 'A beautiful weather application with location-based forecasts, animated backgrounds, and 5-day predictions.',
    tech: ['JavaScript', 'OpenWeather API', 'CSS3'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop functionality, categories, and local storage persistence.',
    tech: ['React', 'DnD Kit', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Portfolio Website v1',
    description: 'My first portfolio website built with vanilla HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Recipe Finder',
    description: 'Search and save recipes from an extensive database with filtering and favorites.',
    tech: ['React', 'Spoonacular API'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Markdown Previewer',
    description: 'Real-time markdown editor and previewer with syntax highlighting.',
    tech: ['React', 'Marked.js'],
    github: 'https://github.com',
    featured: false,
  },
];

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
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

          {/* Other Projects */}
          <div className={`${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More */}
          <div className={`text-center mt-12 ${isInView ? 'animate-fade-up animation-delay-500' : 'opacity-0'}`}>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
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
