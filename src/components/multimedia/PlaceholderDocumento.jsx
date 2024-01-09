import { Card, Col, Row, Image, Placeholder } from 'react-bootstrap'
import '../../assets/styles/documento.css'

export const PlaceholderDocumento = () => { 
  return (
    <Card className='my-2 px-0 documento mx-auto'>
      <Card.Header style={{backgroundColor: 'var(--mp-azul-5)'}}>
        <Placeholder as={Card.Title} animation="glow" >
          <Placeholder xs={12} bg='info'/>
        </Placeholder>
      </Card.Header>
      <Card.Body className='d-flex flex-wrap justify-content-around'>
        <Image height={'90px'} width={'90px'}></Image>
        <div className='my-auto d-flex  flex-column justify-content-around'>
          <Placeholder.Button variant='info' className='mb-3' style={{width: '150px'}}/>
          <Placeholder.Button variant='info' className='mb-3' style={{width: '150px'}}/>
        </div>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Placeholder xs={2} bg='secondary' animation='glow' className='mx-1'/>
          <Col className="my-auto">{'MB'}</Col>
          <Col xs={3} className="d-flex justify-content-end my-auto"><i className="bi bi-arrow-down"></i></Col>
          <Placeholder xs={2} bg='secondary' animation='glow' className='mx-1'/>
        </Row>
      </Card.Footer>
    </Card>
  )
}
