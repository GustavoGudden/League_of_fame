'use client';
import logo from '@/../public/logo.png';
import Image from 'next/image';

// Components
import { Button, CategoryBox, SearchComponent, ChampionBox } from '@/components/ui';

// Data
import champsObject from '@/data/data.champ.json';

// Type
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChampionModel } from '@/models/champion.model';

function Home() {
  const router = useRouter();
  const [value, setValue] = useState('');

  const champs: ChampionModel[] = champsObject.champs as unknown as ChampionModel[];

  const handleChangeValue = (inputValue: string) => {
    setValue(inputValue);
    console.log(inputValue);
  };
  console.log('render');

  return (
    <main className="mx-auto flex max-w-[936px] flex-col gap-[36px] ">
      <header>
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-b-[50px] bg-neutral-50">
          <Image src={logo} alt="logo" width={32} height={32} />
        </div>
      </header>
      <section className="flex h-[35px] justify-between">
        <div className=" flex h-full flex-row items-center gap-[10px]">
          <SearchComponent handleChangeValue={handleChangeValue} />
          <CategoryBox />
        </div>
        <Button onClick={() => router.push('/championPage')}>VER RESULTADOS</Button>
      </section>
      <section className="flex flex-wrap justify-between gap-[20px]">
        {champs
          .filter((champInfo) => {
            return value.length < 3 ? true : champInfo.name.toLocaleLowerCase().includes(value.toLowerCase());
          })
          .map((champInfo, index) => {
            return <ChampionBox key={index} champInfo={champInfo} />;
          })}
      </section>
    </main>
  );
}

export default Home;
