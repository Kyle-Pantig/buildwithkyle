"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <Card className="relative h-auto md:h-full gap-0 overflow-visible">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <User className="h-5 w-5" />
            About
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I'm a web developer focused on building modern, practical web applications that solve real-world problems. I use JavaScript to create fast, scalable, and user-friendly experiences across the web.
          </p>
          <p>
            My work includes developing dashboard systems, e-commerce platforms, and custom web applications, handling both frontend and backend development. I place strong emphasis on clean code, intuitive UI/UX, and building products that are easy to maintain and scale over time.
          </p>
          <p>
            I'm continuously learning and refining my skills, exploring better ways to improve performance, usability, and overall product quality.
          </p>
        </CardContent>
      </Card>
  );
}

