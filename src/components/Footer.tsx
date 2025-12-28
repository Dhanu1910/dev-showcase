import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-muted-foreground text-sm text-left">
            © {currentYear} Dhanashri Chahajgune. All rights reserved.
          </p>
          <div className="text-muted-foreground text-sm flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>using React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
