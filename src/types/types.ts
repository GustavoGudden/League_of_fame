export type ChampInfoType = {
  name: string;
  title: string;
  icon: string;
  backgroundColor: string;
  backgroundImage: string;
  banner: string;
  role: Array<'tank' | 'support' | 'assasin' | 'mage' | 'shooter' | 'fighter'>;
  likes: number;
};
