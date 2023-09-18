type ChampionAtributes = {
  name: string;
  title: string;
  icon: string;
  backgroundColor: string;
  backgroundImage: string;
  banner: string;
  role: Array<'tank' | 'support' | 'assasin' | 'mage' | 'shooter' | 'fighter'>;
  likes: number;
};

export class ChampionModel {
  name: string;
  title: string;
  icon: string;
  backgroundColor: string;
  backgroundImage: string;
  banner: string;
  role: Array<'tank' | 'support' | 'assasin' | 'mage' | 'shooter' | 'fighter'>;
  likes: number;

  constructor(championAtributes: ChampionAtributes) {
    this.name = championAtributes.name;
    this.title = championAtributes.title;
    this.icon = championAtributes.icon;
    this.backgroundColor = championAtributes.backgroundColor;
    this.backgroundImage = championAtributes.backgroundImage;
    this.banner = championAtributes.banner;
    this.role = championAtributes.role;
    this.likes = championAtributes.likes;
  }
}
