import cx from './cx';
import data from './data';
import { useState } from 'react';
const TabItem = ({
  id,
  title,
  current,
  toggle,
}: {
  id: string;
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx('tab', { current })} key={id} onClick={toggle}>
      {title}
    </li>
  );
};

const ReactTabManu1 = () => {
  const [currentId, setCurrentID] = useState<string | null>(data[0].id);
  const currentData = data.find((item) => item.id === currentId);

  const toggleItem = (id: string) => {
    setCurrentID(id);
  };
  return (
    <>
      <h3>
        1. React <sub>보이는요소만 렌더링</sub>
      </h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map((i) => (
            <TabItem
              {...i}
              key={i.id}
              current={currentId === i.id}
              toggle={() => toggleItem(i.id)}
            />
          ))}
        </ul>
        <div className={cx('description')}>{currentData?.des ?? ''}</div>
      </div>
    </>
  );
};

export default ReactTabManu1;
