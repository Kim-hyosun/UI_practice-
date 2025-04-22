# [ UI요소 만들기 강의 코드 - 보일러플레이트 ]

## 디렉토리 구조

- `app`: app 전반에 대한 기본 view 제공
  - `[...item]/page.tsx` : 동적라우팅
  - `layout.tsx`: 기본적인 html 구성
  - `page.tsx`: `/` 페이지
  - `global.scss`
  - `gnb.tsx`: 좌측 메뉴 컴포넌트
- `components`
  - `vanillaWrapper.ts`: 독립적인 VanillaJS 환경구성하는 wrapper
- `routes.ts`: route 구성

## 1. 아코디언 메뉴

### detailsTag.tsx / search.tsx에서의 속성적용

❗ 문제 상황

1. HTML 속성의 자동 보정 (강제 캐스팅)
   React에서는 HTML 속성을 내부적으로 JS 속성으로 변환해 처리합니다.
   예를 들어, 같은 경우 name 속성이 React 컴포넌트의 name prop으로 인식되어 원래의 HTML 동작이 제한될 수 있습니다. (datails에 name 속성은 잘 인식이 되긴했음)

2. hidden 속성에 제한된 타입
   React에서 hidden 속성은 boolean 또는 undefined만 허용합니다.
   하지만 검색 노출을 위해 `<div hidden="until-found">...`처럼 문자열 값을 사용해야 할 때, React는 이를 허용하지 않았음

- 강의에서는 HIDDEN으로 처리함(<-이것도 적용 잘 됨)
- my custom : Ref를 통한 속성 직접 조작

```
// ref를 통해 DOM에 직접 접근
const descRef = useRef<HTMLDivElement>(null);

// setAttribute로 적용시 정상적으로 작동
if (descRef.current) {
  !current
    ? descRef.current.setAttribute('hidden', 'until-found')
    : descRef.current.removeAttribute('hidden');
}
```

-> beforematch이벤트와 hidden속성이 잘 적용되었다.
<br/>
-> React가 HTML 속성을 의도와 다르게 처리할 때는 ref + setAttribute/removeAttribute

## 2. 탭메뉴

- 탭메뉴는 주로 아래와 같이 구성되는 경우가 많다.

```
<ul><Tab/><Tab/><Tab/></ul>
<Description/>
<Description/>
<Description/>
```

- 스크린리더기를 통해서 화면을 보아야 하는 사람들은 제목1,제목2,제목3, 설명1,설명2,설명3으로 읽게되기 때문에 웹접근성에 좋지 않다.
- 이 때문에 아래와 같은 구조로 /tabMenu/react3개선

```
<ul>
  <li>
    <Tab/>
    <Description/>
  <li/>
    <li>
    <Tab/>
    <Description/>
  <li/>
    <li>
    <Tab/>
    <Description/>
  <li/>
</ul>

```

## 3. 툴팁

- 툴팁박스가 하나만 열리도록 처리하기 위해 useContext사용해보기

#### useContext 사용해보기

- 1. createContext로 context객체 생성하기

```
import { createContext } from 'react';
const MyContext = createContext(defaultValue);
    //defaultValue는 Provider를 사용하지 않을때의 기본값
    //MyContext는 Provider와 Consumer를 포함하는 객체
```

- 2. Provider로 값을 공급하기

```
<MyContext.Provider value={anyValue}> //value는 하위 트리에게 공유할 상태 데이터
  <AnyComponent />
</MyContext.Provider>
```

- 3. useContext의 값을 꺼내쓸때는 Provider에서 가져오면됨

```
import {useContext} from 'react';
const 값가져와 = useContext(MyContext)

```
