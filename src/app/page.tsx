
import { AboutSection } from '@/components/page-sections/about-section';
import { ContactSection } from '@/components/page-sections/contact-section';
import { HeroSection } from '@/components/page-sections/hero-section';
import { ProjectsSection } from '@/components/page-sections/projects-section';
import { ServicesSection } from '@/components/page-sections/services-section';
import { AiToolSection } from '@/components/page-sections/ai-tool-section';
import { JourneySection } from '@/components/page-sections/journey-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <JourneySection />
      <ServicesSection />
      <ProjectsSection />
      <AiToolSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
