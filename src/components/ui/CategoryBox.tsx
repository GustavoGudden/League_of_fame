import Image from 'next/image';
import icons from '@/assets/icons.json';

export function CategoryBox() {
  return icons.roles.map((icon, index) => (
    <div key={index} className="flex h-full w-[35px] items-center justify-center rounded-[7px] border border-neutral-100 bg-neutral-50 ">
      <Image src={icon.source} alt={icon.alt} width={16} height={16} />
    </div>
  ));
}
