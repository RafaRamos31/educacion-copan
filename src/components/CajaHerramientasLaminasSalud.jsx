import { Col, Row } from 'react-bootstrap'
import { DocumentoCajaHerramientas } from './multimedia/DocumentoCajaHerramientas'

import manual_redian from '../assets/media/docs/manual_redian.pdf'
import img_manual_redian from '../assets/media/thumbnails/Manual_redian.png'
import manual_monitor from '../assets/media/docs/manual_monitor.pdf'
import img_manual_monitor from '../assets/media/thumbnails/manua_monitor_ra.png'
import manual_AINC from '../assets/media/docs/manual_ainc.pdf'
import img_manual_ainc from '../assets/media/thumbnails/manua_ainc.png'
import guia_tecnica from '../assets/media/docs/guia_equiposalud.pdf'
import img_guia_tecnica from '../assets/media/thumbnails/guia_funcionamientoequipo.png'
import guia_facilitador from '../assets/media/docs/guia_facilitador.pdf'
import img_guia_facilitador from '../assets/media/thumbnails/guia_monitor_ra.png'
import guia_accion from '../assets/media/docs/guia_accion.pdf'
import img_guia_accion from '../assets/media/thumbnails/guia_accion.png'

export const CajaHerramientasLaminasSalud = () => {
  return (
    <>
    <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>Manuales y Guías</h3>
    <Row className='w-100 mx-auto'>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'1. Manual para el uso de la herramienta de Registro Digital de Actividades de Nutrición (REDI-AN)'} 
          enlace={manual_redian}
          nombre={'manual_redian.pdf'}
          tipo={'pdf'}
          thumb={img_manual_redian}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'2. Manual de monitor y monitora AIN-C'} 
          enlace={manual_monitor}
          nombre={'manual_monitor.pdf'}
          tipo={'pdf'}
          thumb={img_manual_monitor}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'3. Manual bases conceptuales y operativas'} 
          enlace={manual_AINC}
          nombre={'manual_ainc.pdf'}
          tipo={'pdf'}
          thumb={img_manual_ainc}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'4. Guía técnica para el funcionamiento de los equipos de salud familiar'} 
          enlace={guia_tecnica}
          nombre={'guia_equiposalud.pdf'}
          tipo={'pdf'}
          thumb={img_guia_tecnica}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'5. Guia de facilitador para capacitación de monitores y monitoras'} 
          enlace={guia_facilitador}
          nombre={'guia_facilitador.pdf'}
          tipo={'pdf'}
          thumb={img_guia_facilitador}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'6. Guia para la acción'} 
          enlace={guia_accion}
          nombre={'guia_accion.pdf'}
          tipo={'pdf'}
          thumb={img_guia_accion}
        />
      </Col>
    </Row>
    </>
  )
}
