/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function LoginPageClient() {
  const router = useRouter();

  useEffect(() => {
    // 直接重定向到首页
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">跳转中...</p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPageClient />
    </Suspense>
  );
}
