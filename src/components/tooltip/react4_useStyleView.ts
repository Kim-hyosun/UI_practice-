import { useLayoutEffect, useState, RefObject } from 'react';
import { useViewportRect } from './viewportContext';

type Style = Partial<Record<'left' | 'right' | 'top' | 'bottom', number>>;
type PositionKey = 'left' | 'right' | 'top' | 'bottom';
type Position = Partial<Record<PositionKey, string | number>>;

const useStyleView = (
  wrapperRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  position: Position
) => {
  const viewportRect = useViewportRect();
  const { top, left, width, height } = viewportRect;
  const [style, setStyle] = useState<Style>({});

  useLayoutEffect(() => {
    if (!wrapperRef.current || !targetRef.current) return;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();
    const verticalKey =
      wrapperRect.bottom + targetRect.height < height ? 'top' : 'bottom';

    const horizontalKey =
      wrapperRect.right + targetRect.width < width ? 'left' : 'right';

    setStyle({
      [verticalKey]: position[verticalKey] || 0,
      [verticalKey === 'top' ? 'bottom' : 'top']: 'auto',
      [horizontalKey]: position[horizontalKey] || 0,
      [horizontalKey === 'left' ? 'right' : 'left']: 'auto',
    });
  }, [top, left, width, height, wrapperRef, targetRef, position]);

  return style;
};

export default useStyleView;
