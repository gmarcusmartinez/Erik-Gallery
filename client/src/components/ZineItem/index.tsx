import React from 'react';
import { s3Url } from 'api/url';
import { IZine } from 'interfaces';
import { useActions } from 'hooks/use-actions';

interface IProps {
  item: IZine;
}

const ZineItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, title } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const { toggleModal } = useActions();

  const togglePreview = () => toggleModal(true, 'PREVIEW_ZINE', item, true);

  return (
    <div className='zine-item'>
      <div className='zine-item__img' style={{ backgroundImage }}></div>
      <div className='zine-item__details'>
        <p className='zine-item__title'>{title}</p>
        <div className='zine-preview-btn' onClick={togglePreview}>
          Preview
        </div>
      </div>
    </div>
  );
};

export default ZineItem;
