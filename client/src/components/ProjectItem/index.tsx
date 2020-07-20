import React from 'react';
import Lightbox from 'components/Lightbox/Lightbox';
import ImageSlider from 'components/ImageSlider/ImageSlider';

interface IProps {
  project: {
    id: string;
    images: { small: string }[];
    title: string;
  };
}

const ProjectItem: React.FC<IProps> = ({ project }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const defaultLbState = { current: 0, isOpen: false };
  const [displayLightbox, setDisplayLightbox] = React.useState(defaultLbState);

  const { title, images } = project!;
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
        <div className='selected-image'>
          <img
            className='selected-image__img'
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

export default ProjectItem;
