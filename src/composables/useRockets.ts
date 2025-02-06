import { useQuery } from '@tanstack/vue-query';
import { fetchRockets } from '../services/rocketService';

export const useRockets = () => {
  return useQuery({
    queryKey: ['rockets'],
    queryFn: fetchRockets,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
