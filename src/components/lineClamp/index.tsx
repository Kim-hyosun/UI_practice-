import cx from './cx';
import ReactLineClamp1 from './react1';
import ReactLineClamp2 from './react2';

const LineClamp = () => {
  return (
    <div className={cx('LineClamp')}>
      <h2>여러줄 말줄임</h2>
      <ReactLineClamp1 />
      <ReactLineClamp2 />
    </div>
  );
};

export default LineClamp;
