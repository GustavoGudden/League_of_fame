'use client';
import { useRouter } from 'next/navigation';

// Assents
import logo from '@/../public/logo.png';
import Image from 'next/image';

// Components
import { Button, CategoryBox, SearchComponent, ChampionBox } from '@/components/ui';

// Hooks
import { useEffect, useState } from 'react';
import { GetAllChamapionData, getAllChampion } from '@/repositories';

// DataHelpers
import { RoleName, dataRoles } from '@/common/data/data-roles';

function Home() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [rolesSelected, setRolesSelected] = useState({ Assassin: false, Tank: false, Support: false, Mage: false, Fighter: false, Marksman: false });

  const handleChangeValue = (inputValue: string) => {
    setValue(inputValue);
    console.log(inputValue);
  };

  const [champions, setChampions] = useState<GetAllChamapionData>({
    result: [],
    total: 0,
  });

  async function fetchChampions() {
    try {
      const championData = await getAllChampion();
      setChampions(championData);
    } catch (error) {
      console.error('Erro ao buscar campeões:', error);
    }
  }

  useEffect(() => {
    fetchChampions();
  }, []);

  return (
    <main className="mx-auto flex h-screen max-w-[936px] flex-col gap-[36px] overflow-hidden pb-5 ">
      <header>
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-b-[50px] bg-neutral-50">
          <Image src={logo} alt="logo" width={32} height={32} />
        </div>
      </header>
      <section className="flex h-[35px] justify-between">
        <div className=" flex h-full flex-row items-center gap-[10px]">
          <SearchComponent handleChangeValue={handleChangeValue} />
          {dataRoles.map((role) => {
            return (
              <CategoryBox
                tag={role.name}
                isSelect={rolesSelected[role.name]}
                onClick={() => {
                  setRolesSelected((olderSelectRoles) => {
                    console.log(olderSelectRoles);
                    console.log(role.name);
                    return { ...olderSelectRoles, [role.name]: !olderSelectRoles[role.name] };
                  });
                }}
              />
            );
          })}
        </div>
        <Button onClick={() => router.push('/championPage')}>VER RESULTADOS</Button>
      </section>
      <section className="flex h-full overflow-y-scroll">
        <div className="mr-5 flex h-full flex-wrap justify-between gap-[20px]">
          {champions.result.length &&
            champions.result
              .filter((champInfo) => {
                const rolesSelectedKeys = Object.keys(rolesSelected) as unknown as RoleName['name'][];
                const selectedKeys = rolesSelectedKeys.filter((role) => rolesSelected[role]);

                return selectedKeys.length === 0 ? true : champInfo.roles.some((role) => selectedKeys.includes(role));
              })
              .filter((champInfo) => {
                return value.length < 3 ? true : champInfo.name.toLocaleLowerCase().includes(value.toLowerCase());
              })
              .map((champInfo, index) => {
                return <ChampionBox key={index} champInfo={champInfo} />;
              })}
        </div>
      </section>
    </main>
  );
}

export default Home;
