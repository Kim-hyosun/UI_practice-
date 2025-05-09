import cx from './cx';
import ReactTootip1 from './react1';
import ReactTootip2 from './react2';
import ReactTootip3 from './react3';
import ReactTooltip4 from './react4';
import VanillaTooltip from './vanilla';

const Tooltips = () => {
  return (
    <div className={cx('Tooltips')}>
      <h2>툴팁</h2>
      <ReactTootip1 />
      <ReactTootip2 />
      <ReactTootip3 />
      <ReactTooltip4 />
      <VanillaTooltip />
    </div>
  );
};

export default Tooltips;
