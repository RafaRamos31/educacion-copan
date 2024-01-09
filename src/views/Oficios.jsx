import { Accordion } from "react-bootstrap";
import '../assets/styles/contacto.css'
import { useEffect, useState } from "react";
import { ContainerDocumentos } from "../components/ContainerDocumentos";
import useFetch from "../hooks/useFetch.js";

export const Oficios = () => {

  const [values, setValues] = useState(null);
  const { data: mongoData, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/noticias/oficios`);

  useEffect(() => {
    if(mongoData){
      setValues(mongoData)
    }
  }, [mongoData, isLoading])


  return (
    <Accordion>
      <Accordion.Item eventKey="2023">
        <Accordion.Header>2023</Accordion.Header>
        <Accordion.Body>
          <Accordion>
            {
              ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((mes, index) => 
                <Accordion.Item key={index} eventKey={mes + '-2023'}>
                  <Accordion.Header>{mes}</Accordion.Header>
                  <Accordion.Body>
                    {
                      values && <ContainerDocumentos documentos={values} />
                    }
                  </Accordion.Body>
                </Accordion.Item>
              )
            }
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2022">
        <Accordion.Header>2022</Accordion.Header>
        <Accordion.Body>
          <Accordion>
              {
                ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((mes, index) => 
                  <Accordion.Item key={index} eventKey={mes + '-2022'}>
                    <Accordion.Header>{mes}</Accordion.Header>
                    <Accordion.Body>
                      
                    </Accordion.Body>
                  </Accordion.Item>
                )
              }
            </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
