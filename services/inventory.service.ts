import { LocalDB } from '@/lib/local-db';
import { InventoryItem, CreateInventoryDto } from '@/models/inventory';

// Create a LocalStorage DB instance specifically for inventory
const inventoryDb = new LocalDB<InventoryItem>('wh_inventory_items');

// Pre-populate some dummy data if it's empty
const seedData = async () => {
  const items = await inventoryDb.getAll();
  if (items.length === 0) {
    await inventoryDb.create({
      sku: 'BOX-001',
      name: 'Standard Packing Box',
      category: 'Packaging',
      quantity: 500,
      status: 'In Stock',
      location: 'Aisle 1, Rack A',
      price: 1.50
    });
    await inventoryDb.create({
      sku: 'TAPE-001',
      name: 'Heavy Duty Packaging Tape',
      category: 'Packaging',
      quantity: 12,
      status: 'Low Stock',
      location: 'Aisle 1, Rack B',
      price: 3.00
    });
  }
};

// Fire and forget seed
if (typeof window !== 'undefined') {
  seedData();
}

export const inventoryService = {
  getAll: () => inventoryDb.getAll(),
  getById: (id: string) => inventoryDb.getById(id),
  create: (data: CreateInventoryDto) => inventoryDb.create(data),
  update: (id: string, data: Partial<InventoryItem>) => inventoryDb.update(id, data),
  delete: (id: string) => inventoryDb.delete(id),
};
