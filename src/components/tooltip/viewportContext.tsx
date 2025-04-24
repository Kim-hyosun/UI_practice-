import {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore,
} from 'react';

//상태의 type을 정의 : DOMRect에서 일부 값만 골라오기
type Rect = Pick<DOMRect, 'left' | 'top' | 'width' | 'height'> & {
  scrollHeight: number;
};

const DefaultRect: Rect = {
  //context상태의 기본값
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  scrollHeight: 0,
};

const rectKeys: (keyof Rect)[] = [
  'scrollHeight',
  'left',
  'top',
  'width',
  'height',
];

const isSameRect = (prev: Rect, next: Rect) => {
  return rectKeys.every((k) => prev?.[k] === next?.[k]); //prev랑 next내부비교 일치시 true
};

const getViewportRect = (() => {
  //새로운위치 갱신함수
  let stored: Rect = DefaultRect; //현재위치 저장변수
  return () => {
    const el = typeof document !== 'undefined' && document.scrollingElement;
    if (!el) return stored;
    const { left, top, width, height } = el.getBoundingClientRect(); //현재위치 읽어오고
    const newRect = { left, top, width, height, scrollHeight: el.scrollHeight };
    if (newRect && !isSameRect(stored, newRect)) stored = newRect; //새로운위치가 있고, 기존위치랑 새로운위치가 다르면 stored를 새로운 위치로 교체
    return stored;
  };
})();

const subscribe = (callback: () => void) => {
  const resizeObserver = new ResizeObserver(callback);
  window.addEventListener('scroll', callback); //스크롤 할때마다 callback실행
  resizeObserver.observe(document.body); //body의 크기가 바뀔때마다 callback실행

  return () => {
    //Clearup
    window.removeEventListener('scroll', callback);
    resizeObserver.disconnect();
  };
};

const ViewportContext = createContext<Rect>(DefaultRect);

const ViewportContextProvider = ({ children }: { children: ReactNode }) => {
  const viewportRect = useSyncExternalStore(subscribe, getViewportRect);
  return (
    <ViewportContext.Provider value={viewportRect}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContextProvider;

export const useViewportRect = () => useContext(ViewportContext);
