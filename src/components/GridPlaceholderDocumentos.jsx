import { Row } from 'react-bootstrap'
import { PlaceholderDocumento } from './multimedia/PlaceholderDocumento'

export const GridPlaceholderDocumentos = () => {
  return (
    <Row className='w-100 mx-auto' sm={1} md={2} lg={3}>
      <PlaceholderDocumento />
      <PlaceholderDocumento />
      <PlaceholderDocumento />
      <PlaceholderDocumento />
      <PlaceholderDocumento />
      <PlaceholderDocumento />
    </Row>
  )
}
