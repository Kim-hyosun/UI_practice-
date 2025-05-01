import cx from './cx';
import ReactTextBox1 from './react1';
import ReactTextBox2 from './react2';
import ReactTextBox3 from './react3';
import VanillaTextBox from './vanilla';

const TextBoxes = () => {
  return (
    <div className={cx('TextBoxes')}>
      <h2>반응형 텍스트박스</h2>
      <ReactTextBox1 />
      <ReactTextBox2 />
      <ReactTextBox3 />
      <VanillaTextBox />
    </div>
  );
};

export default TextBoxes;
