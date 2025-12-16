"use client";

import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import SocialLinksSection from "@/components/SocialLinksSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <motion.div
        className="min-h-screen p-4 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-5xl space-y-4">
          <ProfileSection />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            <div className="md:col-span-2 space-y-4 flex flex-col">
              <AboutSection />
              <ExperienceSection />
            </div>
            <div className="md:col-span-1 space-y-4 flex flex-col">
              <ProjectsSection />
            </div>
            <div className="md:col-span-1 flex flex-col">
              <CertificationsSection />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <TechStackSection />
            </div>
          </div>
          
          <SocialLinksSection />
        </div>
      </motion.div>
    </main>
  );
}
