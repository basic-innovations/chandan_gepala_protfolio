
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo, skills } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function getHeadshotImage(imageId: string) {
  return PlaceHolderImages.find(img => img.id === imageId);
}

export function AboutSection() {
  const headshotImage = getHeadshotImage('chandan-about-headshot');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Column: Headshot and Contact */}
        <div className="md:col-span-1 space-y-8">
          {headshotImage && (
             <Image
              src={headshotImage.imageUrl}
              alt={personalInfo.name}
              width={400}
              height={400}
              className={cn(
                'rounded-lg object-cover aspect-square shadow-lg hover:scale-105 hover:shadow-2xl',
                'transition-all duration-500 ease-in-out',
                isImageLoaded ? 'image-loaded' : 'image-loading'
              )}
              data-ai-hint={headshotImage.imageHint}
              priority
              onLoad={() => setIsImageLoaded(true)}
            />
          )}
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">{personalInfo.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{personalInfo.location}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Bio and Skills */}
        <div className="md:col-span-2 space-y-12">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="text-muted-foreground text-lg space-y-4">
              <p>{personalInfo.bio}</p>
            </div>
            <Button asChild className="mt-8" size="lg">
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">My Skills</h2>
            <div className="space-y-8">
              {skills.map((skillCategory) => (
                <div key={skillCategory.category}>
                  <h3 className="font-headline text-2xl font-semibold mb-4">{skillCategory.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-base px-4 py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
