import { useLocation } from 'react-router-dom';

function useGetCurrentPageName() {
  const { pathname: pathName } = useLocation();
  const pathNames = pathName.split('/');
  const currentPageName = pathNames[pathNames.length - 1];

  return `/${currentPageName}`;
}

export default useGetCurrentPageName;
