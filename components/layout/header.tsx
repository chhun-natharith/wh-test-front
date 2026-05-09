'use client';

import { useRouter } from 'next/navigation';
import { User, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    if (session) {
      try {
        const user = JSON.parse(session);
        if (user.name) setUserName(user.name);
      } catch (e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_session');
    router.push('/login');
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm font-medium text-slate-700">
          Welcome, {userName}
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-slate-100">
          <User className="h-5 w-5 text-slate-600" />
        </Button>
        <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
