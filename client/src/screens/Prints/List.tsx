import PrintItem from 'components/PrintItem';
import { IPrint } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import React from 'react';

const PrintsList: React.FC = () => {
  const { items } = useTypedSelector(({ prints }) => prints);
  return items && items.map((p: IPrint) => <PrintItem key={p._id} item={p} />);
};
export default PrintsList;
