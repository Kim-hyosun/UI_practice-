import { SyntheticEvent, useEffect, useState } from 'react';
import cx from './cx';
import data from './data';

const Tooltip = ({
  id,
  title,
  des,
}: {
  id: string;
  title: string;
  des: string;
}) => {
  const [isOpen, toggle] = useState(false);
  const clickHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    toggle((prev) => !prev);
  };

  useEffect(() => {
    const close = () => toggle(false);
    if (isOpen) {
      window.addEventListener('click', close);
    }

    return () => {
      window.removeEventListener('click', close);
    };
  }, [isOpen]);

  return (
    <div className={cx('container')}>
      <button className={cx('trigger')} onClick={clickHandler}>
        {title}
      </button>
      {isOpen && (
        <div className={cx('tooltip')} onClick={(e) => e.stopPropagation()}>
          {des}
        </div>
      )}
    </div>
  );
};

const ReactTootip1 = () => {
  return (
    <>
      <h3>
        #1. React <sub>외부클릭시 닫히는 툴팁</sub>
      </h3>
      {data.map((i) => (
        <Tooltip {...i} key={i.id} />
      ))}
    </>
  );
};

export default ReactTootip1;
