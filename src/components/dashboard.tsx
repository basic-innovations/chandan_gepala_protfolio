'use client';

import { useCollection } from '@/firebase/firestore/use-collection';
import { useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { format } from 'date-fns';

type Submission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submissionDate: {
    seconds: number;
    nanoseconds: number;
  } | null;
};

export function Dashboard() {
  const firestore = useFirestore();

  const submissionsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'contactFormSubmissions'), orderBy('submissionDate', 'desc'));
  }, [firestore]);

  const { data: submissions, isLoading, error } = useCollection<Submission>(submissionsQuery);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load messages. Please ensure you have the correct permissions.
        </AlertDescription>
      </Alert>
    );
  }
  
  if (!submissions || submissions.length === 0) {
      return (
          <Card>
              <CardHeader>
                  <CardTitle>Contact Messages</CardTitle>
                  <CardDescription>A list of messages sent through the contact form.</CardDescription>
              </CardHeader>
              <div className="p-6 text-center text-muted-foreground">
                  No messages found.
              </div>
          </Card>
      )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Messages</CardTitle>
        <CardDescription>A list of messages sent through the contact form.</CardDescription>
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>
                {submission.submissionDate
                  ? format(new Date(submission.submissionDate.seconds * 1000), "PPP p")
                  : 'N/A'}
              </TableCell>
              <TableCell>{submission.name}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell>{submission.subject}</TableCell>
              <TableCell className="max-w-xs truncate">{submission.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
