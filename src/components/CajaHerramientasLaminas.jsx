import { Col, Row } from 'react-bootstrap'
import { DocumentoCajaHerramientas } from './multimedia/DocumentoCajaHerramientas'

import recetas from '../assets/media/docs/1. recenta_alimentaria.pdf'
import img_recetas from '../assets/media/thumbnails/1_recetaalimento.png'
import migracion from '../assets/media/docs/2. san_contextomigracion.pdf'
import img_migracion from '../assets/media/thumbnails/2_brochure.png'
import pyensan from '../assets/media/docs/3. PyENSAN_2.pdf'
import img_pyensan from '../assets/media/thumbnails/3_pyensa.png'
import sace from '../assets/media/docs/4. manual_sace.pdf'
import img_sace from '../assets/media/thumbnails/4_Sace.png'
import gaceta from '../assets/media/docs/5. reglamento_venta.pdf'
import img_gaceta from '../assets/media/thumbnails/5_Reglamento.png'
import alimentacion from '../assets/media/docs/6. ley_alimentaci.pdf'
import img_alimentacion from '../assets/media/thumbnails/6_decretoLey.png'

export const CajaHerramientasLaminas = () => {
  return (
    <>
    <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>Instrumentos Educativos</h3>
    <Row className='w-100 mx-auto'>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'1. Recetas para la Alimentación de la Niñez Rural'} 
          enlace={recetas}
          nombre={'1. recenta_alimentaria.pdf'}
          tipo={'pdf'}
          thumb={img_recetas}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'2. Seguridad Alimentaria y Nutricional en el contexto de la migración'} 
          enlace={migracion}
          nombre={'2. san_contextomigracion.pdf'}
          tipo={'pdf'}
          thumb={img_migracion}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'3. Política Nacional de Seguridad Alimentaria y Nutricional de largo plazo y Estrategia Nacional de Seguridad Alimentaria y Nutricional PyENSAN 2030'} 
          enlace={pyensan}
          nombre={'3. PyENSAN_2.pdf'}
          tipo={'pdf'}
          thumb={img_pyensan}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'4. Manual de procesos SACE'} 
          enlace={sace}
          nombre={'4. manual_sace.pdf'}
          tipo={'pdf'}
          thumb={img_sace}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'5. Reglamento Venta de Alimentos La Gaceta'} 
          enlace={gaceta}
          nombre={'5. reglamento_venta.pdf'}
          tipo={'pdf'}
          thumb={img_gaceta}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'6. Decreto Ley de Alimentación Escolar La Gaceta'} 
          enlace={alimentacion}
          nombre={'6. ley_alimentaci.pdf'}
          tipo={'pdf'}
          thumb={img_alimentacion}
        />
      </Col>
    </Row>
    </>
  )
}
