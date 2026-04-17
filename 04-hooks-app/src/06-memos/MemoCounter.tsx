import { useCounter } from '@/hooks/useCounter';
import { useMemo } from 'react';

const heavyStuff = (iterationsNumber: number) => {
  console.time('Heavy_stuff_started');

  for (let index = 0; index < iterationsNumber; index++) {
    console.log('Ejecutando');
  }

  console.timeEnd('Heavy_stuff_started');

  return `${iterationsNumber} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(10_000);
  const { counter: counter2, increment: increment2 } = useCounter(50);

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1>Memo - useMemo - {myHeavyValue}</h1>

      <hr />
      <h4>Counter: {counter}</h4>
      <h4>Counter2: {counter2}</h4>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={increment}
      >
        +1
      </button>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        onClick={increment2}
      >
        +1 - counter2
      </button>
    </div>
  );
};
