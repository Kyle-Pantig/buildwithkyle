"use client";

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LinkPreview } from "@/components/ui/link-preview";
import { FolderKanban, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Card className="relative overflow-hidden h-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            Recent Projects
          </CardTitle>
          <CardAction>
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="text-xs rounded-full h-7 px-2">
                View All
                <ArrowRight className="ml-1 h-2.5 w-2.5" />
              </Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-3">
          {projects.slice(0, 3).map((project, index) => (
            <LinkPreview key={index} url={project.link} className="block w-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`View ${project.name} project (opens in new tab)`}
              >
                <Card className="p-4 transition-all cursor-pointer group flex flex-col">
                  <div className="flex items-start justify-between gap-2 ">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1.5 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="glass-badge text-xs text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 2 && (
                        <Badge
                          variant="outline"
                          className="glass-badge text-xs text-foreground"
                        >
                          +{project.technologies.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </Card>
              </a>
            </LinkPreview>
          ))}
        </CardContent>
      </Card>
  );
}

