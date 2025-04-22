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

const ReactTabManu2 = () => {
  const [currentId, setCurrentID] = useState<string | null>(data[0].id);
  const currentData = data.find((item) => item.id === currentId);

  const toggleItem = (id: string) => {
    setCurrentID(id);
  };
  return (
    <>
      <h3>
        2. React <sub>미리 그려져있는 tag를 css로 show/hide</sub>
      </h3>
      <div className={cx('container', 'tabMenu2')}>
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
        {data.map((i) => (
          <div className={cx('description', { current: currentId === i.id })}>
            {i.des}
          </div>
        ))}
      </div>
    </>
  );
};

export default ReactTabManu2;
