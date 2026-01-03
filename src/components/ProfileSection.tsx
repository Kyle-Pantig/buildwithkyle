"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Mail, Users, ArrowRight, Keyboard, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProfileSection() {
  const [profileImage, setProfileImage] = useState("/profile-1.png");
  const [imageError, setImageError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload both images
  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    
    img1.src = "/profile-1.png";
    img2.src = "/profile-2.png";
    
    Promise.all([
      new Promise((resolve) => { img1.onload = resolve; img1.onerror = resolve; }),
      new Promise((resolve) => { img2.onload = resolve; img2.onerror = resolve; })
    ]).then(() => {
      setImagesLoaded(true);
    });
  }, []);
  
  const handleProfileChange = () => {
    setImageError(false);
    setProfileImage(prev => prev === "/profile-1.png" ? "/profile-2.png" : "/profile-1.png");
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  return (
    <div>
        <div>
          <Card className="relative overflow-hidden">
            {/* Large Keyboard Icon Background */}
            <div className="absolute right-0 top-0 opacity-10 dark:opacity-15 pointer-events-none translate-x-1/4 -translate-y-1/4">
              <Keyboard className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] text-blue-500 rotate-45 blur-sm" />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle 
              className="absolute right-4 top-4 z-50"
              initialAnimation={true}
            />

            <CardContent className="relative z-10 p-5 sm:p-6">
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start sm:gap-6">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <Avatar 
                    className="h-32 w-32 sm:h-full sm:w-40 sm:aspect-square cursor-pointer transition-all ring-2 ring-foreground/20 dark:ring-foreground/30"
                    onMouseEnter={handleProfileChange}
                    onMouseLeave={() => setProfileImage("/profile-1.png")}
                    onClick={handleProfileChange}
                    role="button"
                    tabIndex={0}
                    aria-label="Profile picture - click or hover to change"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleProfileChange();
                      }
                    }}
                  >
                    {imagesLoaded && (
                      <AvatarImage 
                        src={profileImage} 
                        alt="Kyle Pantig - Web Developer"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                        className={imageError ? "hidden" : ""}
                      />
                    )}
                    <AvatarFallback 
                      className={`bg-primary text-primary-foreground text-lg font-medium ${imagesLoaded && !imageError ? "hidden" : ""}`}
                      aria-label="Kyle Pantig initials"
                    >
                      KP
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Profile Info */}
                <div className="flex flex-1 flex-col gap-2">
                  {/* Name */}
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <h1 className="text-xl font-semibold text-foreground sm:text-2xl">Kyle Pantig</h1>
                  </div>

                  {/* Location */}
                  <div className="-mt-1 flex items-center justify-center gap-1.5 text-muted-foreground sm:justify-start">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-sm">Pampanga, Philippines</span>
                  </div>

                  {/* Role */}
                  <p className="text-sm font-medium text-foreground sm:text-base text-center sm:text-left">
                    Web Developer
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <Link 
                      href="mailto:kylepantig@gmail.com"
                      aria-label="Contact me via email"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full sm:w-auto" 
                        size="default"
                      >
                        <Mail className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                        Contact Me
                      </Button>
                    </Link>
                    <Link href="/projects" aria-label="View all projects">
                      <Button variant="outline" className="w-full rounded-full sm:w-auto" size="default">
                        <Users className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                        View Projects
                        <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
                      </Button>
                    </Link>
                    <Link 
                      href="/Kyle Francis Pantig - Resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      download
                      aria-label="Download resume PDF"
                    >
                      <Button variant="outline" className="w-full rounded-full sm:w-auto" size="default">
                        <Download className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                        Download Resume
                      </Button>
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/kyle-francis-pantig-207341201" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Visit LinkedIn profile (opens in new tab)"
                    >
                      <Button variant="outline" className="w-full rounded-full sm:w-auto" size="default">
                        <Linkedin className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                        LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}

