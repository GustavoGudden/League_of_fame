import { ComponentProps } from 'react';
import { Assasins, Fighters, Mage, Marskman, Support, Tank } from '../../../public/images/roles';

interface IIconRole {
  tag: string;
  size: number;
}

export function IconRoleComponent({ tag, size }: IIconRole) {
  const getIconRole = (tag: string, size: number): React.ReactNode => {
    switch (tag) {
      case 'Assassin':
        return <Assasins fill={'#FFF'} size={size} />;
      case 'Mage':
        return <Mage fill={'#FFF'} size={size} />;
      case 'Fighter':
        return <Fighters fill={'#FFF'} size={size} />;
      case 'Tank':
        return <Tank fill={'#FFF'} size={size} />;
      case 'Marksman':
        return <Marskman fill={'#FFF'} size={size} />;
      case 'Support':
        return <Support fill={'#FFF'} size={size} />;
    }
  };

  return getIconRole(tag, size);
}
