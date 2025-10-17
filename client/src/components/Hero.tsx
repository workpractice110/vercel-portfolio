import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Download } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function Hero() {
  const handleContactClick = () => {
    scrollToSection('#contact');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Monu_Dwivedi_Resume.pdf';
    link.download = 'Monu_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-chart-2/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(262,83%,58%,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(142,76%,36%,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground" data-testid="text-greeting">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-7xl font-bold font-heading tracking-tight" data-testid="text-name">
                Monu Dwivedi
              </h1>
              <div className="h-12 flex items-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary" data-testid="text-title">
                  Senior Software Engineer
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl" data-testid="text-summary">
              9+ years of experience building robust microservices and leading development teams 
              in the financial technology sector. Specialized in Java, Spring Boot, and scalable architectures.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" onClick={handleContactClick} data-testid="button-contact">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" onClick={handleResumeDownload} data-testid="button-resume">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2" data-testid="contact-location">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2" data-testid="contact-phone">
                <Phone className="w-4 h-4" />
                <span>+91 9831297110</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-chart-2 p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                      <span className="text-6xl font-bold font-heading text-primary">MD</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-lg" data-testid="badge-experience">
                9+ Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
