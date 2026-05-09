'use client';

import { useExpiries } from '@/hooks/use-features';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Loader2, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function GoodsExpiryPage() {
  const { data: items, isLoading } = useExpiries();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Goods Expiry</h1>
        <p className="text-sm text-muted-foreground">
          Monitor near-expiry items and prevent stock waste.
        </p>
      </div>

      {isLoading ? (
        <div className="flex h-40 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items?.map((item) => (
            <Card key={item.id} className={item.status === 'Near Expiry' ? 'border-orange-200 bg-orange-50/20' : ''}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.itemName}</CardTitle>
                    <CardDescription>{item.sku}</CardDescription>
                  </div>
                  <Badge variant={item.status === 'Safe' ? 'secondary' : 'destructive'}>
                    {item.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase">Expiry Date</p>
                    <p className="font-semibold text-red-600">{item.expiryDate}</p>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-xs text-muted-foreground uppercase">Remaining</p>
                    <p className="font-semibold">{item.daysRemaining} Days</p>
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
