import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import ZinePage from './ZinePage';

const DashboardZine: React.FC = () => {
  const { deleteZinePage, fetchZine, toggleModal } = useActions();
  const { selectedItem } = useTypedSelector((state) => state.zines);
  const history = useHistory();
  const id = history.location.pathname.split('/')[3];

  const toggleAddImage = async () => toggleModal(true, 'ADD_IMG', selectedItem);
  const handleDeletePage = (imgStr: string) =>
    deleteZinePage(selectedItem._id, imgStr);

  React.useEffect(() => {
    fetchZine(id);
  }, [id, fetchZine]);

  return (
    <div className='dashboard-zine'>
      <div className='dashboard-zine__pages'>
        {selectedItem &&
          selectedItem.images.map((imgStr: string) => (
            <ZinePage key={imgStr} cb={handleDeletePage} imgStr={imgStr} />
          ))}
      </div>
      <div className='add-resource-btn' onClick={toggleAddImage}>
        <span>&#43;</span>
      </div>
    </div>
  );
};
export default DashboardZine;
