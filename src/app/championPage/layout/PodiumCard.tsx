import Image from 'next/image';
import { delaGothicOne } from '@/app/layout';
import { ChampionType } from '@/common/types/types';
import { IconRoleComponent } from '@/components/ui/iconComponente';

interface IPodiumCardProps {
  position: number;
  podiumChampion: ChampionType;
}

export function PodiumCard({ position, podiumChampion }: IPodiumCardProps) {
  if (position === 1) {
    return <FirstPlaceCard champion={podiumChampion} />;
  } else {
    return <OtherPlaceCard podiumChampion={podiumChampion} position={position} />;
  }
}

function FirstPlaceCard({ champion }: { champion: IPodiumCardProps['podiumChampion'] }) {
  return (
    <div
      style={{ backgroundColor: champion.color }}
      className="relative flex h-[250px] w-[485px] flex-col items-center  rounded-[17px]  bg-cover bg-no-repeat "
    >
      <Image
        className="absolute z-0 h-full w-full rounded-[17px] opacity-[20%]"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt="background image"
        width={485}
        height={250}
      />
      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex flex-col p-[25px]">
          <div className="flex flex-row gap-[5px]">
            {champion.roles.map((role, index) => (
              <IconRoleComponent key={index} tag={role} size={15} />
            ))}
          </div>

          <h1 className={`${delaGothicOne.className} text-[24px] font-normal`}>{champion.name}</h1>
          <p className="text-[14px] font-normal">{champion.title}</p>
        </div>
        <div className="z-0 mx-[25px] flex h-[55px] w-[200px] items-center justify-center gap-[10px] rounded-[12px] bg-gold">
          <Image src={'/star_icon.png'} alt="estrela" width={24} height={23} />
          <h1 className="text-[24px] font-black">{champion.likes}</h1>
        </div>
      </div>
      <Image
        className="  absolute right-[25px]  top-1/2 -translate-y-1/2 rounded-[12px]"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt="banner"
        width={165}
        height={220}
      />
      <div
        style={{ backgroundColor: champion.color }}
        className="absolute left-0 top-1/2 flex h-[40px] w-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[100%]"
      >
        1
      </div>
    </div>
  );
}

function OtherPlaceCard({ podiumChampion, position }: IPodiumCardProps) {
  return (
    <div style={{ backgroundColor: podiumChampion.color }} className="relative flex h-[115px] w-full flex-row rounded-[17px] ">
      <div
        style={{ backgroundColor: podiumChampion.color }}
        className="absolute left-[25px] top-0 z-[2] flex h-[20px] w-[20px] -translate-y-1/2  items-center justify-center rounded-[100%]"
      >
        <p className="text-xs">{position}</p>
      </div>
      <Image
        className="absolute z-0 h-full w-full rounded-[17px] opacity-[5%]"
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${podiumChampion.id}_0.jpg`}
        alt="aatrox banner "
        width={451}
        height={115}
      />
      <div className="flex flex-col justify-center pl-[25px]">
        <div className="flex flex-row gap-[5px]">
          {podiumChampion.roles.map((role, index) => (
            <IconRoleComponent key={index} tag={role} size={15} />
          ))}
        </div>
        <h1 className={`${delaGothicOne.className} text-[24px] font-normal`}>{podiumChampion.name}</h1>
        <h2 className="text-[10px] font-normal">{podiumChampion.title}</h2>
      </div>
      <Image
        className="z-1 absolute bottom-0 right-[25px] rounded-t-[12px] "
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${podiumChampion.id}_0.jpg`}
        alt="aatrox banner "
        height={115}
        width={68}
      />
      <div className=" absolute bottom-[10px] right-[80px] flex h-[30px] w-[100px] items-center justify-center gap-[5px] rounded-[6px] bg-gold p-1">
        <Image src={'/star_icon.png'} alt="estrela" width={13} height={13} />
        <h1 className="text-[14px] font-black">{podiumChampion.likes}</h1>
      </div>
    </div>
  );
}
