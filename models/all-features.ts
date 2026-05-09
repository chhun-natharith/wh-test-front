export interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplier: string;
  status: 'Pending' | 'In Transit' | 'Received' | 'Cancelled';
  totalAmount: number;
  expectedDate: string;
  itemsCount: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ExpiryItem {
  id: string;
  itemName: string;
  sku: string;
  expiryDate: string;
  daysRemaining: number;
  status: 'Safe' | 'Near Expiry' | 'Expired';
  quantity: number;
}

export interface BillingRecord {
  id: string;
  invoiceNumber: string;
  partyName: string;
  type: 'Supplier' | 'Stock-Out' | 'Internal';
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
}
