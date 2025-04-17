import { useEffect, useRef } from 'react';
//바닐라 자바스크립트로 작동하게 합니다.
const VanillaWrapper = ({
  title = '',
  subTitle = '',
  initiator,
}: {
  title?: string;
  subTitle?: string;
  initiator: (wrapper: HTMLDivElement) => void;
}) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const isInit = useRef(false);

  useEffect(() => {
    if (!isInit.current && !!wrapper.current) {
      initiator(wrapper.current);
      isInit.current = true;
    }
  }, [initiator]);

  return (
    <>
      {title && (
        <h3>
          {title}. Vanilla {subTitle && <sub>{subTitle}</sub>}
        </h3>
      )}
      <div ref={wrapper} />
    </>
  );
};

export default VanillaWrapper;
