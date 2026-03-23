import { useState } from 'react';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import { GifsList } from './gifs/components/GifsList';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    console.log(term);
  };

  const handleSearch = async (query: string) => {
    const queryNormalized = query.toLowerCase().trim();
    if (query.length < 1) return;

    if (previousTerms.includes(queryNormalized)) return;

    setPreviousTerms([queryNormalized, ...previousTerms].splice(0, 7));

    const gifsResponse = await getGifsByQuery(query);

    setGifs(gifsResponse);
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title='Buscador de gifs'
        description='Descubre y comparte el gif perfecto'
      />

      {/* Search */}
      <SearchBar placeholder='Buscar gifs' onQuery={handleSearch} />

      {/* Busquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};
