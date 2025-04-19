import cx from './cx';
import ReactTabManu1 from './react1';
import ReactTabManu2 from './react2';
import ReactTabManu3 from './react3';

const TabMenus = () => {
  // cx('TabMenus')는 해당 태그에 class="TabMenus"를 한것
  return (
    <div className={cx('TabMenus')}>
      <h2>텝메뉴</h2>
      <ReactTabManu1 />
      <ReactTabManu2 />
      <ReactTabManu3 />
    </div>
  );
};

export default TabMenus;
