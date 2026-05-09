'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export function RoleGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    
    if (!session) {
      router.push('/login');
      return;
    }

    try {
      const user = JSON.parse(session);
      const role = user.role;

      // Role-based path protection logic mimicking middleware.ts
      if (pathname.startsWith('/admin') && role !== 'super_admin') {
        router.push(role === 'warehouse_manager' ? '/warehouse' : '/accounts');
        return;
      }

      if (pathname.startsWith('/warehouse') && !['super_admin', 'warehouse_manager'].includes(role)) {
        router.push(role === 'accounts' ? '/accounts' : '/login');
        return;
      }

      if (pathname.startsWith('/accounts') && !['super_admin', 'accounts'].includes(role)) {
        router.push(role === 'warehouse_manager' ? '/warehouse' : '/login');
        return;
      }

      setIsAuthorized(true);
    } catch (e) {
      router.push('/login');
    }
  }, [pathname, router]);

  if (!isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return <>{children}</>;
}
