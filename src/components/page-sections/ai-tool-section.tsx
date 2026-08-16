
'use client';
import { CodeStyleChecker } from "@/components/code-style-checker";

export function AiToolSection() {
  return (
    <section id="ai-tool" className="container py-16 md:py-24 bg-accent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">AI Code Style Checker</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4">
            Paste a code snippet to get AI-powered feedback on style consistency, readability, and best practices.
          </p>
        </div>
        <CodeStyleChecker />
      </div>
    </section>
  );
}
