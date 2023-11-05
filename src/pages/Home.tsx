import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { fetchCountries } from '../features/countriesSlice';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { IRegionOption } from '../types/types';

export function Home() {
  const [regionOption, setRegionOption] = useState<IRegionOption | null>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const { error, status } = useAppSelector((state) => state.countries);

  const countries = useAppSelector((state) => state.countries.data);
  const filteredCountries = countries.filter((country) => {
    const searchMatch = country.commonName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const regionMatch =
      regionOption === null || country.region === regionOption.value;
    return searchMatch && regionMatch;
  });

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [status]);

  let content;

  if (status === 'loading') {
    content = (
      <div className='mx-auto mt-28 aspect-square h-8 animate-spin rounded-full border-4 border-dark-ui border-b-transparent dark:border-light-ui dark:border-b-transparent'></div>
    );
  } else if (status === 'failed') {
    content = (
      <p className='pt-28 text-center text-xl font-semibold'>{error}</p>
    );
  } else if (status === 'succeeded') {
    content = (
      <div className='grid grid-cols-[repeat(auto-fill,270px)] justify-center gap-14 pt-12 tablet:gap-y-16 desktop:justify-between'>
        {filteredCountries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))}
      </div>
    );
  }

  return (
    <section className='py-6 tablet:py-12'>
      <Controls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setRegionOption={setRegionOption}
      />
      {content}
    </section>
  );
}
