"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { codeStyleConsistencyChecker } from "@/ai/flows/code-style-consistency-checker";
import type { CodeStyleConsistencyCheckerInput } from "@/ai/flows/code-style-consistency-checker";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";

const languages = [
  { value: "Kotlin", label: "Kotlin" },
  { value: "Java", label: "Java" },
  { value: "Dart", label: "Dart (Flutter)" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
];

export function CodeStyleChecker() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const { control, handleSubmit, register, formState: { errors } } = useForm<CodeStyleConsistencyCheckerInput>({
    defaultValues: {
      codeSample: "",
      programmingLanguage: "Kotlin",
    },
  });

  const onSubmit = async (data: CodeStyleConsistencyCheckerInput) => {
    setIsLoading(true);
    setFeedback(null);
    try {
      const result = await codeStyleConsistencyChecker(data);
      setFeedback(result.feedback);
    } catch (error) {
      console.error("AI feedback error:", error);
      toast({
        variant: "destructive",
        title: "Error fetching feedback",
        description: "There was an issue communicating with the AI. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3 space-y-2">
                <Label htmlFor="codeSample">Code Snippet</Label>
                <Textarea
                  id="codeSample"
                  placeholder="Paste your code here..."
                  className="font-code h-80 min-h-[20rem] text-sm"
                  {...register("codeSample", { required: "Code sample is required." })}
                />
                {errors.codeSample && <p className="text-sm font-medium text-destructive">{errors.codeSample.message}</p>}
              </div>
              <div className="md:col-span-1 space-y-2">
                <Label htmlFor="programmingLanguage">Language</Label>
                 <Controller
                    name="programmingLanguage"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="programmingLanguage">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.value} value={lang.value}>
                              {lang.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              {isLoading ? "Analyzing..." : "Analyze Code"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {(isLoading || feedback) && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="text-primary h-5 w-5"/>
              AI Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin"/>Generating feedback...</div>}
            {feedback && (
              <pre className="bg-background/50 p-4 rounded-md whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {feedback}
              </pre>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
