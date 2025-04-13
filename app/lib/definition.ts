export interface Pokemon {
  name: string;
  id: string;
  imageUrl: string;
  types: string[];
  height?: number;
  weight?: number;
  weaknesses: string[];
  stats: { stat_name: string; base_stat: number }[];
}
