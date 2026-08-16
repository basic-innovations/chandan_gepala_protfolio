import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </p>
           <Link href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Admin
            </Link>
        </div>
        <div className="flex items-center gap-2">
          {personalInfo.socials.map(social => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
