import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-avatar.png';
const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8 animate-fade-up opacity-0" style={{
          animationFillMode: 'forwards'
        }}>
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-glow" />
              <img alt="Dhanashri Chahajgune - Web Developer" className="relative w-full h-full rounded-full object-cover border-4 border-background" src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 glass-card rounded-full">
              <span className="text-sm font-medium text-primary">Available for hire</span>
            </div>
          </div>

          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-fade-up opacity-0 animation-delay-100" style={{
          animationFillMode: 'forwards'
        }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-200" style={{
          animationFillMode: 'forwards'
        }}>
            Dhanashri <span className="text-gradient">Chahajgune</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-up opacity-0 animation-delay-300" style={{
          animationFillMode: 'forwards'
        }}>
            2nd Year CSE Student at NIT Jalandhar | Web Developer Intern
          </h2>

          {/* Skills Summary */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed animate-fade-up opacity-0 animation-delay-400" style={{
          animationFillMode: 'forwards'
        }}>
            Building and learning modern, interactive web development. Passionate about{' '}
            <span className="text-foreground font-medium">frontend development</span>,{' '}
            <span className="text-foreground font-medium">UI/UX design</span>, and{' '}
            <span className="text-foreground font-medium">real-world projects</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up opacity-0 animation-delay-500" style={{
          animationFillMode: 'forwards'
        }}>
            <Button variant="glow" size="lg" onClick={() => handleScroll('#projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => handleScroll('#contact')}>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-up opacity-0" style={{
          animationDelay: '600ms',
          animationFillMode: 'forwards'
        }}>
            <a href="https://github.com/Dhanu1910" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dhanashri-chahajgune-b83555364" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:chahajguned@gmail.com" className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button onClick={() => handleScroll('#about')} className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;