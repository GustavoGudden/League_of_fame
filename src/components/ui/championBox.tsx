import { delaGothicOne } from '@/app/layout';
import { ChampionType } from '@/common/types/types';
import Image from 'next/image';
import { ComponentProps, useState } from 'react';

interface IChampionBoxProps extends ComponentProps<'div'> {
  champInfo: ChampionType;
  handleAddLike: (championId: string) => void;
  handleRemoveLike: (chapionId: string) => void;
}

export function ChampionBox({ champInfo, handleAddLike, handleRemoveLike, ...rest }: IChampionBoxProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    if (isLiked) {
      handleRemoveLike(champInfo.id);
    } else {
      handleAddLike(champInfo.id);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={handleClick}
      style={{ border: `1px solid ${champInfo.color}` }}
      className={`relative flex h-[100px] w-[165px] flex-col overflow-hidden rounded-[10px] `}
    >
      <div style={{ backgroundColor: champInfo.color }} className="absolute left-0 top-0 h-full w-full opacity-[20%] " />
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champInfo.id}_0.jpg`}
        className={`absolute  z-0 h-full w-auto opacity-[${isLiked ? '100%' : '10%'}]`}
        alt="champ image"
        width={165}
        height={200}
      />
      <div className="z-1 relative flex flex-1 flex-col justify-end gap-[-6px] p-[10px]">
        <h1 className={`w-[132px] break-all text-2xl font-normal leading-[86.6%] text-white ${delaGothicOne.className}`}>{champInfo.name}</h1>
        <p className="text-[10px] font-normal text-white">{champInfo.title}</p>
      </div>
      <div className="absolute right-[10px] top-[10px] flex h-[40px] w-[40px] justify-end overflow-hidden rounded-lg">
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champInfo.id}.png`}
          className={`h-full w-auto`}
          alt="champ image"
          width={40}
          height={40}
        />
      </div>
      {isLiked ? (
        <div className="z-1 relative flex h-[25px] w-full items-center justify-center gap-[5px] bg-gold  transition-[2sec] ">
          <Image src={'/star_icon.png'} alt="estrela" width={10} height={10} />
          <h1 className="text-[10px] font-black">ESSE É O MELHOR CAMPEÃO</h1>
        </div>
      ) : undefined}
    </div>
  );
}
