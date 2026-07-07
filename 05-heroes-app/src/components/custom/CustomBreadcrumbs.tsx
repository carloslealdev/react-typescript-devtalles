import { DotIcon } from 'lucide-react';
import { Link } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '../ui/breadcrumb';

interface Breadcrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: Breadcrumb[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb className='my-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to='/'>Home</Link>
        </BreadcrumbItem>

        {breadcrumbs.map((crumb) => (
          <div className='flex items-center'>
            <BreadcrumbItem key={crumb.label + 'item'}>
              <BreadcrumbSeparator>
                <DotIcon />
              </BreadcrumbSeparator>
              <BreadcrumbLink>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}

        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink className='text-black'>{currentPage}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <DotIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
