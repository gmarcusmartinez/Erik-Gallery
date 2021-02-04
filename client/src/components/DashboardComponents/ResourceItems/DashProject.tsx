import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { s3Url } from 'api/url';

interface IProps {
  project: any;
}

const ProjectItem: React.FC<IProps> = ({ project }) => {
  const { toggleModal, fetchProject } = useActions();
  const toggleDelete = () => toggleModal(true, 'DELETE_RESOURCE', project);

  const toggleEdit = async (formType: string) => {
    const projectToUpdate = await fetchProject(project._id);
    toggleModal(true, formType, projectToUpdate);
    return;
  };

  const backgroundImage = `url(${s3Url}/${project.mainImage})`;
  const gridTemplateColumns = '15% 25% 40% 10% 10%';
  const pubClassName = `isPub ${
    project.isPublished ? 'pub-true' : 'pub-false'
  }`;

  const history = useHistory();
  const handleRedirect = () =>
    history.push(`/dashboard/project/${project._id}`);

  const handleToggleEdit = () => toggleEdit('EDIT_PROJECT');

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
        <div
          className='dash-item__text project-redirect'
          onClick={handleRedirect}
        >
          {project.title}
        </div>
        <div className='dash-item__text'>{project.medium}</div>
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

export default ProjectItem;
