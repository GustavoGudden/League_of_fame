export type ChampionType = {
  name: string;
  id: string;
  title: string;
  color: string;
  roles: Array<'Tank' | 'Support' | 'Assassin' | 'Mage' | 'Marksman' | 'Fighter'>;
  likes: number;
};
