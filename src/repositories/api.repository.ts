import { api } from '@/api/api';

export const apiHook = () => {
  const giveLike = async () => {
    const { data } = await api.get('/riot/champions');
    const dataArray = Array.from(Object.values(data.data));
    return dataArray;
  };

  const deleteLike = async () => {
    const { data } = await api.get('/riot/champions');
    const dataArray = Array.from(Object.values(data.data));
    return dataArray;
  };

  return [giveLike, deleteLike];
};
