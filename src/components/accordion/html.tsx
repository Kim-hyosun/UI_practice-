import cx from './cx';
import data from './data';

const AccordionItem = ({
  id,
  title,
  des,
  initialChecked,
}: {
  id: string;
  title: string;
  des: string;
  initialChecked: boolean;
}) => {
  return (
    <li className={cx('item', 'item5')} key={id}>
      <input
        className={cx('input')}
        type="radio"
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{des}</div>
    </li>
  );
};

const HTMLAccordion = () => {
  return (
    <>
      <h3>
        5. HMTL로만 만들기 <sub> input(radio)+label로 처리 </sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((i, idx) => (
          <AccordionItem {...i} key={i.id} initialChecked={idx === 0} />
        ))}
      </ul>
    </>
  );
};

export default HTMLAccordion;
