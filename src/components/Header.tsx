import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsMoon, BsFillSunFill } from 'react-icons/bs';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className='bg-light-ui shadow dark:bg-dark-ui'>
      <div className='my-container flex items-center justify-between py-7'>
        <Link className='text-sm font-extrabold tablet:text-2xl' to='/'>
          Where in the world?
        </Link>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className='flex items-center gap-2 text-[13px] font-semibold tablet:text-base'
        >
          {isDarkMode ? <BsFillSunFill size='17px' /> : <BsMoon size='16px' />}
          <span className='mt-0.5'>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </header>
  );
}
