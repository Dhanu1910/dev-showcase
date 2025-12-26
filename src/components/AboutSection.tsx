import { useInView } from '@/hooks/useInView';
import { Code2, GraduationCap, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    description: 'Pursuing Computer Science with focus on web technologies',
  },
  {
    icon: Code2,
    title: 'Frontend Focus',
    description: 'Specialized in React, TypeScript, and modern CSS',
  },
  {
    icon: Rocket,
    title: 'Intern Experience',
    description: 'Hands-on projects at tech startups',
  },
  {
    icon: Heart,
    title: 'Passionate Learner',
    description: 'Always exploring new technologies and best practices',
  },
];

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-primary font-mono text-sm mb-4">// ABOUT ME</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get to Know Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className={`space-y-6 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm <span className="text-foreground font-semibold">Alex Chen</span>, 
                a passionate web developer currently pursuing my Computer Science degree. 
                My journey into web development started with curiosity about how websites work, 
                and it quickly turned into a deep passion for creating beautiful, functional digital experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-medium">Web Developer Intern</span>, 
                I've had the opportunity to work on real-world projects, collaborating with 
                talented teams to build responsive websites and web applications. I focus on 
                writing clean, maintainable code while keeping user experience at the forefront.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing my learning journey with the developer community. 
                I believe in continuous learning and pushing myself to grow every day.
              </p>

              <div className="pt-4">
                <p className="text-muted-foreground mb-2">Currently looking for:</p>
                <p className="text-foreground font-medium">
                  Full-time Frontend Developer opportunities
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass-card glow-effect p-6 rounded-xl ${
                    isInView ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
