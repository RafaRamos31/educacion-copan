import React, { useEffect } from 'react';
import tableauSoftware  from 'tableau-api';

const TableauDashboard = ({urlTablero}) => {
  
  useEffect(() => {
    const initTableau = (urlTablero) => {
      const containerDiv = document.getElementById('tableauContainer');
      const url = urlTablero; // Reemplaza con la URL del tablero que copiaste de Tableau
      const options = {
        hideTabs: true,
        hideToolbar: true,
      };
      new tableauSoftware.Viz(containerDiv, url, options);
    };

    initTableau(urlTablero);

    // Limpia el componente antes de desmontarlo
    return () => {
      const containerDiv = document.getElementById('tableauContainer');
      containerDiv.innerHTML = ''; // Limpia el contenido del contenedor antes de desmontar
    };
  }, [urlTablero]);

  return <div id="tableauContainer" style={{ width: '100%', height: '800px' }}></div>;
};

export default TableauDashboard;
