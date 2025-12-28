import { Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-col sm:flex-row gap-4 flex items-center justify-between">
          <p className="text-muted-foreground text-sm text-left">
            © {currentYear} Alex Chen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
          <Heart className="w-4 h-4 text-primary inline" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;