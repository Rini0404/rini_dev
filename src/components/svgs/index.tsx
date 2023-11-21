import React from 'react';

interface SvgImageProps {
  SvgComponent?: React.ElementType;
}

const SvgImage: React.FC<SvgImageProps> = ({ SvgComponent  }) => (
  <div className="icons">
    {SvgComponent && <SvgComponent style={{ width: '100%', height: '100%', fill: "#fff"}} />}
  </div>
);

export default SvgImage;
