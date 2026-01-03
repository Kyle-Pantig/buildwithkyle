"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/kylepantiggg",
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    name: "Github",
    url: "https://github.com/Kyle-Pantig",
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: "Email",
    url: "mailto:kylepantig@gmail.com",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kyle-francis-pantig-207341201",
    icon: <Linkedin className="h-4 w-4" />,
  },
];

export default function SocialLinksSection() {
  return (
    <Card className="relative overflow-hidden h-full gap-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            Social Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link, index) => (
              <div key={index}>
                <Link 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name} profile (opens in new tab)`}
                >
                  <Button variant="outline" className="rounded-full gap-2">
                    <span aria-hidden="true">{link.icon}</span>
                    {link.name}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
  );
}

