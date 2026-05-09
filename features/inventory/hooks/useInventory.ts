import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { inventoryService } from '@/services/inventory.service';
import { CreateInventoryDto } from '@/models/inventory';

export const INVENTORY_KEYS = {
  all: ['inventory'] as const,
  detail: (id: string) => [...INVENTORY_KEYS.all, id] as const,
};

export function useInventory() {
  return useQuery({
    queryKey: INVENTORY_KEYS.all,
    queryFn: () => inventoryService.getAll(),
  });
}

export function useCreateInventory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateInventoryDto) => inventoryService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: INVENTORY_KEYS.all });
    },
  });
}
