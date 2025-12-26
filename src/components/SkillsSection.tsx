import { useInView } from '@/hooks/useInView';
import { Code2, Database, Terminal, FileCode, Braces, LayoutDashboard } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 78 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'React', level: 70 },
    ],
  },
];

const techCards = [
  { name: 'Python', icon: Terminal, description: 'Scripting & Automation' },
  { name: 'C++', icon: Code2, description: 'Object-Oriented Programming' },
  { name: 'C', icon: FileCode, description: 'Systems Programming' },
  { name: 'DSA', icon: Braces, description: 'Data Structures & Algorithms' },
  { name: 'HTML & CSS', icon: LayoutDashboard, description: 'Web Fundamentals' },
  { name: 'Git', icon: Database, description: 'Version Control' },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-primary font-mono text-sm mb-4">// MY SKILLS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Technical Toolkit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Tech Cards Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {techCards.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`glass-card p-8 rounded-2xl ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${catIndex * 150 + 400}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100 + 600}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
