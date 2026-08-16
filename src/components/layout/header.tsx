
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#journey", label: "My Journey" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#ai-tool", label: "AI Tool" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // This effect handles scroll-spying ONLY on the homepage.
    if (pathname === '/') {
      const handleScroll = () => {
        const sections = navLinks
          .map(link => (link.href.startsWith('/#') ? document.getElementById(link.href.substring(2)) : null))
          .filter(Boolean) as HTMLElement[];

        const scrollPosition = window.scrollY + 150;
        
        // Find which section is currently in view
        let currentSectionId = '';
        for (const section of sections) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                currentSectionId = section.id;
                break;
            }
        }
        
        if (currentSectionId) {
            setActiveLink(`/#${currentSectionId}`);
        } else if (window.scrollY < sections[0]?.offsetTop - 150) {
            // If we are at the top of the page (before the first section), 'Home' is active.
             setActiveLink('/');
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For any other page, the active link is just the pathname.
      setActiveLink(pathname);
    }
  }, [pathname]);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // For hash links, prevent default and scroll smoothly.
      if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (href === '/') {
         e.preventDefault();
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      if (isMobile) {
        setIsMobileMenuOpen(false);
      }
    };

    const isActive = activeLink === href || (href === "/" && activeLink.startsWith('/#'));


    return (
      <Link
        href={href}
        onClick={handleLinkClick}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          (href === '/' ? activeLink === '/' || activeLink.startsWith('/#') : activeLink === href) ? "text-primary font-bold" : "text-muted-foreground",
           isMobile && "block py-2 text-lg"
        )}
      >
        {label}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center gap-2">
            <span className="font-headline text-xl font-bold">CG</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                     <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 font-bold text-lg">
                        <span className="font-headline text-xl">CG</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close Menu</span>
                      </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
