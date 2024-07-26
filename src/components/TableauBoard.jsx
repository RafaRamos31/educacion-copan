import React, { useEffect, useRef } from 'react';

export const TableauBoard = ({ url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const initViz = () => {
      new window.tableau.Viz(ref.current, url);
    };

    initViz();
  }, [url]);

  return <div ref={ref} style={{ width: '100%', height: '800px', paddingLeft: '8%', paddingRight: '8%' }} />;
};
