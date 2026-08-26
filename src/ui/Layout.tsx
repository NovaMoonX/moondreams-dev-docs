import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='transition-colors duration-200'>
      <Outlet />
    </div>
  );
}

export default Layout;
