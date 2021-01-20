import React from 'react';
import { IZine } from 'interfaces';
import { useHistory } from 'react-router-dom';
import { toTwoDecimals } from 'utils';
import { useActions } from 'hooks/use-actions';

interface IProps {
  zine: IZine;
}

const ZineItem: React.FC<IProps> = ({ zine }) => {
  const { toggleModal, fetchZine } = useActions();
  const toggleDelete = () => toggleModal(true, 'DELETE_RESOURCE', zine);

  const toggleEdit = async (formType: string) => {
    const zineToUpdate = await fetchZine(zine._id);
    toggleModal(true, formType, zineToUpdate);
  };

  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${zine.mainImage})`;
  const gridTemplateColumns = '10% 32% 8% 8% 8% 8% 8% 6% 6% 6%';
  const { price, netPrice, vatPrice, quantityInStock } = zine;
  const pubClassName = `isPub ${zine.isPublished ? 'pub-true' : 'pub-false'}`;

  const history = useHistory();
  const handleRedirect = () => history.push(`/dashboard/zine/${zine._id}`);
  const handleToggleEdit = () => toggleEdit('EDIT_ZINE');

  return (
    <>
      <div className='dash-item' style={{ gridTemplateColumns }}>
        <div className='dash-item__img' style={{ backgroundImage }}>
          <div className={pubClassName}></div>
          <div className='mobile-dash__btns'>
            <div className='mobile-dash__btn' onClick={handleRedirect}>
              Images
            </div>
            <div className='mobile-dash__btn' onClick={handleToggleEdit}>
              Edit
            </div>
            <div className='mobile-dash__btn' onClick={toggleDelete}>
              &#10060;
            </div>
          </div>
        </div>
        <div className='dash-item__text'>{zine.title}</div>
        <div className='dash-item__text'>{toTwoDecimals(price)}&euro;</div>
        <div className='dash-item__text'>{toTwoDecimals(netPrice)}&euro;</div>
        <div className='dash-item__text'>{toTwoDecimals(vatPrice)}&euro;</div>
        <div className='dash-item__text'>{quantityInStock}</div>
        <div className='dash-btn' onClick={handleRedirect}>
          Images
        </div>
        <div className='dash-btn' onClick={handleToggleEdit}>
          Edit
        </div>
        <div className='dash-btn' onClick={toggleDelete}>
          &#10060;
        </div>
      </div>
      <hr className='dash-item__border'></hr>
    </>
  );
};

export default ZineItem;
