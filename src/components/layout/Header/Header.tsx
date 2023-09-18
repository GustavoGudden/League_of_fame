import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex h-[75px] w-[75px] items-center justify-center rounded-b-[50px] bg-neutral-50">
        <Image src={'/logo.png'} alt="logo" width={32} height={32} />
      </div>
    </header>
  );
};

export default Header;
