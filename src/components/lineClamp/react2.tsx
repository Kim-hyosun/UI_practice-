import { useEffect, useState, useRef } from 'react';
import cx from './cx';
import { data } from './lorem';

const LineClampedText = ({ text, lines }: { text: string; lines: number }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamed] = useState(true);

  useEffect(() => {
    if (elRef.current && cloneRef.current) {
      const computedLine = Math.floor(
        (cloneRef.current.offsetHeight - 20) /
          parseInt(getComputedStyle(elRef.current).lineHeight)
      ); //-20은 padding값

      const limit = lines || 0;
      toggleClamed(computedLine > limit);
    }
  }, [lines]);

  return (
    <div className={cx('content', { clamped: isClamped })}>
      <div className={cx('text-clone')} ref={cloneRef}>
        {text}
      </div>
      <div
        className={cx('text')}
        ref={elRef}
        style={{ WebkitLineClamp: lines }}>
        {text}
      </div>
      {isClamped && (
        <button
          className={cx('buttonMore')}
          onClick={() => toggleClamed(false)}
        />
      )}
    </div>
  );
};

const ReactLineClamp2 = () => {
  return (
    <>
      <h3>
        #2 <sub>clone - 3줄 말줄임</sub>
      </h3>
      {data.map((text, idx) => (
        <LineClampedText text={text} lines={3} key={idx} />
      ))}
    </>
  );
};

export default ReactLineClamp2;
