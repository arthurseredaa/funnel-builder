import { auth } from '@clerk/nextjs/server';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col items-center justify-between p-24 min-h-[calc(100vh-80px)] box-border">
      <h1 className="text-center font-bold uppercase">
        The progressive tool that let you <br /> generate more revenue
      </h1>
      <Button asChild>
        {userId ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/sign-up">
            Sign up
            <LogIn className="ml-1" />
          </Link>
        )}
      </Button>
    </main>
  );
}
