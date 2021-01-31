import { IZine } from 'interfaces';
import React from 'react';
import { useActions } from 'hooks/use-actions';

interface IProps {
  item: IZine;
}

const ZineAttrs: React.FC<IProps> = ({ item }) => {
  const { toggleModal } = useActions();
  const handleToggleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleModal(true, 'PREVIEW_ZINE', item, true);
  };

  return (
    <div className='item-attrs'>
      <div className='item-attrs__wrapper'>
        <p>{item.title}</p>
        <div className='item-attrs__btn' onClick={(e) => handleToggleModal(e)}>
          Preview
        </div>
      </div>
    </div>
  );
};

export default ZineAttrs;
