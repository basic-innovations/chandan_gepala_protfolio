
'use client';
import React from 'react';
import { WorldMap } from '@/components/ui/world-map';

export function JourneySection() {
  const locations = [
    {
      title: 'Ahmedabad, India',
      lat: 23.0225,
      long: 72.5714,
    },
    {
      title: 'Jaipur, India',
      lat: 26.9124,
      long: 75.7873,
    },
    {
      title: 'Jodhpur, India',
      lat: 26.2389,
      long: 73.0243,
    },
    {
      title: 'Udaipur, India',
      lat: 24.5854,
      long: 73.7125,
    },
    {
      title: 'Nicosia, Cyprus',
      lat: 35.1856,
      long: 33.3823,
    },
    {
      title: 'Noida, India',
      lat: 28.5355,
      long: 77.391,
    },
    {
      title: 'Guwahati, India',
      lat: 26.1445,
      long: 91.7362,
    },
  ];

  return (
    <section id="journey" className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            My Professional Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From the vibrant streets of India to projects across the globe, my path has been a continuous pursuit of knowledge and impact through technology.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-12">
            <div className="relative w-full max-w-4xl h-[30rem] md:h-[35rem] flex items-center justify-center">
                <WorldMap
                    locations={locations}
                    markerColor="hsl(25 95% 53%)"
                    className="w-full h-full"
                />
            </div>
            <div className="space-y-6 text-muted-foreground text-lg max-w-4xl text-left md:text-center">
                <h2 className="font-headline text-3xl font-bold text-foreground text-center">From Local Roots to Global Innovation</h2>
                <p>
                    My journey in technology began in the vibrant cities of India, starting with my foundations in Jodhpur and early professional work in Jaipur. It was here I first cut my teeth on building robust applications, developing a full-fledged hospital management system and implementing features like REST APIs and video consultations that directly impacted patient care.
                </p>
                <p>
                    My path then led me to a deep and rewarding focus on Healthtech with Primary Healthtech. In both Guwahati and Noida, I tackled mission-critical challenges, from securing sensitive medical data with AES encryption to engineering seamless offline capabilities for devices in remote locations. I architected on-device quality checks and parallel processing workflows that boosted the reliability and slashed the testing time of biochemistry analyzers, ensuring that healthcare professionals had tools they could trust.
                </p>
                <p>
                    Pivoting to a new challenge, I joined Gumb AG, where I led the Android team for a rapidly growing community scheduling app. Here, the focus shifted to user experience at scale. By strategically optimizing caching and navigation, we achieved a 62.5% faster startup time and a 40% reduction in navigation time for over 10,000 active users, demonstrating my ability to enhance performance in a consumer-facing environment.
                </p>
                 <p>
                    Most recently, my journey has taken me to the forefront of innovation at the CYENS Centre of Excellence in Cyprus. As part of the Adroit6G project, I'm developing proof-of-concept models for 6G-enabled Industrial IoT systems, designing resilient peer-to-peer networks and integrating intelligent AI agents to manage connectivity in off-grid environments. Each marker on this map represents not just a location, but a new problem solved and a new lesson learned in my continuous pursuit of building impactful technology.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
