import cx from './cx';
import data from './data';
import { useEffect, useRef } from 'react';

const AccordionItem = ({
  id,
  title,
  des,
  name,
  firstOpen,
}: {
  id: string;
  title: string;
  des: string;
  name: string;
  firstOpen: boolean;
}) => {
  const descRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const $desc = descRef.current;
  const $details = detailsRef.current;
  const detailsOpen = $details?.open;

  useEffect(() => {
    if (!$desc || !$details) return;

    // open 상태에 따라 hidden 속성 토글 처리 함수
    const handleToggle = () => {
      if (detailsOpen) {
        $desc.removeAttribute('hidden');
      } else {
        $desc.setAttribute('hidden', 'until-found');
      }
    };

    // 초기 hidden 속성 처리
    handleToggle();

    // details에서 toggle로 desc hidden관리
    $details.addEventListener('toggle', handleToggle);

    // cleanup
    return () => {
      $details.removeEventListener('toggle', handleToggle);
    };
  }, []);

  return (
    <details
      className={cx('item', 'item7')}
      ref={detailsRef}
      name={name}
      open={firstOpen}>
      <summary className={cx('tab')}>{title}</summary>
      <div className={cx('description')} ref={descRef}>
        {des}
      </div>
    </details>
  );
};

const DetailTagAccordion = () => {
  return (
    <>
      <h3>
        7. React <sub>detail 태그+검색가능</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((i, idx) => (
          <AccordionItem
            {...i}
            key={i.id}
            name="accordion"
            firstOpen={idx === 0}
          />
        ))}
      </ul>
    </>
  );
};

export default DetailTagAccordion;
