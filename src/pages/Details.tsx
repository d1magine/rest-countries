import { useParams, useNavigate, Link } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { useAppSelector } from '../app/hooks';
import { NotFound } from './NotFound';

type DetailsParams = {
  countryId: string;
};

export function Details() {
  const { countryId } = useParams<DetailsParams>();
  const country = useAppSelector((state) =>
    state.countries.data.find((c) => c.cca3 === countryId)
  );

  const navigate = useNavigate();
  const handleNavigateBackClick = () => navigate(-1);

  if (!country) {
    return <NotFound />;
  }

  return (
    <section className='py-10 tablet:py-20'>
      <button
        onClick={handleNavigateBackClick}
        className='flex items-center gap-2 rounded-sm bg-light-ui px-5 py-1 shadow-circular dark:bg-dark-ui tablet:rounded-md tablet:px-9 tablet:py-2'
      >
        <MdOutlineKeyboardBackspace size='24px' />
        Back
      </button>
      <div className='flex flex-col gap-10 pt-16 tablet:flex-row tablet:justify-between'>
        <img
          className='max-h-96 w-full max-w-xl self-center object-cover tablet:w-2/3 tablet:self-start'
          src={country.flagUrlImg}
          alt=''
        />
        <div>
          <h2 className='text-[22px] font-extrabold tablet:text-3xl'>
            {country.commonName}
          </h2>

          <div className='flex flex-col gap-8 pt-6 tablet:gap-20 desktop:flex-row'>
            <ul className='flex flex-col gap-2 font-light tablet:max-w-xs'>
              <li>
                <span className='font-semibold'>Native Name: </span>
                {country.nativeName}
              </li>
              <li>
                <span className='font-semibold'>Population: </span>
                {country.population.toLocaleString()}
              </li>
              <li>
                <span className='font-semibold'>Region: </span>
                {country.region}
              </li>
              {country.subregion && (
                <li>
                  <span className='font-semibold'>Sub Region: </span>
                  {country.subregion}
                </li>
              )}
              {country.capital && (
                <li>
                  <span className='font-semibold'>Capital: </span>
                  {country.capital.join(', ')}
                </li>
              )}
            </ul>
            <ul className='flex flex-col gap-2 font-light tablet:max-w-xs'>
              {country.tld && (
                <li>
                  <span className='font-semibold'>Top Level Domain: </span>
                  {country.tld.join(', ')}
                </li>
              )}
              {country.currencies && (
                <li>
                  <span className='font-semibold'>Currencies: </span>
                  {country.currencies.join(', ')}
                </li>
              )}
              {country.languages && (
                <li>
                  <span className='font-semibold'>Languages: </span>
                  {country.languages.join(', ')}
                </li>
              )}
            </ul>
          </div>

          {country.borders && (
            <div className='pt-8 tablet:pt-12'>
              <h3 className='font-semibold'>Border Countries:</h3>
              <ul className='flex flex-wrap gap-2 pt-3 tablet:max-w-md'>
                {country.borders.map((border) => (
                  <Link
                    key={border}
                    className='rounded-sm bg-light-ui px-7 py-1 lowercase shadow-circular dark:bg-dark-ui'
                    to={`/countries/${border}`}
                  >
                    {border}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
