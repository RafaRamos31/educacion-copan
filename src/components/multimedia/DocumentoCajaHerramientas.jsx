import { Button, Card, Image } from 'react-bootstrap'
import '../../assets/styles/documento.css'

export const DocumentoCajaHerramientas = ({enlace, titulo, nombre, thumb}) => { 

  const openFile = () => {
    window.open(enlace, '_blank');
  }

  return (
    <>
    <Card className='my-2 px-0 documento mx-auto h-100' style={{maxWidth: '400px'}}>
      <Card.Header style={{backgroundColor: 'var(--mp-azul-5)', cursor: 'pointer'}} onClick={openFile}>{titulo}</Card.Header>
      <Card.Body className='d-flex flex-wrap justify-content-around'>
        <Image width={'150px'} src={thumb} onClick={openFile} style={{cursor: 'pointer', maxHeight: '220px'}}></Image>
        <div className='my-auto d-flex  flex-column justify-content-around'>
          <Button variant='info' className='mb-4' onClick={openFile}>
            <i className="bi bi-eye-fill"></i>{' '}Ver Documento
          </Button>
          <Button variant='info'>
            <a href={enlace} download={nombre} style={{textDecoration: 'none', color:'black'}}>
              <i className="bi bi-download"></i>{' '}Descargar
            </a>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}
