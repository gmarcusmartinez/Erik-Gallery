import React from 'react';
import * as headers from './headers';
import Section from 'components/DashboardComponents/Section';
import SideNavTrigger from './SideNavTrigger';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';

const Dashboard: React.FC = () => {
  const [sidenavOpen, setSideNavOpen] = React.useState(true);
  const [resourceType, setResourceType] = React.useState('');
  const {
    adminFetchPrints,
    fetchBackgrounds,
    adminFetchProjects,
  } = useActions();
  const { items: backgrounds } = useTypedSelector((state) => state.backgrounds);
  const { items: projects } = useTypedSelector((state) => state.projects);
  const { items: prints } = useTypedSelector((state) => state.prints);

  const sidenavClass = sidenavOpen ? 'sidenav-open' : 'sidenav-closed';
  const sidenavLinks = headers.fetchResourceLinks.map((l, i) => (
    <div
      key={i}
      className='dashboard__sidenav__link'
      onClick={() => handleClick(l.value)}
    >
      {l.text}
    </div>
  ));

  const handleClick = (resource: string) => {
    setSideNavOpen(false);
    setResourceType(resource);
    switch (resource) {
      case 'prints':
        return adminFetchPrints();
      case 'backgrounds':
        return fetchBackgrounds();
      case 'projects':
        return adminFetchProjects();
    }
  };

  return (
    <div className='dashboard'>
      <div className='dashboard__header'>
        <span className='dashboard__title'>Admin Dashboard</span>
        <SideNavTrigger cb={setSideNavOpen} bool={!sidenavOpen} />
      </div>
      <div className={`dashboard__sidenav ${sidenavClass}`}>
        <div className='dashboard__sidenav__links'>{sidenavLinks}</div>
      </div>
      <div className='dashboard__resources'>
        {resourceType === 'prints' && (
          <Section
            resourceType='prints'
            formName='ADD_PRINT'
            headers={headers.printHeaders}
            items={prints}
            gridTemplateColumns='15% 35% 20% 10%'
          />
        )}
        {resourceType === 'backgrounds' && (
          <Section
            resourceType='backgrounds'
            formName='ADD_BG'
            headers={headers.backgroundHeaders}
            items={backgrounds}
            gridTemplateColumns='15%'
          />
        )}
        {resourceType === 'projects' && (
          <Section
            resourceType='projects'
            formName='ADD_PROJECT'
            headers={headers.projectHeaders}
            items={projects}
            gridTemplateColumns='15% 25% 40%'
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
