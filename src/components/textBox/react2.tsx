import { useEffect, useRef } from 'react';
import cx from './cx';
import { measureLines } from '../util';

const ReactTextBox2 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    const handleInput = () => {
      if (!el) return;
      const val = el.value;
      const lines = Math.min(Math.max(measureLines(el, val), 3), 15);
      el.rows = lines;
    };
    if (el) el.addEventListener('input', handleInput);

    return () => {
      if (el) el.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <>
      <h3>
        #2. <sub>uncontrolled Component & canvas</sub>
      </h3>
      <div className={cx('container')}>
        <textarea
          className={cx('textarea')}
          ref={textareaRef}
          rows={3}></textarea>
      </div>
    </>
  );
};

export default ReactTextBox2;
