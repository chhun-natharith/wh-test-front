import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function StockOutBillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stock-Out Billing</h1>
        <p className="text-sm text-muted-foreground">
          Billing records for all dispatched and shipped inventory.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Dispatch Records
          </CardTitle>
          <CardDescription>
            Linked inventory records and billing history for stock-out movements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed text-muted-foreground">
            Stock-Out Billing Module Coming Soon
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
