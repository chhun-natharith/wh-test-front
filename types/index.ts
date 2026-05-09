import "next-auth"
import "next-auth/jwt"

export type UserRole = "super_admin" | "warehouse_manager" | "accounts";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthUser extends User {
  accessToken: string;
}

export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  quantity: number;
  location: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  status: 'PENDING' | 'PAID' | 'OVERDUE';
  dueDate: string;
}

declare module "next-auth" {
  interface Session {
    user: User & {
      accessToken: string;
    }
  }

  interface User {
    role: UserRole;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
    accessToken: string;
  }
}
