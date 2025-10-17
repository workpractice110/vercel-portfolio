import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Server, Cloud } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Java", "Core Java", "J2EE", "Spring", "Spring Boot", "Microservices", "HTML"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "Oracle", "SQL", "PLSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: Server,
    skills: ["Apache Tomcat", "Websphere", "Websphere MQ", "Web Services", "Rest API"],
  },
  {
    title: "Messaging & Integration",
    icon: Cloud,
    skills: ["Swift Messaging", "MQ", "Microservices Architecture"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4" data-testid="heading-skills">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`skill-category-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading" data-testid={`text-category-${index}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm"
                        data-testid={`badge-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 font-heading">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Team Leadership", "Microservices Architecture", "Financial Technology", "Requirement Gathering", "Agile Development"].map((competency, index) => (
              <Badge key={index} className="text-sm px-4 py-2" data-testid={`badge-competency-${index}`}>
                {competency}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
