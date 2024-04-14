import { useEffect, useRef } from 'react';

export const SVGRender = ({ svgString }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = svgString;
    }
  }, [svgString]);

  return <svg ref={svgRef} />;
};
