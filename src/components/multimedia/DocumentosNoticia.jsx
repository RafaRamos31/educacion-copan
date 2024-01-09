import { Row } from 'react-bootstrap'
import { Documento } from './Documento'

export const DocumentosNoticia = ({documentos}) => {
  return (
    <Row className='w-100 mx-auto' sm={1} md={documentos.length > 1 ? 2 : 1}>
      {
        documentos && documentos.map((documento) => (
          <Documento key={documento._id} archivo={documento}/>
        )) 
      }
    </Row>
  )
}
