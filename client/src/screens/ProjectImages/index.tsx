import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Img from './Img';

const ProjectImages: React.FC = () => {
  const { deleteProjectImage, adminFetchProject, toggleModal } = useActions();
  const { selectedItem } = useTypedSelector(({ projects }) => projects);
  const history = useHistory();
  const id = history.location.pathname.split('/')[3];

  const toggleAddImage = async () =>
    toggleModal(true, 'ADD_PROJECT_IMG', selectedItem);

  const handleDeletePage = (imgStr: string) =>
    deleteProjectImage(selectedItem._id, imgStr);

  React.useEffect(() => {
    adminFetchProject(id);
  }, [id, adminFetchProject]);

  return (
    <div className='dashboard-project-images'>
      <div className='dashboard-project-images__container'>
        {selectedItem &&
          selectedItem.images.map((imgStr: string) => (
            <Img key={imgStr} cb={handleDeletePage} imgStr={imgStr} />
          ))}
      </div>
      <div className='add-resource-btn' onClick={toggleAddImage}>
        <span>&#43;</span>
      </div>
    </div>
  );
};
export default ProjectImages;
