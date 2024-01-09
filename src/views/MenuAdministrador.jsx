import { Layout } from "./Layout";

export const Configuracion = ({data}) => {

  return (
    <Layout pagina={"Administración"}>
      <Row className="w-100">
        <Col md={3}>
          <BarraFiltros activeFilter={idDepto} setFiltro={setIdDepto} resetIndex={() => setIndex(1)}/>
          {
          valid ?  
            <Button className="mx-3 my-3" variant="warning" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Publicar
            </Button>
            : ''
          }
        </Col>
        <Col md={9}  className="px-0">
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} setIndex={setIndex} />
          {noticias && <ContainerNoticias noticias={noticias} />}
          <PaginacionNoticias idDepto={idDepto} index={Number.parseInt(index)} setIndex={setIndex} />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Publicar handleClose={handleClose}/>
      </Modal>
    </Layout>
  );
}
