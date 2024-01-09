import { Col, Row } from 'react-bootstrap'
import { Documento } from '../components/multimedia/Documento'

export const ContainerDocumentos = ({documentos}) => {
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
