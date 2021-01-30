import React from 'react';
import { s3Url } from 'api/url';
import { IBackground } from 'interfaces';
import { useActions } from 'hooks/use-actions';

interface IProps {
  bg: IBackground;
}

const BackgroundItem: React.FC<IProps> = ({ bg }) => {
  const { setActive, toggleModal } = useActions();
  const toggleDelete = () => toggleModal(true, 'DELETE_RESOURCE', bg);
  const handleSetActive = () => setActive(bg._id);

  const backgroundImage = `url(${s3Url}/${bg.mainImage})`;
  const gridTemplateColumns = '15% 15% 15%';
  const pubClassName = `isPub ${bg.active ? 'pub-true' : 'pub-false'}`;

  return (
    <div className='dash-item' style={{ gridTemplateColumns }}>
      <div className='dash-item__img' style={{ backgroundImage }}>
        <div className={pubClassName}></div>
        <div className='mobile-dash__btns'>
          <div className='mobile-dash__btn' onClick={handleSetActive}>
            Set Active
          </div>
          <div className='mobile-dash__btn' onClick={toggleDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className='dash-btn' onClick={handleSetActive}>
        Set Active
      </div>
      <div className='dash-btn' onClick={toggleDelete}>
        &#10060;
      </div>
    </div>
  );
};

export default BackgroundItem;
