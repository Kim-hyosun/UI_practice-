import cx from './cx';
import data from './data';
import { useState } from 'react';

const AccordionItem = ({
  id,
  title,
  des,
  current,
  toggle,
}: {
  id: string;
  title: string;
  des: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('item', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      {current ? <div className={cx('description')}>{des}</div> : null}
    </li>
  );
};

const ReactAccordion1 = () => {
  const [currentId, setCurrentId] = useState(data[0].id); //클릭요소의 데이터 id저장
  const toggleItem = (id: string) => () => {
    //고차함수(클로저)로 작성하는 이유는?
    // 1. id를 넘기면,클릭요소의 상태를 변경하는 순서로 실행보장
    // 2. id값으로 인한 동작은 하위에서 일어나지만, 하위의 동작이 상위 컴포넌트의 id상태에 접근할수있도록 함 즉, 상위함수에서 관리되는 상태를 하위함수에서 유지하며 사용할수 있음
    setCurrentId(id);
    //setCurrentId(prev=> prev === id? null: id) 이전항목과 달라야 id를 전달하도록 해 useState가 무분별하게(?)업데이트 되지 않도록 함
  };
  return (
    <>
      <h3>
        1. React <sub> useState + 클로저 + 안보이는 요소는 화면에 렌더링X</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((i) => (
          <AccordionItem
            {...i}
            key={i.id}
            current={currentId === i.id}
            toggle={toggleItem(i.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ReactAccordion1;
