import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title='Búsqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes y villanos'
      />

      <CustomBreadcrumbs currentPage='Search hero' />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
