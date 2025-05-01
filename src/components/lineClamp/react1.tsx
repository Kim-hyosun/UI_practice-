import { useState, useEffect, useRef } from 'react';
import cx from './cx';
import { data } from './lorem';
import { measureLines } from '../util';

const LineClampedText = ({ text }: { text: string }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);
  useEffect(() => {
    if (text && elRef.current) {
      const measuredLines = measureLines(elRef.current, text);
      toggleClamped(measuredLines > 3);
    }
  }, [text]);
  return (
    <div className={cx('content', { clamped: isClamped })}>
      <div className={cx('text')} ref={elRef} style={{ WebkitLineClamp: 3 }}>
        {text}
      </div>
      {isClamped && (
        <button
          className={cx('buttonMore')}
          onClick={() => toggleClamped(false)}></button>
      )}
    </div>
  );
};

const ReactLineClamp1 = () => {
  return (
    <>
      <h3>
        #1 <sub>canvas - 3줄 말줄임</sub>
      </h3>
      {data.map((text, idx) => (
        <LineClampedText text={text} key={idx} />
      ))}
    </>
  );
};

export default ReactLineClamp1;
