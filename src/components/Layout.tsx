import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <>
      <Header />
      <main className='my-container'>
        <Outlet />
      </main>
    </>
  );
}
