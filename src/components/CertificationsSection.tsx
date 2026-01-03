"use client";

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  return (
    <Card className="relative overflow-hidden h-full gap-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Award className="h-5 w-5" />
            Certifications
          </CardTitle>
          <CardAction>
            <Link href="/certifications">
              <Button variant="ghost" size="sm" className="text-xs rounded-full h-7 px-2">
                View All
                <ArrowRight className="ml-1 h-2.5 w-2.5" />
              </Button>
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          {certifications.slice(0, 2).map((certification, index) => (
            <div
              key={index}
              className="border-l-2 border-muted pl-4 pb-4 last:pb-0"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex-1">
                  <h3 className="font-normal text-sm text-foreground">
                    {certification.title}
                  </h3>
                </div>
                <Badge variant="outline" className="glass-badge text-xs text-foreground whitespace-nowrap font-normal">
                  {certification.date}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
  );
}

