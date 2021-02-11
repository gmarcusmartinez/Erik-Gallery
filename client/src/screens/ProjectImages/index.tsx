import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Img from './Img';
import Spinner from 'components/CommonComponents/Spinner';

const ProjectImages: React.FC = () => {
  const { adminFetchProject, toggleModal, saveImageOrder } = useActions();
  const { selectedItem, loading } = useTypedSelector(
    ({ projects }) => projects
  );
  const history = useHistory();
  const id = history.location.pathname.split('/')[3];

  const toggleAddImage = async () =>
    toggleModal(true, 'ADD_PROJECT_IMG', selectedItem);

  React.useEffect(() => {
    adminFetchProject(id);
  }, [id, adminFetchProject]);

  if (loading) return <Spinner message='Updating Project Images' />;
  return (
    <div className='dashboard-project-images'>
      <div className='dashboard-project-images__container'>
        {selectedItem &&
          selectedItem.images.map((imgUrl: string, i: number) => (
            <Img key={i} imgUrl={imgUrl} i={i} />
          ))}
      </div>
      <div className='add-resource-btn' onClick={toggleAddImage}>
        <span>&#43;</span>
      </div>
      <div
        className='image-order-btn'
        onClick={() => saveImageOrder(id, selectedItem.images)}
      >
        Save
      </div>
    </div>
  );
};
export default ProjectImages;
