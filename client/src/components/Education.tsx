import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4" data-testid="heading-education">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and engineering
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="hover-elevate" data-testid="card-education">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
              <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold font-heading mb-1" data-testid="text-degree">
                  B.Tech in Computer Science
                </h3>
                <p className="text-muted-foreground" data-testid="text-university">
                  Uttar Pradesh Technical University (UPTU)
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Graduation Year</p>
                  <p className="font-semibold" data-testid="text-year">2014</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Grade</p>
                  <p className="font-semibold" data-testid="text-grade">72%</p>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Academic Performance</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                    style={{ width: '72%' }}
                    data-testid="progress-grade"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
