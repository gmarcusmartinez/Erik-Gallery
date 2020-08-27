import React from 'react';

interface IProps {
  pages: number[];
}

const Flipbook: React.FC<IProps> = (arr) => {
  const [visiblePages, setVisiblePages] = React.useState(3);

  return <div></div>;
};

export default Flipbook;
