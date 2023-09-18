import { delaGothicOne } from '@/app/layout';
import { ChampionModel } from '@/models/champion.model';
import Image from 'next/image';

interface IChampionBoxProps {
  champInfo: ChampionModel;
}

export function ChampionBox({ champInfo }: IChampionBoxProps) {
  return (
    <div style={{ backgroundColor: champInfo.backgroundColor }} className={`relative flex h-[100px] w-[165px] rounded-[10px] `}>
      <Image src={champInfo.backgroundImage} className="absolute z-0 opacity-[10%]" alt="champ image" width={165} height={100} />
      <div className="flex flex-1 flex-col justify-end gap-[-6px] p-[10px]">
        <h1 className={`w-[132px] break-all text-2xl font-normal leading-[86.6%] text-white ${delaGothicOne.className}`}>{champInfo.name}</h1>
        <p className="text-[10px] font-normal text-white">{champInfo.title}</p>
      </div>
      <div
        style={{ backgroundImage: `url(${champInfo.icon})`, backgroundSize: '40px 40px' }}
        className="absolute right-[10px] top-[10px] flex h-[40px] w-[40px] justify-end rounded-lg"
      />
    </div>
  );
}
