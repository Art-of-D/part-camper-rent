import { useEffect, useRef } from 'react';

export const SVGRender = ({ className, svgString }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = svgString;
    }
  }, [svgString]);

  return <div className={className} ref={svgRef}></div>;
};
