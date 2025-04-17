import VanillaWrapper from '../vanillaWrapper';
import cx from './cx';
import data from './data';

const itemBuilder = ({
  id,
  title,
  des,
}: {
  id: string;
  title: string;
  des: string;
}) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('item'), cx('item3'));

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $desc = document.createElement('div');
  $desc.classList.add(cx('description'));
  $desc.textContent = des;

  $li.append($tab, $desc);
  $li.setAttribute('data-id', id);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null; //useState역할 - 이전 클릭요소

  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const handleClick = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;

    //[선생님버전] const targetId = $el.parentElement!.dataset.id;
    //if(!targetId) return ;
    // !.는 ts가 parentElement를 null이라고 추정하지 않도록 하는 것

    //[내버전]
    const targetId = $el.parentElement?.dataset.id ?? null;
    //?.는 parentElement가 존재할 때 dataset.id에 접근하도록 해 줌
    //??는 .dataset.id가 null이나 undefined이면 ??의 오른쪽 값을 반환 = 기본값 설정

    currentId = targetId === currentId ? null : targetId; //클릭요소랑 그 element의 id가 같으면 currentId를 안바꿈

    $itemlist.forEach(($item) => {
      $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
      //toggle(이걸해라, 조건이 참이면)
    });
  };

  const $itemlist = data.map(itemBuilder);
  $ul.append(...$itemlist);
  $ul.addEventListener('click', handleClick);

  wrapper.append($ul);
  ($itemlist[0].children[0] as HTMLElement).click(); //첫 tab을 클릭한것으로 처리
};

const VanillaAccordion = () => (
  <VanillaWrapper title="4" initiator={initiator} />
);

export default VanillaAccordion;
