import { useCallback, useState } from 'react';
import { MyTitle } from './ui/MyTitle';
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {
  const [title, setTitle] = useState('Hola');
  const [subTitle, setSubTitle] = useState('Mundo');

  const handleCallMyApi = useCallback(() => {
    console.log('Llamar a mi API');
  }, []);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>Memo App</h1>

      <MyTitle title={title} />

      <MySubTitle subtitle={subTitle} callMyApi={handleCallMyApi} />

      <button
        onClick={() => setTitle('Hello')}
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
      >
        Cambiar título
      </button>

      <button
        onClick={() => setSubTitle('World')}
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
