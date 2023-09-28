'use client';
import { useEffect, useState } from 'react';

// Components
import Header from '@/components/layout/Header/Header';
import { OtherPositionsCard } from './layout/OtherPositionsCard';
import { Button, SearchComponent } from '@/components/ui';
import { Podium } from './layout/Podium';

// Repository
import { GetAllChamapionData, getAllChampion, getPodiumChampions } from '@/repositories';

// Types
import { ChampionType } from '@/common/types/types';

// Router
import { useRouter } from 'next/navigation';

function ChampDetailsPage() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [champions, setChampions] = useState<GetAllChamapionData>({
    result: [],
    total: 0,
  });
  const [podiumChampion, setPodiumChampion] = useState<ChampionType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const goNextPage = () => {
    console.log('next');
    setCurrentPage(currentPage + 1);
  };

  const goBackPage = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleChangeValue = (inputValue: string) => {
    setValue(inputValue);
    console.log(inputValue);
  };

  async function fetchChampions() {
    try {
      const championData = await getAllChampion(currentPage, 14);
      const championPodium = await getPodiumChampions();
      setChampions(championData);
      setPodiumChampion(championPodium.result);
    } catch (error) {
      console.error('Erro ao buscar campeões:', error);
    }
  }

  useEffect(() => {
    fetchChampions();
    console.log('aaa');
  }, [currentPage]);

  return (
    <main className="mx-auto flex max-w-[936px] flex-col gap-[30px] pb-4">
      <Header />
      {podiumChampion.length > 0 ? <Podium podiumList={podiumChampion} /> : <div>Aguarde enquanto os dados estão sendo carregados...</div>}
      <section className="flex h-[35px] justify-between">
        <div className=" flex h-full flex-row items-center gap-[10px]">
          <SearchComponent handleChangeValue={handleChangeValue} />
        </div>
        <Button onClick={() => router.push('/')}>QUERO VOTAR</Button>
      </section>
      <section className="grid grid-cols-2 gap-[10px] ">
        {champions.result.map((champion, index) => (
          <OtherPositionsCard key={index} podiumChampion={champion} position={index} />
        ))}
      </section>
      <section className="flex w-full justify-between">
        <Button onClick={goBackPage}>Voltar</Button>
        <Button onClick={goNextPage}>Avançar</Button>
      </section>
    </main>
  );
}

export default ChampDetailsPage;
