import Markdown from 'react-markdown';
import README from '/README.md';

const MainPage = () => (
  // layout 안의 children
  <div className="markdown">
    {/* 마크다운 문서 */}
    <Markdown>{README}</Markdown>
  </div>
);

export default MainPage;
