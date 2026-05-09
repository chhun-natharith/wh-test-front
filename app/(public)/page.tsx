import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Package, ShoppingCart, AlertCircle, FileText, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      title: "Inventory tracking",
      description: "Real-time visibility into stock levels across all your warehouse locations.",
      icon: <Package className="h-10 w-10 text-primary" />,
    },
    {
      title: "Purchase orders",
      description: "Streamline your procurement process with automated purchase order generation.",
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Expiry alerts",
      description: "Never lose stock to expiry again with proactive notifications and monitoring.",
      icon: <AlertCircle className="h-10 w-10 text-primary" />,
    },
    {
      title: "Billing & invoices",
      description: "Automate your financial workflows and manage invoices with ease.",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-background border-b">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Manage your warehouse. <span className="text-primary">Know your numbers.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The all-in-one inventory management system designed for speed, accuracy, and growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="px-8 h-12 text-base">
              <Link href="/login">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base">
              <Link href="#features">See features ↓</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section id="features" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Strip */}
      <section className="py-16 px-4 bg-secondary border-t">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl font-bold text-secondary-foreground">
            Ready to get started?
          </h2>
          <Button asChild size="lg" variant="default" className="px-8 h-12 text-base">
            <Link href="/login">
              Log in to your dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer (Optional, adding simple one) */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-background">
        &copy; {new Date().getFullYear()} WH Inventory Management System. All rights reserved.
      </footer>
    </div>
  );
}
