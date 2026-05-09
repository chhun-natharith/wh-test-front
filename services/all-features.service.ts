import { LocalDB } from '@/lib/local-db';
import { PurchaseOrder, ExpiryItem, BillingRecord, Notification } from '@/models/all-features';

// Services
export const purchaseService = new LocalDB<PurchaseOrder>('wh_purchase_orders');
export const expiryService = new LocalDB<ExpiryItem>('wh_expiry_items');
export const billingService = new LocalDB<BillingRecord>('wh_billing_records');
export const notificationService = new LocalDB<Notification>('wh_notifications');

// Seed Data
const seedAllData = async () => {
  // Seed Purchase Orders
  const pos = await purchaseService.getAll();
  if (pos.length === 0) {
    await purchaseService.create({ poNumber: 'PO-2024-001', supplier: 'Global Logistics', status: 'In Transit', totalAmount: 12500, expectedDate: '2024-05-15', itemsCount: 45 });
    await purchaseService.create({ poNumber: 'PO-2024-002', supplier: 'Tech Parts Inc', status: 'Pending', totalAmount: 8400, expectedDate: '2024-05-20', itemsCount: 12 });
  }

  // Seed Expiry Items
  const expiries = await expiryService.getAll();
  if (expiries.length === 0) {
    await expiryService.create({ itemName: 'Organic Fertilizer', sku: 'FERT-01', expiryDate: '2024-06-01', daysRemaining: 22, status: 'Near Expiry', quantity: 150 });
    await expiryService.create({ itemName: 'Protective Gear', sku: 'GEAR-99', expiryDate: '2025-12-31', daysRemaining: 500, status: 'Safe', quantity: 300 });
  }

  // Seed Billing Records
  const billings = await billingService.getAll();
  if (billings.length === 0) {
    await billingService.create({ invoiceNumber: 'INV-001', partyName: 'Fast Shipping Co', type: 'Supplier', amount: 3200, status: 'Paid', date: '2024-05-01' });
    await billingService.create({ invoiceNumber: 'BILL-45', partyName: 'Production Dept', type: 'Internal', amount: 1200, status: 'Pending', date: '2024-05-08' });
  }

  // Seed Notifications
  const notifications = await notificationService.getAll();
  if (notifications.length === 0) {
    await notificationService.create({ title: 'Low Stock Alert', message: 'Heavy Duty Tape is below threshold.', type: 'warning', read: false, createdAt: new Date().toISOString() });
    await notificationService.create({ title: 'New PO Created', message: 'PO-2024-001 has been dispatched.', type: 'info', read: true, createdAt: new Date().toISOString() });
  }
};

if (typeof window !== 'undefined') {
  seedAllData();
}
