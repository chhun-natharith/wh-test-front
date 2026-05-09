'use client';

import { useNotifications } from '@/hooks/use-features';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Loader2, Bell, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function NotificationsPage() {
  const { data: notifications, isLoading } = useNotifications();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-sm text-muted-foreground">
          View all system and user notifications.
        </p>
      </div>

      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="space-y-4">
          {notifications?.map((notif) => (
            <Card key={notif.id} className={cn(!notif.read && "border-l-4 border-l-primary")}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className={cn(
                  "p-2 rounded-full mt-1",
                  notif.type === 'warning' ? "bg-orange-100 text-orange-600" :
                  notif.type === 'error' ? "bg-red-100 text-red-600" :
                  notif.type === 'success' ? "bg-green-100 text-green-600" :
                  "bg-blue-100 text-blue-600"
                )}>
                  {notif.type === 'warning' ? <AlertCircle className="h-4 w-4" /> :
                   notif.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> :
                   <Bell className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">{notif.title}</p>
                    <p className="text-xs text-muted-foreground">{new Date(notif.createdAt).toLocaleDateString()}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
