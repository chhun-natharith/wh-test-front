import React from 'react';

export function InventoryList() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Current Inventory</h3>
      <div className="border rounded-md p-4">
        {/* Table placeholder */}
        <p className="text-sm text-muted-foreground">Inventory items will appear here.</p>
      </div>
    </div>
  );
}
