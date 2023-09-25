import { ComponentProps } from 'react';
import { Assasins, Fighters, Mage, Marskman, Support, Tank } from '../../../public/images/roles';
import { RoleName } from '@/common/data/data-roles';

interface ICategoryBoxProps extends ComponentProps<'div'> {
  tag: RoleName['name'];
  isSelect: boolean;
}

export function CategoryBox({ tag, isSelect, ...rest }: ICategoryBoxProps) {
  const getIconRole = (tag: RoleName['name']): React.ReactNode => {
    switch (tag) {
      case 'Assassin':
        return <Assasins fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
      case 'Mage':
        return <Mage fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
      case 'Fighter':
        return <Fighters fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
      case 'Tank':
        return <Tank fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
      case 'Marksman':
        return <Marskman fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
      case 'Support':
        return <Support fill={isSelect ? '#FFF' : '#B8B8B8'} size={16} />;
    }
  };

  return (
    <div
      className={`flex h-full w-[35px] cursor-pointer items-center justify-center rounded-[7px] border ${
        isSelect ? 'border-white' : 'border-neutral-100'
      } bg-neutral-50 `}
      {...rest}
    >
      {getIconRole(tag)}
    </div>
  );
}
