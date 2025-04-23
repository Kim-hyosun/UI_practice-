import { SyntheticEvent, useEffect, useState } from 'react';
import cx from './cx';
import data from './data';
import { SingleOpenContextProvider, useSingleOpen } from './singleOpenContext';

const Tooltip = ({
  id,
  title,
  des,
}: {
  id: string;
  title: string;
  des: string;
}) => {
  const [isOpen, toggle] = useSingleOpen(id);
  const clickHandler = (e: SyntheticEvent) => {
    e.stopPropagation();
    toggle((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const close = () => toggle(null);
    if (isOpen) {
      window.addEventListener('click', close, { once: true });
    }

    return () => {
      window.removeEventListener('click', close);
    };
  }, [isOpen, toggle]);

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

const ReactTootip2 = () => {
  return (
    <>
      <h3>
        #2. React <sub>하나만열리도록 context로 상태관리</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((i) => (
          <Tooltip {...i} key={i.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  );
};

export default ReactTootip2;
