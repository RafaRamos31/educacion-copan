import { Col, Row } from 'react-bootstrap'
import { Documento } from '../components/multimedia/Documento'

export const ContainerDocumentos = ({documentos}) => {
  if(documentos && documentos?.length === 0){
    return (
      <div className="contenedor-noticias d-flex flex-column align-items-center justify-content-center" 
      style={{backgroundColor: 'var(--mp-azul-5)', width: '100%', height: '100%', padding: '5rem 0', borderRadius: ' 10px'}}>
        <i className="bi bi-folder-x" style={{fontSize: '4rem', fontWeight: 'bold'}}></i>
        <p style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold'}}>No se encontraron resultados para tu búsqueda</p>
      </div>
    )
  }

  return (
    <Row className='w-100 mx-auto'>
      {
        documentos && documentos.map((documento) => (
          <Col key={documento._id} sm={12} md={6} xl={4} className='my-2'>
            <Documento key={documento._id} archivo={documento}/>
          </Col>
        )) 
      }
    </Row>
  )
}
