import { useContext, useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { ContainerNoticias } from "../components/ContainerNoticias.jsx";
import { Publicar } from "./Publicar.jsx";
import { PaginacionNoticias } from "../components/PaginacionNoticias.jsx";
import { BarraFiltros } from "../components/BarraFiltros.jsx";
import "../assets/styles/noticias.css";
import { Layout } from "./Layout.jsx";
import { UserContext } from "../contexts/UserContext.js";
import { RefetchContext } from "../contexts/RefetchContext.js";
import { BarraBuscarNoticias } from "../components/BarraBuscarNoticias.jsx";
import useForm from "../hooks/useForm.js";

export const Noticias = () => {
  const { userData } = useContext(UserContext);
  const { refetch, setRefetch } = useContext(RefetchContext)

  //Navigation filters

  const {values, setValues, handleChange} = useForm({
    page: 0,
    unidadTecnicaId: '',
    municipioId: '',
    query: ''
  })

  //Control paginacion buscar
  const [searching, setSearching] = useState(false)
  const [loading, setLoading] = useState(false)

  const [noticias, setNoticias] = useState(null)
  const [total, setTotal] = useState(null)
  
  //Modal publicar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const formValues = new FormData();
        formValues.append("page", values.page);
        formValues.append("pageSize", 5);
        formValues.append("ut", values.unidadTecnicaId);
        formValues.append("municipio", values.municipioId);
        formValues.append("query", values.query);

        const response = await fetch(process.env.REACT_APP_API_URL +  `/noticias/paged`, {
          method: "POST",
          body: formValues,
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        setSearching(false)
        setLoading(false)
        setNoticias(jsonData.noticias);
        setTotal(jsonData.count)
      } catch (error) {
        throw error
      }
    }
    setRefetch(false)
    fetchData();  
  }, [values, refetch, setRefetch])

  
  
  return (
    <Layout pagina={"Publicaciones"}>
      <Row className="w-100">
        <Col md={3}>
          {
            userData ?  
            <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Publicar
            </Button>
            : ''
          }
          <BarraBuscarNoticias setFilter={setValues} setRefetch={setRefetch} setSearching={setSearching} />
          <BarraFiltros filter={values} setFilter={setValues} handleChange={handleChange} />
        </Col>
        <Col md={9}  className="px-0">
          <PaginacionNoticias page={values.page} total={total} setFilter={setValues} searching={searching}/>
          <ContainerNoticias noticias={noticias} loading={loading}/>
          <PaginacionNoticias page={values.page} total={total} setFilter={setValues} searching={searching}/>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Publicar handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
};
