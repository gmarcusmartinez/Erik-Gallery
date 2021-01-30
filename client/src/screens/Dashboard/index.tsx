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
    adminFetchZines,
    fetchBackgrounds,
    adminFetchProjects,
  } = useActions();
  const { items: backgrounds } = useTypedSelector((state) => state.backgrounds);
  const { items: projects } = useTypedSelector((state) => state.projects);
  const { items: prints } = useTypedSelector((state) => state.prints);
  const { items: zines } = useTypedSelector((state) => state.zines);

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
      case 'zines':
        return adminFetchZines();
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
            gridTemplateColumns='10% 31% 15% 7% 7% 7% 7%'
          />
        )}
        {resourceType === 'backgrounds' && (
          <Section
            resourceType='backgrounds'
            formName='ADD_BG'
            headers={headers.backgroundHeaders}
            items={backgrounds}
            gridTemplateColumns='10% 12% 12%'
          />
        )}
        {resourceType === 'zines' && (
          <Section
            resourceType='zines'
            formName='ADD_ZINE'
            headers={headers.zineHeaders}
            items={zines}
            gridTemplateColumns='10% 32% 8% 8% 8% 8% 8%'
          />
        )}
        {resourceType === 'projects' && (
          <Section
            resourceType='projects'
            formName={null}
            headers={headers.projectHeaders}
            items={projects}
            gridTemplateColumns='22% 18% 12% 12% 12% 12% 12%'
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
