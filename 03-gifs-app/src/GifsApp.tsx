import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { GifsList } from './gifs/components/GifsList';
import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

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
