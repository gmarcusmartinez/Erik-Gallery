import React from 'react';
import { useActions } from 'hooks/use-actions';
import { IPrint, IZine, IBackground } from 'interfaces';
import BackgroundItem from '../ResourceItems/DashBG';
import PrintItem from '../ResourceItems/DashPrint';
import ZineItem from '../ResourceItems/DashZine';
import ProjectItem from '../ResourceItems/DashProject';

interface IProps {
  resourceType: string;
  formName: string | null;
  headers: { text: string }[];
  items: IPrint[] | IZine[] | IBackground[] | any;
  gridTemplateColumns: string;
}

const Section: React.FC<IProps> = (props) => {
  const { toggleModal } = useActions();
  const renderAddForm = () => toggleModal(true, props.formName, null);
  const list = renderDashItem(props.resourceType, props.items);
  const gridTemplateColumns = props.gridTemplateColumns;

  return (
    <div className='resources'>
      <div className='resource-section'>
        <div className='resource__headers' style={{ gridTemplateColumns }}>
          {renderHeaders(props.headers)}
        </div>
        {list}
      </div>
      {props.formName && (
        <div className='add-resource-btn' onClick={renderAddForm}>
          <span>&#43;</span>
        </div>
      )}
    </div>
  );
};

export default Section;

const renderHeaders = (headers: { text: string }[]) =>
  headers.map((h, i) => <div key={i}>{h.text}</div>);

function renderDashItem(resourceType: string, items: any[]) {
  switch (resourceType) {
    case 'backgrounds':
      return items.map((item) => <BackgroundItem key={item._id} bg={item} />);
    case 'prints':
      return items.map((item) => <PrintItem key={item._id} print={item} />);
    case 'projects':
      return items.map((item) => <ProjectItem key={item._id} project={item} />);
    case 'zines':
      return items.map((item) => <ZineItem key={item._id} zine={item} />);
  }
}
