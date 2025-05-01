export const measureLines = (el: HTMLElement, val: string) => {
  if (!el || !val) return 0;
  const canvas = document.createElement('canvas');
  const canvasContext: CanvasRenderingContext2D = canvas.getContext('2d')!;
  const style = window.getComputedStyle(el);
  canvasContext.font = `${style.getPropertyValue(
    'font-style'
  )} ${style.getPropertyValue('font-weight')} ${style.getPropertyValue(
    'font-size'
  )} ${style.getPropertyValue('font-family')}`;
  const measuredLines = val.split('\n').reduce((acc, cur) => {
    const lineCount = Math.max(
      Math.ceil(canvasContext.measureText(cur).width / el.offsetWidth),
      1
    );
    return acc + lineCount;
    //text 한 줄로 나열했을때 길이  / text박스의 가로길이 = text가 몇줄인지 확인가능
    //0줄일리 없게 max로 기본값 1줄유지
  }, 0);
  return measuredLines;
};
