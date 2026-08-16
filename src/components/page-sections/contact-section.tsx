
'use client';
import { ContactForm } from "@/components/contact-form";
import { personalInfo } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">Let's Connect</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
          <div className="space-y-4">
            {personalInfo.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group"
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-lg text-muted-foreground group-hover:text-primary transition-colors">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
