import React, { FC } from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  root: string;
  pages: number;
}
const Pagination: FC<IProps> = ({ root, pages }) => {
  const pageNumbers: any[] = [];
  for (let i = 1; i <= pages; i++) pageNumbers.push(i);

  const history = useHistory();
  const active = +history.location.pathname.split("/")[2];

  const handleClick = (p: number) => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    history.push(`/${root}/${p}`);
  };

  const renderPageNumbers = () => {
    return pageNumbers.map((p) => (
      <div className="page-number" key={p} onClick={() => handleClick(p)}>
        <span className={p === active ? "active" : ""}>{p}</span>
      </div>
    ));
  };

  return pages > 1 ? (
    <div className="pagination">{renderPageNumbers()}</div>
  ) : null;
};

export default Pagination;
