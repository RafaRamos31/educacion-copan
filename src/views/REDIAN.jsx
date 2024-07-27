import useTitle from "../hooks/useTitle.js";
import { Layout } from "./Layout.jsx";
import { TableauBoard } from "../components/TableauBoard.jsx";
import '../assets/styles/recursos.css'
import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { UserContext } from "../contexts/UserContext.js";
import { Button, Modal } from "react-bootstrap";
import { ConfiguracionREDIAN } from "./ConfiguracionREDIAN.jsx";

export const REDIAN = () => {
  useTitle("REDI-AN");
  const {userData} = useContext(UserContext);
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/redian');

  //Modal Valores
  const [showValores, setShowValores] = useState(false);
  const handleCloseValores = () => {
    setShowValores(false);
    window.location.reload();
  };
  const handleShowValores = () => setShowValores(true);

  const [ tableros, setTableros ] = useState([])

  useEffect(() => {
    if(data && !isLoading){
      setTableros(data);
    }
  }, [data, isLoading])
  
  

  return (
    <Layout pagina={"Recursos"}>
      <main>
        <h2 className="titulo-recursos">REDI-AN</h2>
        <h4 className="w-100 text-center">Registro Digital de Actividades de Nutrición</h4>
        <hr />
        {
          (userData && userData.rol === 'ADMIN') ? 
          <Button style={{marginLeft: '1rem'}} variant="warning" onClick={handleShowValores}><i className="bi bi-tools"></i>{' '}Editar Tableros</Button>
          : ''
        }
        <div className="p-4">
          <h4 style={{fontWeight: 'bold'}}><i className="bi bi-newspaper"></i>{' '}¿Qué es el REDI-AN?</h4>
          <p>Es un sistema elaborado por la Actividad USAID Avanzando la Nutrición Honduras, que tiene el proposito de ayudar en la digitalización del proceso de recolección, procesamiento, reporte, y uso de datos sobre la implementación de 
            servicios en el marco de la Estrategia de Atención Integral de la Niñez en la Comunidad (AIN-C). Se conversó con los Gestores de Salud Centralizados 
            y Descentralizados, (PSS) y las cuatro Regiones Sanitarias Departamentales (RSD) apoyados por el Proyecto. Se decidió utilizar aplicaciones de uso libre, 
            sin costo, que permitan recolectar información en lugares sin acceso a internet, para facilitar el trabajo de los promotores y otros 
            miembros de los equipos de salud familiar (ESFAM) de tal forma que podrían utilizarlo con capacitación mínima.</p>
        </div>
        {
          tableros && tableros.map((tablero, index) => (
            <TableauBoard key={index} tablero={tablero} />
          ))
        }
        </main>
        <Modal show={showValores} onHide={handleCloseValores} size="lg">
          <ConfiguracionREDIAN data={tableros} handleClose={handleCloseValores}/>
        </Modal>
    </Layout>
  );
}
