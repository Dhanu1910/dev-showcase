import { useInView } from '@/hooks/useInView';
import { Award, BookOpen, Users, Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'DSA Certification',
    description: 'Completed comprehensive Data Structures & Algorithms course with distinction',
    type: 'Certification',
  },
  {
    icon: BookOpen,
    title: 'Web Development Intern',
    description: 'Completed internship with hands-on experience in frontend development',
    type: 'Experience',
  },
  {
    icon: Users,
    title: 'Tech Club Member',
    description: 'Active member of the college technical club, participating in coding events',
    type: 'Activity',
  },
  {
    icon: Trophy,
    title: 'Hackathon Participant',
    description: 'Participated in multiple hackathons, building innovative projects',
    type: 'Achievement',
  },
  {
    icon: Medal,
    title: 'Problem Solving',
    description: 'Solved 200+ coding problems on competitive programming platforms',
    type: 'Achievement',
  },
  {
    icon: Star,
    title: 'Academic Excellence',
    description: 'Maintained strong academic performance in Computer Science coursework',
    type: 'Academic',
  },
];

const AchievementsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="achievements" className="relative overflow-hidden bg-secondary/20" ref={ref}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-primary font-mono text-sm mb-4">// ACHIEVEMENTS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Accomplishments & Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 rounded-xl group hover:scale-[1.02] transition-all duration-300 ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 200}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary/80 uppercase tracking-wider">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
