import VanillaWrapper from '../vanillaWrapper';
import cx from './cx';
import data from './data';

const buildTabMenu = ({ id, title }: { id: string; title: string }) => {
  const $li = document.createElement('li');
  $li.classList.add(cx('tab'));
  $li.textContent = title;
  $li.setAttribute('data-id', id);
  return $li;
};

const buildDesc = ({ id, des }: { id: string; des: string }) => {
  const $div = document.createElement('div');
  $div.classList.add(cx('description'));
  $div.textContent = des;
  return $div;
};
const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string = data[0].id;
  const $container = document.createElement('div');
  $container.classList.add(cx('container'), cx('tabMenu2'));

  const $tabUl = document.createElement('ul');
  $tabUl.classList.add(cx('tabList'));

  const $tabList = data.map(buildTabMenu);
  const $desc = data.map(buildDesc);

  $tabUl.append(...$tabList);
  $container.append($tabUl, ...$desc);

  const clickHandler = (e: Event) => {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;
    currentId = $el.dataset.id ?? data[0].id;
    $tabList.forEach(($item, idx) => {
      $item.classList.toggle(cx('current'), currentId === $item.dataset.id);
      $desc[idx].classList.toggle(
        cx('current'),
        currentId === $item.dataset.id
      );
    });
  };
  $tabUl.addEventListener('click', clickHandler);
  wrapper.append($container);
  $tabList[0].click(); //첫번째 탭이 눌려있도록 clickHandler호출
};

const VanillaTabManu = () => {
  return <VanillaWrapper title="#4" initiator={initiator} />;
};

export default VanillaTabManu;
