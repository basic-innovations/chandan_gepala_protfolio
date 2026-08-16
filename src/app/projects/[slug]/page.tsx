'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { cn } from '@/lib/utils';


type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

function getImage(imageId: string) {
  return PlaceHolderImages.find(img => img.id === imageId);
}

const AnimatedImage = ({ src, alt, width, height, className, 'data-ai-hint': dataAiHint }: { src: string, alt: string, width: number, height: number, className: string, 'data-ai-hint': string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
     <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          className,
          'transition-all duration-500 ease-in-out',
          isLoaded ? 'image-loaded' : 'image-loading'
        )}
        data-ai-hint={dataAiHint}
        onLoad={() => setIsLoaded(true)}
      />
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectImage1 = getImage(`${project.slug}-1`);
  const projectImage2 = getImage(`${project.slug}-2`);

  return (
    <div className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack and Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="default" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Button asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.slug === 'clean-lakholav' || project.slug === 'kwizzease' ? <WebsiteIcon className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                  Live Demo
                </a>
              </Button>
            )}
             {project.playStoreUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GooglePlayIcon className="mr-2 h-4 w-4" /> Play Store
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {projectImage1 && (
            <AnimatedImage
              src={projectImage1.imageUrl}
              alt={`${project.title} screenshot 1`}
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              data-ai-hint={projectImage1.imageHint}
            />
          )}
          {projectImage2 && (
            <AnimatedImage
              src={projectImage2.imageUrl}
              alt={`${project.title} screenshot 2`}
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              data-ai-hint={projectImage2.imageHint}
            />
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground text-lg">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground text-lg">{project.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
