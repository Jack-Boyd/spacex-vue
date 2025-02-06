import api from './api';

// TypeScript interface for a Rocket (optional but recommended)
export interface Rocket {
  id: string;
  name: string;
  description: string;
  first_flight: string;
  active: boolean;
  flickr_images: string[];
  cost_per_launch: number;
  success_rate_pct: number;
  country: string;
  company: string;
}

// Fetch all rockets
export const fetchRockets = async (): Promise<Rocket[]> => {
  const response = await api.get('/rockets');
  return response.data;
};
