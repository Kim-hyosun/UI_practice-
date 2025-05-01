import { useEffect, useRef } from 'react';
import cx from './cx';

const ReactTextBox3 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cloneRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = textareaRef.current;
    const cl = cloneRef.current;

    const handleInput = () => {
      if (!el || !cl) return;
      const val = el.value; //실제 입력창의 값
      cl.value = val; //위에서 받은 값을 똑같이 복사해서 Clone에게 전달
      const lines = Math.min(
        Math.max(Math.ceil(cl.scrollHeight / cl.clientHeight), 3),
        15
      );
      el.rows = lines; //클론으로 계산해서, 줄수를 실제입력창에게 부여
    };
    if (el) el.addEventListener('input', handleInput);

    return () => {
      if (el) el.removeEventListener('input', handleInput);
    };
  }, []);

  return (
    <>
      <h3>
        #3. <sub>uncontrolled Component & clone element</sub>
      </h3>
      <div className={cx('container')}>
        <textarea
          className={cx('clone')}
          ref={cloneRef}
          rows={1}
          readOnly></textarea>
        <textarea
          className={cx('textarea')}
          ref={textareaRef}
          rows={3}></textarea>
      </div>
    </>
  );
};

export default ReactTextBox3;
