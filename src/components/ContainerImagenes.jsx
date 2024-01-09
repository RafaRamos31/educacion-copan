import { Row } from 'react-bootstrap'
import { ImageFrame } from './ImageFrame'

export const ContainerImagenes = ({imagenes}) => {
  return (
    <Row className='w-100 mx-auto' sm={1} md={2} lg={3}>
      {
        imagenes && imagenes.map((imagen) => (
          <ImageFrame key={imagen._id} imagen={imagen} imageId={imagen._id} />
        )) 
      }
    </Row>
  )
}
