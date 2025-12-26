import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'npm / Vite', level: 80 },
      { name: 'REST APIs', level: 75 },
    ],
  },
];

const techStack = [
  { name: 'HTML5', color: 'from-orange-500 to-orange-600' },
  { name: 'CSS3', color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
  { name: 'TypeScript', color: 'from-blue-400 to-blue-500' },
  { name: 'React', color: 'from-cyan-400 to-cyan-500' },
  { name: 'Tailwind', color: 'from-teal-400 to-teal-500' },
  { name: 'Git', color: 'from-orange-400 to-red-500' },
  { name: 'Vite', color: 'from-purple-400 to-purple-500' },
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

          {/* Tech Stack Pills */}
          <div className={`flex flex-wrap justify-center gap-3 mb-16 ${isInView ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="px-5 py-2.5 glass-card rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className={`bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Skills Bars */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <div
                key={category.title}
                className={`glass-card p-8 rounded-2xl ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${catIndex * 150 + 300}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-6">
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
                            transitionDelay: `${index * 100 + 500}ms`,
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
