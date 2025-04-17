'use client';

import { ROUTE_PATH, isParentRoute, routePaths, routes } from '@/routes';

const ItemPage = ({ params: { item } }: { params: { item: string[] } }) => {
  const path = ['', ...item].join('/') as ROUTE_PATH;
  const route = routes[path];
  const shouldRender =
    routePaths.includes(path) && !isParentRoute(route) && route.children;

  const Component = route?.children as React.ElementType;
  return shouldRender ? <Component /> : null;
  /* 
강의 버전


*/
  //이 조건일 때 Component 렌더링 한다로 변경함
  //
};

export default ItemPage;
