import ThemeToggle from '@ui/ThemeToggle';
import { Outlet } from 'react-router-dom';
import AuthAvatar from './AuthAvatar';

function Layout() {
  return (
    <div className='transition-colors duration-200'>
      {/* header */}
      <div className='pointer-events-none absolute inset-x-0 top-0 z-10 flex h-20 items-center justify-between px-4 py-4 md:px-6'>
        <div className='pointer-events-auto'>
          <ThemeToggle className='flex items-center' />
        </div>

        <div className='pointer-events-auto'>
          <AuthAvatar />
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
