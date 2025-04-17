import cx from './cx';
import data from './data';
import { useEffect, useRef, useState } from 'react';

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
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $desc = descRef.current;
    if (!$desc) return;
    $desc.addEventListener('beforematch', toggle);
    //react에서는 hidden속성에 boolean |undefined만 할당 가능해서 강제보정된다고 함
    //강의에서는 HIDDEN이라는 꼼수를 사용했찌만... 나는 setAttribute로 가겠다
    !current
      ? $desc.setAttribute('hidden', 'until-found')
      : $desc.removeAttribute('hidden');

    // cleanup함수
    return () => {
      $desc.removeEventListener('beforematch', toggle);
    };
  }, [current, toggle]);

  return (
    <li className={cx('item', 'item3', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')} ref={descRef}>
        {des}
      </div>
    </li>
  );
};

const SearchAccordion = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id); //클릭요소의 데이터 id저장
  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>
        6. React <sub> ctrl + f로 검색시 열리는 아코디언</sub>
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

export default SearchAccordion;
