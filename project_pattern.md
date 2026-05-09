# Warehouse Management System — Frontend Architecture

## Frontend Stack

### Core

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- ShadCN/UI

### State & Data

- Zustand → global UI/app state
- React Query → server state & caching

### Authentication

- NextAuth.js
- Laravel Sanctum backend provider

---

# Project Structure

```bash
src/
├── app/
│   ├── (public)/
│   │   └── page.tsx
│   │
│   ├── admin/
│   ├── warehouse/
│   ├── accounts/
│   ├── auth/
│   │   └── login/
│   │
│   ├── api/
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   ├── layouts/
│   ├── sidebar/
│   ├── navbar/
│   ├── notifications/
│   └── tables/
│
├── features/
│   ├── inventory/
│   ├── purchase/
│   ├── expiry/
│   ├── alerts/
│   ├── billing/
│   └── auth/
│
├── services/
├── stores/
├── hooks/
├── providers/
├── types/
├── constants/
├── lib/
└── middleware.ts
```

---

# Landing Page (/)

Public page — no authentication required.

## Sections

### 1. Hero Section

Purpose:

- Explain warehouse system value
- Strong CTA button

### Content

- Headline
- Short description
- CTA:
  - Login
  - Get Started

---

### 2. Features Section

Cards:

- Inventory Management
- Billing System
- Expiry Alerts
- Purchase Tracking
- Notifications

---

### 3. CTA Strip

Simple conversion section.

Example:

```txt
Ready to manage your warehouse smarter?
[ Login Now ]
```

---

# Authentication Flow

## Stack

- NextAuth.js
- Laravel Sanctum

---

# Login Flow

```txt
Frontend Login Form
    ↓
NextAuth Credentials Provider
    ↓
Laravel Sanctum API
    ↓
Receive user + role
    ↓
Store JWT/session
```

---

# Session Structure

```ts
session.user = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "warehouse" | "accounts";
};
```

---

# Middleware Role Protection

## middleware.ts

Purpose:

- Read role from session/JWT
- Redirect unauthorized users

---

# Role Access Rules

| Role              | Dashboard Prefix | Blocked From   |
| ----------------- | ---------------- | -------------- |
| Super admin       | `/admin/*`       | Nothing        |
| Warehouse manager | `/warehouse/*`   | `/accounts/*`  |
| Accounts          | `/accounts/*`    | `/warehouse/*` |

---

# Middleware Logic Example

```ts
if (role === 'warehouse' && pathname.startsWith('/accounts')) {
  return redirect('/warehouse');
}
```

---

# Warehouse Module (/warehouse/\*)

## 1. Inventory In/Out

### Features

- Stock movement table
- Create inventory records
- IN / OUT status
- Quantity adjustment

### UI

- Data table
- Modal form
- Status badge
- Filters

---

## 2. Purchase Tracking

### Features

- Purchase order list
- PO status timeline
- Supplier details
- Received tracking

### UI

- Timeline component
- Expandable rows
- Status color indicators

---

## 3. Goods Expiry

### Features

- Expiry monitoring
- Near-expiry warnings
- Calendar/table view

### UI

- Red highlight for urgent items
- Expiry badge
- Date filters

---

## 4. Low Stock Alerts

### Features

- Threshold configuration
- Alert cards
- Notification integration

### UI

- Dashboard summary card
- Notification badge
- Warning indicators

---

# Accounts Module (/accounts/\*)

## 1. Supplier Billing

### Features

- Supplier invoices
- Billing records
- PDF export

### UI

- Invoice table
- Export button
- Billing status

---

## 2. Stock-Out Billing

### Features

- Billing for dispatched stock
- Linked inventory records
- Billing history

---

## 3. Internal Team Billing

### Features

- Department cost allocation
- Internal expense tracking
- Monthly summaries

---

# Shared Features (All Roles)

## Notification Bell

### Notifications

- Low stock
- Expiry warnings
- Purchase updates

### UI

- Navbar bell icon
- Unread badge
- Dropdown panel

---

# Profile Settings

### Features

- Update profile
- Change password
- Logout

---

# Sidebar Navigation

Responsive sidebar navigation.

## Rules

- Render links based on role
- Hide unauthorized menus

---

# Example Sidebar Logic

```ts
const warehouseMenus = [
  '/warehouse/inventory',
  '/warehouse/purchase',
  '/warehouse/alerts',
];
```

---

# State Management

## Zustand

Use for:

- Sidebar state
- Theme
- Auth session cache
- Notifications UI state

---

# React Query

Use for:

- API fetching
- Cache
- Refetching
- Mutation handling

---

# Recommended Folder by Feature

Example:

```bash
features/
└── inventory/
    ├── api/
    ├── components/
    ├── hooks/
    ├── schemas/
    ├── types/
    └── pages/
```

---

# Suggested UI Components

## Shared

- DataTable
- ConfirmDialog
- StatusBadge
- EmptyState
- LoadingSkeleton

## Warehouse

- InventoryCard
- POStatusTimeline
- ExpiryBadge

## Accounts

- InvoicePreview
- BillingSummaryCard

---

# Responsive Design Rules

## Mobile

- Collapsible sidebar
- Drawer navigation
- Compact tables

## Desktop

- Fixed sidebar
- Full dashboard layout

---

# Recommended Development Order

## Phase 1

- Bootstrap project
- Tailwind
- ShadCN
- Layouts
- Sidebar/Navbar

---

## Phase 2

- Auth + middleware
- Role protection
- Session handling

---

## Phase 3

- Warehouse module

---

## Phase 4

- Accounts module

---

## Phase 5

- Notifications
- Shared components

---

## Phase 6

- Dashboard analytics
- Charts
- Reports

---

# Main Architecture Goal

- Modular frontend structure
- Clean role-based routing
- Reusable feature-driven architecture
- API-ready scalability
- Responsive management dashboard
- Easy Laravel integration
