import React from 'react';
import { s3Url } from 'api/url';

interface IProps {
  i: number;
  page: string;
}

const ZinePage: React.FC<IProps> = ({ i, page }) => {
  const imageUrl = `${s3Url}/${page}`;
  return (
    <img key={i} src={imageUrl} className={`preview-zine__image`} alt='page' />
  );
};

export default ZinePage;
