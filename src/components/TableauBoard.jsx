import React, { useEffect, useRef } from 'react';

export const TableauBoard = ({ tablero }) => {
  const ref = useRef(null);

  useEffect(() => {
    const initViz = () => {
      new window.tableau.Viz(ref.current, tablero.enlace);
    };

    initViz();
  }, [tablero]);

  return(
    <>
      <div className='mx-5' style={{backgroundColor: 'var(--mp-azul-5)', padding: '1rem', borderRadius: '20px'}}>
        <h4 className='w-100 text-center'>{tablero.nombre}</h4>
      </div>
      <div ref={ref} style={{ width: '100%', height: '800px', paddingLeft: '8%', paddingRight: '8%' }} />;
    </>
  ); 
};
