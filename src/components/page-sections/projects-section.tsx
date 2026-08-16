
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function getProjectImage(imageId: string) {
  return PlaceHolderImages.find(img => img.id === imageId);
}

const GooglePlayIcon = (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/google-play.png?alt=media&token=6c47f526-1d43-4473-b82e-136552be0fef"
    alt="Google Play icon"
    width={20}
    height={20}
    {...props}
  />
);

const WebsiteIcon = (props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/website-5793.svg?alt=media&token=144e5dae-7a77-4f68-b8bd-d505aef321e7"
    alt="Website icon"
    width={20}
    height={20}
    {...props}
  />
);

const ProjectCardImage = ({ project }: { project: typeof projects[0] }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const projectImage = getProjectImage(project.image_id);

  if (!projectImage) return null;

  return (
    <div className="overflow-hidden">
      <Link href={`/projects/${project.slug}`}>
        <Image
          src={projectImage.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className={cn(
            'object-cover w-full h-auto group-hover:scale-105',
            'transition-all duration-500 ease-in-out',
            isLoaded ? 'image-loaded' : 'image-loading'
          )}
          data-ai-hint={projectImage.imageHint}
          onLoad={() => setIsLoaded(true)}
        />
      </Link>
    </div>
  );
};


export function ProjectsSection() {
  return (
    <section id="projects" className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          My Work
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
          Here's a selection of projects I've worked on. Each one was an
          opportunity to learn and grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => {
          return (
            <Card
              key={project.slug}
              className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
            >
              <ProjectCardImage project={project} />
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.playStoreUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Google Play Store"
                        >
                          <GooglePlayIcon className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                        >
                          {project.slug === 'clean-lakholav' || project.slug === 'kwizzease' ? <WebsiteIcon className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <Button asChild variant="link" className="text-primary">
                    <Link href={`/projects/${project.slug}`}>
                      Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
