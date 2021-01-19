import React from 'react';
import { IPrint } from 'interfaces';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import ViewProductBtn from 'components/CommonComponents/ViewProductBtn';

interface IProps {
  item: IPrint;
}

const PrintItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, description, size, quantityInStock, price } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  const { toggleLightbox, toggleCart, toggleModal } = useActions();
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);
  const handleToggleViewPrint = () => {
    toggleCart(false);
    toggleModal(true, 'VIEW_ITEM', item);
  };

  return (
    <div className='print-item'>
      <div
        className='print-item__img'
        style={{ backgroundImage }}
        onClick={handleToggleLightbox}
      >
        <ViewProductBtn
          breakpoint='btn-tablet'
          quantityInStock={quantityInStock}
          toggleViewPrint={handleToggleViewPrint}
        />
      </div>
      <p className='print-item__description'>{description}</p>
      <p className='print-item__size'>{size}</p>
      <p className='print-item__price'>{price}&euro;</p>
      <ViewProductBtn
        quantityInStock={quantityInStock}
        toggleViewPrint={handleToggleViewPrint}
      />
    </div>
  );
};

export default PrintItem;
