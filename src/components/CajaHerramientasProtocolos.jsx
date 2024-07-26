import { Col, Row } from 'react-bootstrap'
import { DocumentoCajaHerramientas } from './multimedia/DocumentoCajaHerramientas'

import protocolo_v1 from '../assets/media/docs/protocolo_vol1.pdf'
import img_protocolo_v1 from '../assets/media/thumbnails/protocolo_v1.png'
import protocolo_v2 from '../assets/media/docs/protocolo_vol2.pdf'
import img_protocolo_v2 from '../assets/media/thumbnails/protocolo_v2.png'
import funcionamiento_equipo from '../assets/media/docs/funcionamiento_equipo.pdf'
import img_funcionamiento_equipo from '../assets/media/thumbnails/funcion_equiposalud.png'
import lineamiento_gestion from '../assets/media/docs/lineamiento_gestion.pdf'
import img_flineamiento_gestion from '../assets/media/thumbnails/lineamiento_gestion.png'
import vigilancia_nutricional from '../assets/media/docs/vigilancia_nutri.pdf'
import img_vigilancia_nutricional from '../assets/media/thumbnails/norma_vigilancia.png'
import referencia_respuesta from '../assets/media/docs/referencia_respuesta.pdf'
import img_referencia_respuesta from '../assets/media/thumbnails/referencia_respuest.png'

export const CajaHerramientasProtocolos = () => {
  return (
    <>
    <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>Lineamientos y Protocolos</h3>
    <Row className='w-100 mx-auto'>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'1. Protocolo Atención al menor de 5 años Vol.1'} 
          enlace={protocolo_v1}
          nombre={'protocolo_vol1.pdf'}
          thumb={img_protocolo_v1}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'2. Protocolo Atención al menor de 5 años Vol.2'} 
          enlace={protocolo_v2}
          nombre={'protocolo_vol2.pdf'}
          thumb={img_protocolo_v2}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'3. Lineamientos Operativos para el funcionamiento del Equipo de Salud Familiar'} 
          enlace={funcionamiento_equipo}
          nombre={'funcionamiento_equipo.pdf'}
          thumb={img_funcionamiento_equipo}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'4. Lineamientos para la gestión de situaciones de salud priorizadas en el Marco de las MI'} 
          enlace={lineamiento_gestion}
          nombre={'lineamiento_gestion.pdf'}
          thumb={img_flineamiento_gestion}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'5. Normas Vigilancia Nutricional Niño Menor de 5 años'} 
          enlace={vigilancia_nutricional}
          nombre={'vigilancia_nutri.pdf'}
          thumb={img_vigilancia_nutricional}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'6. Lineamientos de Referencia y Repsuesta del Sistema Nacional de Salud'} 
          enlace={referencia_respuesta}
          nombre={'referencia_respuesta.pdf'}
          thumb={img_referencia_respuesta}
        />
      </Col>
    </Row>
    </>
  )
}
