'use client';

import { useInventory } from '@/features/inventory/hooks/useInventory';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, PackagePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function InventoryPage() {
  const { data: items, isLoading, error } = useInventory();

  if (isLoading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Failed to load inventory.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage your warehouse items, stock levels, and locations.
          </p>
        </div>
        <Button className="gap-2">
          <PackagePlus className="h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items?.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="font-mono text-xs mt-1">
                    {item.sku}
                  </CardDescription>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.status === 'In Stock' ? 'bg-green-100 text-green-700' :
                  item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <div>
                  <p className="text-muted-foreground">Quantity</p>
                  <p className="font-medium">{item.quantity}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{item.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Price</p>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium">{item.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {items?.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center p-8 text-center border rounded-lg bg-slate-50 border-dashed">
            <h3 className="mt-4 text-lg font-semibold">No items found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              You haven't added any inventory items yet.
            </p>
            <Button variant="outline">Add Your First Item</Button>
          </div>
        )}
      </div>
    </div>
  );
}
