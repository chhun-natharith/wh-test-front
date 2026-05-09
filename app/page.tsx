import Link from 'next/link';
import { ArrowRight, Package, ShieldCheck, Clock, FileText, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <Package className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">WH Inventory</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 md:px-8 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Smarter Warehouse Management
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Control your inventory with <span className="text-primary">absolute precision.</span>
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground">
              A complete ecosystem for modern warehouses. Track purchase orders, monitor stock levels, manage billing, and receive expiry alerts all in one unified dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/login">
                <Button size="lg" className="h-12 px-8 text-base gap-2">
                  Login to Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powerful features designed specifically for warehouse managers and accounts teams.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Inventory Management', desc: 'Real-time tracking of goods in and out with exact location mapping.', icon: Package },
                { title: 'Billing System', desc: 'Manage supplier invoices and internal team allocations seamlessly.', icon: FileText },
                { title: 'Expiry Alerts', desc: 'Never let stock go to waste with automated near-expiry warnings.', icon: Clock },
                { title: 'Purchase Tracking', desc: 'Follow PO timelines from supplier dispatch to warehouse receiving.', icon: ShieldCheck },
                { title: 'Smart Notifications', desc: 'Instant alerts for low stock thresholds and critical system updates.', icon: Bell },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all">
                  <div className="p-3 bg-white rounded-lg shadow-sm border mb-4 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 sm:text-4xl">
              Ready to manage your warehouse smarter?
            </h2>
            <Link href="/login">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                Login Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 md:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WH Inventory System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
