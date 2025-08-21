'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPageGuard({ userToken }) {
  const router = useRouter();

  useEffect(() => {
    if (userToken) {
      router.replace('/'); // redirect if already logged in
    }
  }, [userToken, router]);

  return null;
}
