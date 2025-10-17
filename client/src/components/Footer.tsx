import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold font-heading mb-2" data-testid="text-footer-name">
              Monu Dwivedi
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Senior Software Engineer | Java & Microservices Expert
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant="outline"
              asChild
              data-testid="button-linkedin"
            >
              <a href="https://linkedin.com/in/monudwivedi" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              asChild
              data-testid="button-email"
            >
              <a href="mailto:monudwivedi91@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} Monu Dwivedi. All rights reserved.
          </p>
        </div>
      </div>

      <Button
        size="icon"
        className="fixed bottom-8 right-8 rounded-full shadow-lg"
        onClick={scrollToTop}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
}
