import React from 'react';
import { s3Url } from 'api/url';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { Select } from 'components/CustomInputs';
import { IProduct } from 'interfaces';
import { mapQuantityToOptions } from 'utils';

const ItemDetail: React.FC = () => {
  const [qty, setQty] = React.useState(1);
  const { addItemToCart } = useActions();
  const { data } = useTypedSelector(({ modal }) => modal);
  const { description, title, mainImage, price, quantityInStock } = data!;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const options = mapQuantityToOptions(quantityInStock);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setQty(+e.target.value);

  const handleAddToCart = (item: IProduct, qty: number) => {
    const cartItem = { ...item, quantity: qty };
    addItemToCart(cartItem);
  };

  return (
    <div className='item-detail'>
      <div className='item-detail__img' style={{ backgroundImage }} />
      <div className='item-detail__info'>
        {description && <p className='item-detail__text'>{description}</p>}
        {title && <p className='item-detail__text'>{title}</p>}
        <p className='item-detail__text'>
          <span>{price}&euro;</span>
          <span>(vat Included)</span>
        </p>
        <p className='item-detail__text'>{data.size ? data.size : null}</p>
        <Select
          label='Select Quantity'
          name='qty'
          value={qty}
          onChange={handleChange}
          options={options}
        />
        <div
          className='item-detail__btn'
          onClick={() => handleAddToCart(data, qty)}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
