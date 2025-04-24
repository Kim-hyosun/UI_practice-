import ViewportContextProvider from './viewportContext';
import cx from './cx';
import { useRef } from 'react';
import data from './data';
import useStyleView from './react4_useStyleView';

const tooltipPosition = {
  top: '100%',
  bottom: 20,
  left: 0,
  right: 0,
};

const Tooltip = ({
  id,
  title,
  des,
}: {
  id: string;
  title: string;
  des: string;
}) => {
  const wrapperRef = useRef<HTMLDetailsElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const style = useStyleView(wrapperRef, targetRef, tooltipPosition);

  return (
    <details className={cx('details')} data-tooltip={id} ref={wrapperRef}>
      <summary className={cx('summary')} data-tooltip-summary>
        {title}
      </summary>
      <div
        className={cx('tooltip')}
        onClick={(e) => e.stopPropagation()}
        ref={targetRef}
        style={style}>
        {des}
      </div>
    </details>
  );
};

const ReactTooltip4 = () => {
  return (
    <ViewportContextProvider>
      <h3>#4</h3>
      {data.map((i) => (
        <Tooltip {...i} key={i.id} />
      ))}
    </ViewportContextProvider>
  );
};

export default ReactTooltip4;
