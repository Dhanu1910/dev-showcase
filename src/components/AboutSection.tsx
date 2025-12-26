import { useInView } from '@/hooks/useInView';
import { Code2, GraduationCap, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS Student',
    description: 'CSE Undergraduate at NIT Jalandhar (Batch of 2028)',
  },
  {
    icon: Code2,
    title: 'Frontend Focus',
    description: 'Passionate about HTML, CSS, JavaScript, and modern web technologies',
  },
  {
    icon: Rocket,
    title: 'Intern Experience',
    description: 'Web Developer Intern at Prodigy Infotech with hands-on projects',
  },
  {
    icon: Heart,
    title: 'Passionate Learner',
    description: 'Always exploring new technologies and building real-world projects',
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
                Hi! I'm <span className="text-foreground font-semibold">Dhanashri Chahajgune</span>, 
                a passionate web developer currently pursuing my Computer Science degree at 
                <span className="text-primary font-medium"> NIT Jalandhar</span> (Batch of 2028). 
                My journey into web development started with curiosity about how websites work, 
                and it quickly turned into a deep passion for creating beautiful, functional digital experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a <span className="text-primary font-medium">Web Developer Intern at Prodigy Infotech</span>, 
                I've had the opportunity to work on real-world projects, building responsive websites 
                and web applications. I focus on writing clean, maintainable code while keeping 
                user experience at the forefront.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about frontend development, UI/UX design, and constantly learning 
                new technologies. I believe in continuous learning and pushing myself to grow every day 
                through hands-on projects and real-world experience.
              </p>

              <div className="pt-4">
                <p className="text-muted-foreground mb-2">Currently:</p>
                <p className="text-foreground font-medium">
                  Web Developer Intern | Open to new opportunities
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
