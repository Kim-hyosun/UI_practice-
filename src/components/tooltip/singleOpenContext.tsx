import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useContext,
} from 'react';

const SingleOpenContext = createContext<
  [string | null, Dispatch<SetStateAction<string | null>>]
>([null, () => {}]); //[현재 열려있는 툴팁의  ID, <-ID를 바꾸는 디스패치함수]

export const SingleOpenContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const state = useState<string | null>(null); //state를 전역으로 공유하기위해 선언
  return (
    <SingleOpenContext.Provider value={state}>
      {/*children에 state값을 공유*/}
      {children}
    </SingleOpenContext.Provider>
  );
};

export const useSingleOpen = (id: string) => {
  //Hook에서 현재 열린 ID인지 체크하고 열기위한 dispatch 함수설정
  const [currentId, dispatch] = useContext(SingleOpenContext);
  return [id === currentId, dispatch] as const;
};
