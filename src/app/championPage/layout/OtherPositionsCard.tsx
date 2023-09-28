import { delaGothicOne } from '@/app/layout';
import { ChampionType } from '@/common/types/types';
import Image from 'next/image';

interface IPodiumCardProps {
  position: number;
  podiumChampion: ChampionType;
}

export function OtherPositionsCard({ position, podiumChampion }: IPodiumCardProps) {
  return (
    <div className=" flex h-[50px] items-center justify-between rounded-[7px] bg-neutral-50 px-[20px] ">
      <div className="items-baselined flex items-center gap-[20px]">
        <h1 className="text-[12px] font-medium text-neutral-100">{position}</h1>
        <div className="flex h-full gap-[10px] ">
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${podiumChampion.id}.png`}
            alt="icon champion"
            width={30}
            height={30}
          />
          <h1 className={`${delaGothicOne.className} text-[16px] font-normal`}>{podiumChampion.name}</h1>
        </div>
      </div>
      <h1 className="text-[15px] font-black">{podiumChampion.likes}</h1>
    </div>
  );
}
