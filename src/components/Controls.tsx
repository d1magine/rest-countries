import { useRef, Dispatch, SetStateAction } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IRegionOption } from '../types/types';
import { CustomSelect } from './CustomSelect';

const options: IRegionOption[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'Americas' },
  { value: 'Antarctic', label: 'Antarctic' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

interface ControlsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setRegionOption: Dispatch<SetStateAction<IRegionOption | null>>;
}

export function Controls({
  searchQuery,
  setSearchQuery,
  setRegionOption,
}: ControlsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputFocus = () => inputRef.current?.focus();

  return (
    <div className='flex flex-col gap-10 tablet:flex-row tablet:justify-between tablet:gap-0'>
      <div
        onClick={handleInputFocus}
        className='flex items-center gap-3 rounded bg-light-ui p-4 shadow dark:bg-dark-ui tablet:w-[450px]'
      >
        <AiOutlineSearch size='20px' />
        <input
          className='flex-1 bg-transparent text-sm outline-none placeholder:text-light-text placeholder:dark:text-dark-text'
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type='text'
          placeholder='Search for a country...'
        />
      </div>

      <CustomSelect
        options={options}
        onChange={(region) => setRegionOption(region)}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
      />
    </div>
  );
}
