import { api } from '@/api/api';
import { ChampionType } from '@/common/types/types';

export interface GetAllChamapionData {
  result: Array<ChampionType>;
  total: number;
  error?: string;
}

export const getAllChampion = async (): Promise<GetAllChamapionData> => {
  try {
    return (await api.get<GetAllChamapionData>('/champions')).data;
  } catch (error: any) {
    return { result: [], total: 0, error: error.message };
  }
};
