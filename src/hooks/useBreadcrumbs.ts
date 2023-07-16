import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useBreadCrumbs = () => {
  const { pathname } = useLocation();

  return useMemo(() => pathname.split('/').filter(path => path !== ''), [pathname]);
};
