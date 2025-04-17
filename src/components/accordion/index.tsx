import cx from './cx';
import DetailTagAccordion from './detailTag';
import HTMLAccordion from './html';
import ReactAccordion1 from './react1';
import ReactAccordion2 from './react2';
import ReactAccordion3 from './react3';
import SearchAccordion from './search';
import VanillaAccordion from './vanilla';

const Accordions = () => {
  // cx('Accordions')는 해당 태그에 class="Accordions"를 한것
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <ReactAccordion1 />
      <ReactAccordion2 />
      <ReactAccordion3 />

      <VanillaAccordion />
      <HTMLAccordion />
      <SearchAccordion />
      <DetailTagAccordion />
    </div>
  );
};

export default Accordions;
