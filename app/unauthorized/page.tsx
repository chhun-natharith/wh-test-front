import React from 'react';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-destructive">403 - Unauthorized</h1>
      <p className="mt-4 text-xl text-muted-foreground">You do not have permission to access this page.</p>
      <Link href="/" className="mt-8 text-primary hover:underline">
        Go back home
      </Link>
    </div>
  );
}
