# WH Inventory Management System

Next.js 14 App Router project setup with TypeScript, Tailwind CSS, ShadCN/UI, Zustand, React Query, and NextAuth.js.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + ShadCN UI (New York style)
- **State Management:** Zustand (Global), React Query v5 (Server)
- **Authentication:** NextAuth.js v5 (Beta)
- **API Client:** Axios

## Project Structure
- `app/`: Routing and pages
  - `(public)`: Publicly accessible pages (Landing)
  - `(auth)`: Authentication pages (Login)
  - `(dashboard)`: Protected dashboard routes
  - `api/auth`: NextAuth route handlers
- `components/`: Reusable components
  - `ui`: ShadCN UI components
  - `layout`: Sidebar, Header, etc.
  - `warehouse`, `accounts`: Feature-specific components
- `lib/`: Utilities and configuration
  - `api.ts`: Axios instance
  - `auth.ts`: NextAuth config
  - `store/`: Zustand stores
  - `hooks/`: Custom hooks (React Query)
- `types/`: TypeScript definitions

## Getting Started
1. Install dependencies: `npm install`
2. Set environment variables in `.env.local`:
   - `NEXT_PUBLIC_API_URL`
   - `AUTH_SECRET`
3. Run dev server: `npm run dev`
