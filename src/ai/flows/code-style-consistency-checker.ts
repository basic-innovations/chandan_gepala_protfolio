'use server';

/**
 * @fileOverview An AI-powered tool to analyze code samples for style consistency.
 * 
 * - codeStyleConsistencyChecker - A function that analyzes code for style consistency.
 * - CodeStyleConsistencyCheckerInput - The input type for the codeStyleConsistencyChecker function.
 * - CodeStyleConsistencyCheckerOutput - The return type for the codeStyleConsistencyChecker function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeStyleConsistencyCheckerInputSchema = z.object({
  codeSample: z
    .string()
    .describe('The code sample to be analyzed for style consistency.'),
  programmingLanguage: z
    .string()
    .describe('The programming language of the code sample.'),
});
export type CodeStyleConsistencyCheckerInput =
  z.infer<typeof CodeStyleConsistencyCheckerInputSchema>;

const CodeStyleConsistencyCheckerOutputSchema = z.object({
  feedback: z.string().describe('Feedback on the code style consistency.'),
});
export type CodeStyleConsistencyCheckerOutput =
  z.infer<typeof CodeStyleConsistencyCheckerOutputSchema>;

export async function codeStyleConsistencyChecker(
  input: CodeStyleConsistencyCheckerInput
): Promise<CodeStyleConsistencyCheckerOutput> {
  return codeStyleConsistencyCheckerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'codeStyleConsistencyCheckerPrompt',
  input: {schema: CodeStyleConsistencyCheckerInputSchema},
  output: {schema: CodeStyleConsistencyCheckerOutputSchema},
  prompt: `You are a coding style expert for {{{programmingLanguage}}}. Analyze the following code sample and provide feedback on its style consistency, readability, and adherence to best practices.\n\nCode Sample:\n\n{{codeSample}}`,
});

const codeStyleConsistencyCheckerFlow = ai.defineFlow(
  {
    name: 'codeStyleConsistencyCheckerFlow',
    inputSchema: CodeStyleConsistencyCheckerInputSchema,
    outputSchema: CodeStyleConsistencyCheckerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
