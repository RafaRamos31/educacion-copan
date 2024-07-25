import { Row } from 'react-bootstrap'
import { ImageFrame } from './ImageFrame'

export const ContainerImagenes = ({imagenes}) => {

  if(imagenes && imagenes?.length === 0){
    return (
      <div className="contenedor-noticias d-flex flex-column align-items-center justify-content-center" 
      style={{backgroundColor: 'var(--mp-azul-5)', width: '100%', height: '100%', padding: '5rem 0', borderRadius: ' 10px'}}>
        <i className="bi bi-folder-x" style={{fontSize: '4rem', fontWeight: 'bold'}}></i>
        <p style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold'}}>No se encontraron resultados para tu búsqueda</p>
      </div>
    )
  }

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
