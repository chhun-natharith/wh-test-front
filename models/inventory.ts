export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  quantity: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  location: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateInventoryDto = Omit<InventoryItem, 'id' | 'createdAt' | 'updatedAt'>;
