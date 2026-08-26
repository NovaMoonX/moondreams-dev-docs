import MainHeader from '@/ui/MainHeader';
import { APP_DESCRIPTION, APP_TITLE } from '@lib/app';
import { Button } from '@moondreamsdev/dreamer-ui/components';

function Home() {
  return (
    <div className='page flex flex-col items-center justify-center'>
      <MainHeader />

      <div className='max-w-2xl space-y-6 px-4 text-center'>
        <h1 className='text-5xl font-bold md:text-6xl'>{APP_TITLE}</h1>
        <p className='text-foreground/80 text-lg md:text-xl'>
          {APP_DESCRIPTION}
        </p>
        <Button href='/d/123'>View Doc</Button>
      </div>
    </div>
  );
}

export default Home;
