'use client';

import {
  ChildRoute,
  ParentRoute,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from '@/routes';
import { ROUTE } from '../routes';
import Link from 'next/link';
import classNames from 'classnames';
import { useParams } from 'next/navigation';

const ParentGnbItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const open = children.includes(currentPath);
  return (
    //li의 classNames안에 있는 변수는 css를 처리하기 위함
    <li className={classNames('parent', `items-${children.length}`, { open })}>
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          //하위요소를 펼쳐서 보여줌
          const route = routes[r];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};
const ChildGnbItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  return (
    <li
      className={classNames({
        active: link === currentPath,
        disabled: !children,
      })}>
      {children ? <Link href={link}>{name}</Link> : name}
    </li>
  );
};

const GnbItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  //하위요소를 가지고 있으면 parent를 리턴, 하위요소 없으면 child를 리턴
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  else return <ChildGnbItem route={route} currentPath={currentPath} />;
};

const Gnb = () => {
  const { item = [] } = useParams() as { item?: string[] }; //item값이 없을수 있을때를 대비해서 빈배열 할당함 item은 ['a','b','c']를 출력
  const currentPath = ['', ...item].join('/') as ROUTE_PATH; // /동적 라우팅된 'a/b/c'를 출력

  return (
    <aside>
      <h1>
        <Link href="/">
          UI 요소 모음 <sub>FE재남</sub>
        </Link>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem route={r} currentPath={currentPath} key={r.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;
