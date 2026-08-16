
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
import { ArrowRight, Download, Apple, Globe } from 'lucide-react';
import { personalInfo, projects, skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { GlobeBackground } from '@/components/ui/globe-background';

function getHeadshotImage(imageId: string) {
  return PlaceHolderImages.find(img => img.id === imageId);
}

const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M15.7,9.3c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S15.7,9.9,15.7,9.3z M9.3,9.3c0-0.6-0.4-1-1-1s-1,0.4-1,1s0.4,1,1,1S9.3,9.9,9.3,9.3z M17,2H7C5.9,2,5,2.9,5,4v16c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4C19,2.9,18.1,2,17,2z M12,18c-2.2,0-4-1.8-4-4h8C16,16.2,14.2,18,12,18z M16,12H8v-2h8V12z"/>
  </svg>
);

export function HeroSection() {
  const headshotImage = getHeadshotImage('chandan-headshot');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-background to-accent">
      <GlobeBackground />
      <div className="container py-24 md:py-32 relative z-10">
         <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground">
              Hy! I Am <br />
              {personalInfo.name}
            </h1>
            <p className="max-w-lg text-lg md:text-xl text-muted-foreground">
              Passionate Mobile application developer, I specialize in bringing optimization and reliability to vital fields like Healthtech and Industrial IoT, making complex operations simple.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-[420px] md:h-[520px]" style={{ perspective: '1000px' }}>
            {headshotImage && (
             <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                <div className="[filter:drop-shadow(0_10px_8px_hsl(var(--primary)/0.4))]">
                  <Image
                      src={headshotImage.imageUrl}
                      alt={personalInfo.name}
                      width={420}
                      height={520}
                      className={cn(
                        'absolute top-1/2 left-1/2 rounded-lg object-contain hover:scale-105',
                        'transition-all duration-500 ease-in-out',
                        isImageLoaded ? 'image-loaded' : 'image-loading'
                      )}
                      style={{ transform: 'translate(-47%, 18%) translateZ(0px)' }}
                      data-ai-hint={headshotImage.imageHint}
                      priority
                      onLoad={() => setIsImageLoaded(true)}
                  />
                </div>

                <div className="absolute top-[30%] left-1/2 w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'translateX(-5%)' }}>
                  <div className="absolute animate-orbit-1"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/apple-logo-svgrepo-com.svg?alt=media&token=a863e3b0-c8c5-447f-80d2-954a643d1233" alt="Apple Icon" width={48} height={48} className="text-muted-foreground/60" /></div>
                  <div className="absolute animate-orbit-2"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/adaptive-icon-mask-applied.png?alt=media&token=68cf0638-9144-48b2-a9d6-d69b27ebe653" alt="Android Icon" width={40} height={40} /></div>
                  <div className="absolute animate-orbit-3"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/website-5793.svg?alt=media&token=144e5dae-7a77-4f68-b8bd-d505aef321e7" alt="Web Icon" width={48} height={48} /></div>
                  <div className="absolute animate-orbit-4"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/node-js.png?alt=media&token=829cc039-d166-45d6-a8aa-990d26005f35" alt="Node.js Icon" width={48} height={48} /></div>
                  <div className="absolute animate-orbit-5"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/vecteezy_kotlin-programming-language-3d-icon-transparent-background_60194952.png?alt=media&token=3477b874-8a98-437c-9d6c-c650a6cf64c1" alt="Kotlin Icon" width={48} height={48} /></div>
                  <div className="absolute animate-orbit-6"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/flutter.svg?alt=media&token=7360c7bb-bbb0-481f-8e41-8b3a137602dd" alt="Flutter Icon" width={40} height={40} /></div>
                  <div className="absolute animate-orbit-7"><Image src="https://firebasestorage.googleapis.com/v0/b/studio-6438978537-fd973.firebasestorage.app/o/icons8-java.svg?alt=media&token=1b7890ed-6c48-4936-a3da-cfe3501a4473" alt="Java Icon" width={48} height={48} /></div>
                </div>
             </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
