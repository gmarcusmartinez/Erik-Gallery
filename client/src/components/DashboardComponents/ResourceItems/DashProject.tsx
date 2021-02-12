import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';

interface IProps {
  project: IProject;
}

const ProjectItem: React.FC<IProps> = ({ project }) => {
  const { isPublished, title, _id } = project;
  const { toggleModal } = useActions();
  const history = useHistory();

  const toggleDelete = () => toggleModal(true, 'DELETE_RESOURCE', project);
  const toggleEdit = () => toggleModal(true, 'EDIT_PROJECT', project);

  const redirect = () => history.push(`/dashboard/project/${_id}`);
  const backgroundImage = `url(${s3Url}/${project.mainImage})`;
  const gridTemplateColumns = '15% 25% 40% 10% 10%';

  return (
    <>
      <div className='dash-item' style={{ gridTemplateColumns }}>
        <div className='dash-item__img' style={{ backgroundImage }}>
          <div className={`isPub ${isPublished ? 'pub-true' : 'pub-false'}`} />
          <div className='mobile-dash__btns'>
            <div onClick={redirect}>Images</div>
            <div onClick={toggleEdit}>Edit</div>
            <div onClick={toggleDelete}>&#10060;</div>
          </div>
        </div>
        <div className='dash-item__text pr' onClick={redirect}>
          {title}
        </div>
        <div className='dash-item__text'>{project.medium}</div>
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

export default ProjectItem;
