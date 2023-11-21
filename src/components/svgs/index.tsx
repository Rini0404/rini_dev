import React from 'react';

interface SvgImageProps {
  SvgComponent?: React.ElementType;
}

const SvgImage: React.FC<SvgImageProps> = ({ SvgComponent }) => (
  <div>
    {SvgComponent && <SvgComponent />}
  </div>
);

export default SvgImage;
