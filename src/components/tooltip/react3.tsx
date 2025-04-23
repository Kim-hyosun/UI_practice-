import { useEffect } from 'react';
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
  return (
    <details className={cx('details')} data-tooltip={id}>
      <summary className={cx('summary')} data-tooltip-summary>
        {title}
      </summary>
      <div className={cx('tooltip')} onClick={(e) => e.stopPropagation()}>
        {des}
      </div>
    </details>
  );
};

const ReactTootip3 = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement;
      document.querySelectorAll('[data-tooltip]').forEach((el) => {
        if (el !== target.parentElement) {
          el.removeAttribute('open');
        }
      });
    };

    window.addEventListener('click', closeAllTooltip);
    return () => {
      window.removeEventListener('click', closeAllTooltip);
    };
  }, []);
  return (
    <>
      <h3>
        #3. React <sub>Details태그로 하나만 열리는 툴팁</sub>
      </h3>

      {data.map((i) => (
        <Tooltip {...i} key={i.id} />
      ))}
    </>
  );
};

export default ReactTootip3;
