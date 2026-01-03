"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <Card className="relative overflow-hidden h-full gap-0 liquid-glass rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border-l-2 border-muted pl-4 pb-4 last:pb-0"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h3 className="font-semibold text-sm text-foreground">
                    {experience.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {experience.company}
                  </p>
                </div>
                <Badge variant="outline" className="glass-badge text-xs text-foreground whitespace-nowrap font-normal">
                  {experience.period}
                </Badge>
              </div>
              {experience.description && (
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
  );
}

