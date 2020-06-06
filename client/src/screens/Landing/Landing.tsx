import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { projects } from '../../data';

const Landing = () => {
  const [focus, setFocus] = React.useState({ _id: '', isFocused: false });

  let list = projects.map((p: any) => (
    <ProjectItem
      key={p._id}
      _id={p._id}
      img={p.mainImg}
      title={p.title}
      focus={focus}
      setFocus={setFocus}
    />
  ));

  return (
    <div className='landing'>
      <Sidenav setFocus={setFocus} />
      <div className='projects-container'>{list}</div>
    </div>
  );
};

export default Landing;
