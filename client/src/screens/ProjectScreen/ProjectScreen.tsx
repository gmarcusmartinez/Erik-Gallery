import React from 'react';
import { projects } from './data';
import Lightbox from '../../components/Lightbox/Lightbox';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

interface ProjectScreenProps {
  match: {
    params: {
      id: string;
    };
  };
}

const ProjectScreen: React.FC<ProjectScreenProps> = ({ match }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [displayLightbox, setDisplayLightbox] = React.useState({
    current: 0,
    isOpen: false,
  });

  const project = projects.find((p) => p.id === match.params.id);
  const { title, images, description } = project!;

  let list = images.map((i, index) => (
    <img
      className={`project-image ${selectedItem === index ? 'current' : ''}`}
      key={index}
      src={i.small}
      alt='project'
      onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
    />
  ));

  return (
    <div className='project'>
      <div className='project__title'>{title}</div>
      <div className='image-container'>
        <div className='project__images'>{list}</div>
        <div className='selected-item'>
          <img
            className='selected-item__img'
            alt='project'
            src={images[selectedItem].small}
          ></img>
          <ImageSlider
            items={images}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
        </div>
      </div>
      <div className='project__description'>{description}</div>
      {displayLightbox.isOpen ? (
        <Lightbox
          setDisplayLightbox={setDisplayLightbox}
          current={displayLightbox.current}
          collection={images}
        />
      ) : null}
    </div>
  );
};

export default ProjectScreen;
