import React from 'react';
import { s3Url } from 'api/url';
import { IPrint } from 'interfaces';
import { useActions } from 'hooks/use-actions';

interface IProps {
  print: IPrint;
}

const PrintItem: React.FC<IProps> = ({ print }) => {
  const { toggleModal, fetchPrint } = useActions();
  const toggleDelete = () => toggleModal(true, 'DELETE_RESOURCE', print);

  const toggleEdit = async () => {
    const printToUpdate = await fetchPrint(print._id);
    toggleModal(true, 'EDIT_PRINT', printToUpdate);
  };

  const backgroundImage = `url(${s3Url}/${print.mainImage})`;
  const gridTemplateColumns = '15% 35% 20% 10% 10% 10%';
  const pubClassName = `isPub ${print.isPublished ? 'pub-true' : 'pub-false'}`;

  return (
    <>
      <div className='dash-item' style={{ gridTemplateColumns }}>
        <div className='dash-item__img' style={{ backgroundImage }}>
          <div className={pubClassName} />
          <div className='mobile-dash__btns'>
            <div onClick={toggleEdit}>Edit</div>
            <div onClick={toggleDelete}>Delete</div>
          </div>
        </div>
        <div className='dash-item__text'>{print.description}</div>
        <div className='dash-item__text'>{print.size}</div>
        <div className='dash-item__text'>{print.quantityInStock}</div>
        <div className='dash-btn' onClick={toggleEdit}>
          Edit
        </div>
        <div className='dash-btn' onClick={toggleDelete}>
          &#10060;
        </div>
      </div>
      <hr className='dash-item__border' />
    </>
  );
};
export default PrintItem;
