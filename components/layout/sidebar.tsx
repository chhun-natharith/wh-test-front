'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Bell, 
  CreditCard, 
  MessageSquare,
  Settings,
  ShieldCheck,
  Clock,
  FileText
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define master list of nav items with required prefix
const allNavItems = [
  // Super Admin only example
  { name: 'Admin Dashboard', href: '/admin', icon: ShieldCheck, prefix: '/admin' },
  
  // Warehouse menus
  { name: 'Warehouse Dashboard', href: '/warehouse', icon: LayoutDashboard, prefix: '/warehouse' },
  { name: 'Inventory In/Out', href: '/warehouse/inventory', icon: Package, prefix: '/warehouse' },
  { name: 'Purchase Tracking', href: '/warehouse/purchase', icon: ShoppingCart, prefix: '/warehouse' },
  { name: 'Goods Expiry', href: '/warehouse/expiry', icon: Clock, prefix: '/warehouse' },
  { name: 'Low Stock Alerts', href: '/warehouse/alerts', icon: Bell, prefix: '/warehouse' },
  { name: 'Notifications', href: '/warehouse/notifications', icon: MessageSquare, prefix: '/warehouse' },
  
  // Accounts menus
  { name: 'Accounts Dashboard', href: '/accounts', icon: LayoutDashboard, prefix: '/accounts' },
  { name: 'Supplier Billing', href: '/accounts/supplier-billing', icon: FileText, prefix: '/accounts' },
  { name: 'Stock-Out Billing', href: '/accounts/stock-out-billing', icon: CreditCard, prefix: '/accounts' },
  { name: 'Internal Billing', href: '/accounts/internal-billing', icon: CreditCard, prefix: '/accounts' },
  { name: 'Notifications', href: '/accounts/notifications', icon: MessageSquare, prefix: '/accounts' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('user_session');
    if (session) {
      try {
        const user = JSON.parse(session);
        setRole(user.role);
      } catch (e) {}
    }
  }, []);

  // Filter items based on the user's role prefix
  const allowedPrefix = role === 'super_admin' ? '/admin' : 
                        role === 'warehouse_manager' ? '/warehouse' : 
                        role === 'accounts' ? '/accounts' : '';

  const visibleNavItems = role === 'super_admin' 
    ? allNavItems // Admin sees everything? Or just admin stuff? The spec says "Super admin: /admin/*". We'll let them see everything for now or just admin prefix. Let's stick to prefix.
    : allNavItems.filter(item => item.prefix === allowedPrefix);

  const finalNavItems = role === 'super_admin' ? allNavItems : visibleNavItems;

  return (
    <aside className="w-64 border-r bg-slate-50/50 min-h-screen hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary mr-3">
          <Package className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg tracking-tight">WH Inventory</span>
      </div>
      
      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
          Main Menu
        </div>
        <nav className="space-y-1">
          {finalNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t">
        <Link
          href={`${allowedPrefix}/settings`}
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-slate-100 hover:text-slate-900 transition-colors"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
