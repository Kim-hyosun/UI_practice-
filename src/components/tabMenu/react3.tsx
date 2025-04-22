import cx from './cx';
import data from './data';
import { useState } from 'react';

const TabItem = ({
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
      <div className={cx('description')}>{des}</div>
    </li>
  );
};

const ReactTabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);
  const toggleItem = (id: string) => () => {
    setCurrentId(id);
  };
  return (
    <>
      <h3>
        3. React
        <sub>
          li안에 title/desc모두 있게 해서 스크린리더기로 읽었을때 더 좋은
          tabmenu를 만들자
        </sub>
      </h3>
      <ul className={cx('container', 'tabMenu3')}>
        {data.map((i) => (
          <TabItem
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

export default ReactTabMenu3;
