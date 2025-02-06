import { useQuery } from '@tanstack/vue-query';
import { fetchRocketById } from '../services/rocketService';

export const useRocket = (id: string) => {
  return useQuery({
    queryKey: ['rocket', id],
    queryFn: () => fetchRocketById(id),
    enabled: !!id, // Prevents execution if id is missing
    retry: 2,
  });
};
