import { ICountry } from '../types/types';
import { Link } from 'react-router-dom';

interface CardProps {
  country: ICountry;
}

export function Card({ country }: CardProps) {
  return (
    <Link
      className='overflow-hidden rounded-md bg-light-ui shadow-md transition-transform duration-200 hover:-translate-y-1.5 dark:bg-dark-ui'
      to={`/countries/${country.cca3}`}
    >
      <img className='h-48 w-full object-cover' src={country.flagUrlImg} />
      <div className='px-6 py-5'>
        <h3 className='mb-3 text-lg font-extrabold'>{country.commonName}</h3>
        <p className='mb-1 text-sm'>
          <span className='font-semibold'>Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p className='mb-1 text-sm'>
          <span className='font-semibold'>Region: </span>
          {country.region}
        </p>
        {country.capital && (
          <p className='text-sm'>
            <span className='font-semibold'>Capital: </span>
            {country.capital?.join(', ')}
          </p>
        )}
      </div>
    </Link>
  );
}
