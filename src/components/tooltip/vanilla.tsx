import VanillaWrapper from '../vanillaWrapper';
import cx from './cx';
import data from './data';

const initiator = (wrapper: HTMLDivElement) => {
  const $tooltips = data.map(({ id, title, des }) => {
    const $details = document.createElement('details');
    $details.classList.add(cx('details'));
    $details.setAttribute('data-tooltip', id);

    const $summary = document.createElement('summary');
    $summary.classList.add(cx('summary'));
    $summary.setAttribute('data-tooltip-summary', 'true');
    $summary.textContent = title;

    const $tooltip = document.createElement('div');
    $tooltip.classList.add(cx('tooltip'));
    $tooltip.textContent = des;

    $details.append($summary, $tooltip);
    return $details;
  });
  /* 

//<ReactTooltip3 />에 같은 코드가 있어 주석처리함
  const closeAllTooltip = (e: Event) => {
    const target = e.target as HTMLElement;
    document.querySelectorAll('[data-tooltip]').forEach((el) => {
      if (el !== target.parentElement) el.removeAttribute('open');
    });
  };
  window.addEventListener('click', closeAllTooltip);
 */
  wrapper.append(...$tooltips);
};

const VanillaTooltip = () => (
  <VanillaWrapper title="#5" initiator={initiator} />
);
export default VanillaTooltip;
