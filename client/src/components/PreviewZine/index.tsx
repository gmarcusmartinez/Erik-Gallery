import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ZinePage from './ZinePage';

const PreviewZine: React.FC = () => {
  const { data } = useTypedSelector((state) => state.modal);
  const [selectedPage, setSelectedPage] = React.useState(0);

  const zinePages = data.images.map((page: string, i: number) => (
    <ZinePage page={page} i={i} />
  ));

  const next = () => {
    if (selectedPage === zinePages.length - 1) setSelectedPage(0);
    else setSelectedPage(selectedPage + 1);
  };

  const previous = () => {
    if (selectedPage === 0) setSelectedPage(zinePages.length - 1);
    else setSelectedPage(selectedPage - 1);
  };

  return (
    <div className='preview-zine'>
      <div className='next-btn' onClick={next}>
        &rsaquo;
      </div>
      <div className='previous-btn' onClick={previous}>
        &lsaquo;
      </div>
      <div className='zine-pages'>{zinePages}</div>
      <div className='selected-zine-page'>{zinePages[selectedPage]}</div>
    </div>
  );
};

export default PreviewZine;
