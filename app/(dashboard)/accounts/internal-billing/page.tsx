import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

export default function InternalBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Internal Billing</h1>
        <p className="text-sm text-muted-foreground">
          Department-wise cost allocation and expense tracking.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Cost Summaries
          </CardTitle>
          <CardDescription>
            Monthly internal billing summaries and department allocation data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed text-muted-foreground">
            Internal Billing Module Coming Soon
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
