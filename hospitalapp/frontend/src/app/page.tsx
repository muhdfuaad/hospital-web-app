// app/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login'); // or /dashboard if user is already logged in
  }, [router]);

  return null; // no UI, just redirect
}
