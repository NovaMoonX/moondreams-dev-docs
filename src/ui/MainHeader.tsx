import AuthDropdown from './AuthDropdown';
import ThemeToggle from './ThemeToggle';

function MainHeader() {
  return (
    <div className='pointer-events-none absolute inset-x-0 top-0 z-10 flex h-20 items-center justify-between px-4 py-4 md:px-6'>
      <div className='pointer-events-auto'>
        <ThemeToggle className='flex items-center' />
      </div>

      <div className='pointer-events-auto'>
        <AuthDropdown />
      </div>
    </div>
  );
}

export default MainHeader;
