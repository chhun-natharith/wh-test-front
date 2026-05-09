'use client';

import { useBillings } from '@/hooks/use-features';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Loader2, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SupplierBillingPage() {
  const { data: billings, isLoading } = useBillings('Supplier');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Supplier Billing</h1>
          <p className="text-sm text-muted-foreground">
            Manage and track all supplier invoices and billing records.
          </p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export All
        </Button>
      </div>

      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-4">
          {billings?.map((bill) => (
            <Card key={bill.id}>
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <FileText className="h-6 w-6 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-bold">{bill.invoiceNumber}</p>
                      <p className="text-sm text-muted-foreground">{bill.partyName}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-lg font-bold">${bill.amount.toLocaleString()}</p>
                    <Badge variant={bill.status === 'Paid' ? 'secondary' : 'outline'}>
                      {bill.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
