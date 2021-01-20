import React from 'react';
import ZineItem from 'components/ZineItem';
import { IZine } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ZinesList: React.FC = () => {
  const { items } = useTypedSelector((state) => state.zines);
  const list = items.map((p: IZine) => <ZineItem key={p._id} item={p} />);
  return <>{list}</>;
};

export default ZinesList;
