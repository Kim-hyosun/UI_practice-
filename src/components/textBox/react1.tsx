import { ChangeEvent, SyntheticEvent, useState } from 'react';
import cx from './cx';
import { measureLines } from '../util';

const ReactTextBox1 = () => {
  const [text, setText] = useState('');
  const [lines, setLines] = useState(3);

  const handleChange = (e: ChangeEvent) => {
    const el = e.target as HTMLTextAreaElement;
    const val = el.value;
    const measured = measureLines(el, val);
    const lines = Math.min(Math.max(measured, 3), 15);
    setText(val);
    setLines(lines);
  };

  return (
    <>
      <h3>
        #1. <sub>controlled Component & canvas</sub>
      </h3>
      <div className={cx('container')}>
        <textarea
          className={cx('textarea')}
          onChange={handleChange}
          rows={lines}
          value={text}></textarea>
      </div>
    </>
  );
};

export default ReactTextBox1;
