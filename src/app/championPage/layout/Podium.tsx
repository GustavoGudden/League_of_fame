import { ChampionModel } from '@/models/champion.model';

import { PodiumCard } from './PodiumCard';

interface IPodiumProps {
  podiumList: ChampionModel[];
}

export function Podium({ podiumList }: IPodiumProps) {
  return (
    <section className="flex flex-row gap-[10px]">
      <PodiumCard position={1} podiumChampion={podiumList[0]} />
      <div className="flex flex-1 flex-col justify-between">
        <PodiumCard position={2} podiumChampion={podiumList[1]} />
        <PodiumCard position={3} podiumChampion={podiumList[2]} />
      </div>
    </section>
  );
}
