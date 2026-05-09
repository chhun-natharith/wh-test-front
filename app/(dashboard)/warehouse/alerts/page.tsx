import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell } from 'lucide-react';

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Low Stock Alerts</h1>
        <p className="text-sm text-muted-foreground">
          Configure thresholds and view critical stock warnings.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-red-500" />
            System Alerts
          </CardTitle>
          <CardDescription>
            This module will contain threshold configurations and alert cards.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed text-muted-foreground">
            Alerts Module Coming Soon
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
