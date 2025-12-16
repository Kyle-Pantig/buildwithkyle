"use client";

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { techStack } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <Card className="relative overflow-hidden h-full gap-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Code className="h-5 w-5" />
            Tech Stack
          </CardTitle>
          <CardAction>
            <Link href="/tech-stack">
              <Button variant="ghost" size="sm" className="text-xs rounded-full h-7 px-2">
                View All
                <ArrowRight className="ml-1 h-2.5 w-2.5" />
              </Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          {techStack.slice(0, 3).map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="space-y-2"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.slice(0, 6).map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="glass-badge text-xs text-foreground font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
                {category.technologies.length > 6 && (
                  <Badge
                    variant="outline"
                    className="glass-badge text-xs text-foreground font-normal"
                  >
                    +{category.technologies.length - 6}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
  );
}

