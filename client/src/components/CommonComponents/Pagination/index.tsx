import React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  root: string;
  pages: number;
}
const Pagination: React.FC<IProps> = ({ root, pages }) => {
  const pageNumbers: number[] = [];
  const history = useHistory();
  const active = +history.location.pathname.split('/')[2];
  for (let i = 1; i <= pages; i++) pageNumbers.push(i);

  const handleClick = (p: number) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    history.push(`/${root}/${p}`);
  };

  return (
    <div className='pagination'>
      {pages > 1 &&
        pageNumbers.map((p) => (
          <div className='page-number' key={p} onClick={() => handleClick(p)}>
            <span className={p === active ? 'active' : ''}>{p}</span>
          </div>
        ))}
    </div>
  );
};
export default Pagination;
