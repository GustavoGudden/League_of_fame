import { Search } from 'lucide-react';

interface ISearchComponentProps {
  handleChangeValue: (value: string) => void;
}

export function SearchComponent({ handleChangeValue }: ISearchComponentProps) {
  return (
    <div className="flex h-full flex-row  items-center gap-[10px] rounded-[7px] border border-neutral-100 bg-neutral-50 p-[8px] focus:bg-red-700">
      <Search width="20" height="20" color="#DBDBDB" />
      <input
        onChange={(e) => handleChangeValue(e.target.value)}
        type="text"
        className="h-full w-full border-none bg-transparent"
        placeholder="Pesquisar"
      />
    </div>
  );
}
