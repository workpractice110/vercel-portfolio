import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Mashreq Global Services",
    role: "Senior Software Engineer",
    period: "Oct 2021 - Present",
    description: "Managing team of developers and requirement gatherings. Building microservices as per project needs.",
    current: true,
  },
  {
    company: "DBS Bank",
    role: "Software Engineer",
    period: "Mar 2019 - Oct 2021",
    description: "Software Developer working on cutting edge technologies in financial domain.",
  },
  {
    company: "Deloitte US India",
    role: "Software Engineer",
    period: "May 2017 - Mar 2019",
    description: "Developed enterprise solutions and worked on complex financial applications.",
  },
  {
    company: "Cognizant Technologies Solutions",
    role: "Programmer Analyst",
    period: "Apr 2015 - Mar 2017",
    description: "Started career as a developer, building foundational skills in software development.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4" data-testid="heading-experience">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            9+ years of professional experience in software engineering and team leadership
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-testid={`experience-${index}`}
              >
                <div className="hidden md:block md:flex-1" />
                
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform md:-translate-x-1/2" />

                <Card className="flex-1 ml-16 md:ml-0 hover-elevate">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold font-heading" data-testid={`text-company-${index}`}>
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-lg font-medium text-primary" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </p>
                    </div>
                    {exp.current && (
                      <Badge variant="default" data-testid={`badge-current-${index}`}>
                        Current
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground" data-testid={`text-period-${index}`}>
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${index}`}>
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
