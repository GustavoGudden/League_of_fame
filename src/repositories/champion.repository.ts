import { api } from '@/api/api';
import { ChampionType } from '@/common/types/types';

export interface GetAllChamapionData {
  result: Array<ChampionType>;
  total: number;
  error?: string;
}

export const getAllChampion = async (page?: number, limit?: number): Promise<GetAllChamapionData> => {
  try {
    return (await api.get<GetAllChamapionData>(`/champions?page=${page}&limit=${limit}`)).data;
  } catch (error: any) {
    return { result: [], total: 0, error: error.message };
  }
};

export const getPodiumChampions = async () => {
  try {
    return (await api.get<GetAllChamapionData>(`/champions/podium`)).data;
  } catch (error: any) {
    return { result: [], total: 0, error: error.message };
  }
};

export const addLike = async (championId: string) => {
  try {
    return (await api.patch<GetAllChamapionData>(`/champions/${championId}/like`)).data;
  } catch (error: any) {
    return { error: error.message };
  }
};

export const removeLike = async (championId: string) => {
  try {
    return (await api.delete<GetAllChamapionData>(`/champions/${championId}/like`)).data;
  } catch (error: any) {
    return { error: error.message };
  }
};
