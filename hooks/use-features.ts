import { useQuery } from '@tanstack/react-query';
import { purchaseService, expiryService, billingService, notificationService } from '@/services/all-features.service';

export function usePurchases() {
  return useQuery({
    queryKey: ['purchases'],
    queryFn: () => purchaseService.getAll(),
  });
}

export function useExpiries() {
  return useQuery({
    queryKey: ['expiries'],
    queryFn: () => expiryService.getAll(),
  });
}

export function useBillings(type?: 'Supplier' | 'Stock-Out' | 'Internal') {
  return useQuery({
    queryKey: ['billings', type],
    queryFn: async () => {
      const all = await billingService.getAll();
      return type ? all.filter(b => b.type === type) : all;
    },
  });
}

export function useNotifications() {
  return useQuery({
    queryKey: ['notifications'],
    queryFn: () => notificationService.getAll(),
  });
}
