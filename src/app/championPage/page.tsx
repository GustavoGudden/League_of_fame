'use client';
import { Button, SearchComponent } from '@/components/ui';
import { Podium } from './layout/Podium';
import { ChampionModel } from '@/models/champion.model';
import Header from '@/components/layout/Header/Header';
import { OtherPositionsCard } from './layout/OtherPositionsCard';
import { useState } from 'react';

function ChampDetailsPage() {
  const podiumList: ChampionModel[] = [
    {
      name: 'Braum',
      title: 'the Heart of the Freljord',
      backgroundImage: '/images/background/braum_background.png',
      icon: '/images/champions/braum_icon.png',
      backgroundColor: '#15B3D8',
      banner: '/images/banner/braum_banner.png',
      role: ['support', 'tank'],
      likes: 1026,
    },
    {
      name: 'Aatrox',
      title: 'the Darkin Blade',
      backgroundImage: '/images/background/aatrox_background.png',
      icon: '/images/champions/aatrox_icon.png',
      backgroundColor: '#DB4451',
      banner: '/images/banner/aatrox_banner.png',
      role: ['fighter', 'tank'],
      likes: 32,
    },
    {
      name: 'Akali',
      title: 'the Rogue Assassin',
      backgroundImage: '/images/background/akali_background.png',
      icon: '/images/champions/akali_icon.png',
      backgroundColor: '#49AE8D',
      banner: '/images/banner/akali_banner.png',
      role: ['assasin'],
      likes: 106,
    },
  ];
  const [value, setValue] = useState('');

  const handleChangeValue = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <main className="mx-auto flex max-w-[936px] flex-col gap-[36px] ">
      <Header />
      <Podium podiumList={podiumList} />

      <section className="flex h-[35px] justify-between">
        <div className=" flex h-full flex-row items-center gap-[10px]">
          <SearchComponent handleChangeValue={handleChangeValue} />
        </div>
        <Button>VER RESULTADOS</Button>
      </section>
      <section className="grid grid-cols-2 gap-[10px] ">
        {podiumList.map((champion, index) => (
          <OtherPositionsCard key={index} podiumChampion={champion} position={index} />
        ))}
      </section>
    </main>
  );
}

export default ChampDetailsPage;
