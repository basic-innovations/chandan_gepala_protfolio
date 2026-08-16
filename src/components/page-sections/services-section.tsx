
'use client';
import { Smartphone, Globe, Cpu, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Creating high-performance, feature-rich native and cross-platform mobile applications for Android and iOS that deliver seamless user experiences.',
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Website Development',
    description: 'Building responsive, modern, and fast-loading websites that are optimized for all devices and search engines to establish a strong online presence.',
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'Embedded & IoT Solutions',
    description: 'Developing custom firmware and software for embedded systems and IoT devices, connecting the physical and digital worlds for industrial and consumer products.',
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: 'AI Integration',
    description: 'Integrating cutting-edge AI and machine learning models into new or existing applications to unlock intelligent features and data-driven insights.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          My Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mt-4">
          Offering a range of services to bring your digital ideas to life, from mobile apps to AI-powered solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="items-center">
              {service.icon}
              <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
