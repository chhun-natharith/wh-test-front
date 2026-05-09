'use client';

import { usePurchases } from '@/hooks/use-features';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ShoppingCart, Loader2, Calendar, Package } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export default function PurchaseTrackingPage() {
  const { data: purchases, isLoading } = usePurchases();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Purchase Tracking</h1>
        <p className="text-sm text-muted-foreground">
          Track purchase orders from supplier dispatch to warehouse receiving.
        </p>
      </div>

      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-4">
          {purchases?.map((po) => (
            <Card key={po.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{po.poNumber}</CardTitle>
                  <CardDescription>{po.supplier}</CardDescription>
                </div>
                <Badge
                  variant={po.status === 'Received' ? 'secondary' : 'default'}>
                  {po.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    {po.itemsCount} items
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Expected: {po.expectedDate}
                  </div>
                  <div className="font-medium text-slate-900 ml-auto">
                    ${po.totalAmount.toLocaleString()}
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
