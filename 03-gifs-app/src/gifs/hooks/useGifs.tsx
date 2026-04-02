import { useRef, useState } from 'react';
import type { Gif } from '../interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    // console.log(term);
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifsResponse = await getGifsByQuery(term);
    setGifs(gifsResponse);
  };

  const handleSearch = async (query: string) => {
    const queryNormalized = query.toLowerCase().trim();
    if (query.length < 1) return;

    if (previousTerms.includes(queryNormalized)) {
      setGifs(gifsCache.current[queryNormalized]);
      return;
    }

    setPreviousTerms([queryNormalized, ...previousTerms].splice(0, 7));

    const gifsResponse = await getGifsByQuery(queryNormalized);
    setGifs(gifsResponse);

    gifsCache.current[queryNormalized] = gifsResponse;
    console.log({ gifsCache });
  };

  return {
    //Properties
    gifs,
    previousTerms,

    //Methods
    handleTermClicked,
    handleSearch,
  };
};
