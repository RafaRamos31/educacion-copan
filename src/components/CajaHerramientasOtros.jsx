import { Col, Row } from 'react-bootstrap'
import { DocumentoCajaHerramientas } from './multimedia/DocumentoCajaHerramientas'

import migracion from '../assets/media/docs/2. san_migracion.pdf'
import img_migracion from '../assets/media/thumbnails/2_brochure.png'
import cara from '../assets/media/docs/1. lamina_cara.pdf'
import img_cara from '../assets/media/thumbnails/1_laminas.png'
import pyensan from '../assets/media/docs/PyENSAN 2030.pdf'
import img_pyensan from '../assets/media/thumbnails/3_pyensa.png'
import ninos06 from '../assets/media/docs/4. hoja_compromiso6mes.pdf'
import img_ninos06 from '../assets/media/thumbnails/4_HojaCompromiso.png'
import ninos17 from '../assets/media/docs/5. hoja_compromiso17mes.pdf'
import img_ninos17 from '../assets/media/thumbnails/5_HojaCompromiso.png'
import ninos8 from '../assets/media/docs/6. hoja_compromiso8mes.pdf'
import img_ninos8 from '../assets/media/thumbnails/6_HojaCompromiso.png'
import ninos23 from '../assets/media/docs/7. hoja_compromiso23mes.pdf'
import img_ninos23 from '../assets/media/thumbnails/7_Hojacompromiso.png'
import ninos11 from '../assets/media/docs/8. hoja_compromiso11mes.pdf'
import img_ninos11 from '../assets/media/thumbnails/8_hojacompromiso.png'
import intnina from '../assets/media/docs/9. tarjeta_integral.pdf'
import img_intnina from '../assets/media/thumbnails/9_tarjeta.png'
import intnino from '../assets/media/docs/10. tarjeta_nino.pdf'
import img_intnino from '../assets/media/thumbnails/10_tarjeta.png'
import clin_nino from '../assets/media/docs/11. historia_clininicanino.pdf'
import img_clin_nino from '../assets/media/thumbnails/11_HistorialClinico.png'
import clin_nina from '../assets/media/docs/12. historia_clinicanina.pdf'
import img_clin_nina from '../assets/media/thumbnails/12_historialClinico.png'
import eva2 from '../assets/media/docs/13. evaluacion_recien.pdf'
import img_eva2 from '../assets/media/thumbnails/13_hojaevaluacion.png'
import eva4 from '../assets/media/docs/14. evaluacion_nino4anos.pdf'
import img_eva4 from '../assets/media/thumbnails/14_hojaevaluacion.png'
import enfermos from '../assets/media/docs/15. formato_registro.pdf'
import img_enfermos from '../assets/media/thumbnails/15_formatoregistro.png'
import comunitario from '../assets/media/docs/16. formato_informeainc.pdf'
import img_comunitario from '../assets/media/thumbnails/16_formatoinforme.png'
import ref_com from '../assets/media/docs/17. formato_referencia.pdf'
import img_ref_com from '../assets/media/thumbnails/17_formatoreferenia.png'
import indicadores from '../assets/media/docs/18. grafica_indicadores.pdf'
import img_indicadores from '../assets/media/thumbnails/18_formatogrfica.png'
import visita from '../assets/media/docs/19. plan_visita.pdf'
import img_visita from '../assets/media/thumbnails/19_formato.png'
import listado from '../assets/media/docs/20. listado_ninos.pdf'
import img_listado from '../assets/media/thumbnails/20_listadoainc.png'

export const CajaHerramientasOtros = () => {
  return (
    <>
    <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>Otras Herramientas</h3>
    <Row className='w-100 mx-auto'>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'1. Laminas de consejeria Cara a Cara'} 
          enlace={cara}
          nombre={'1. lamina_cara.pdf'}
          thumb={img_cara}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'2. Seguridad Alimentaria y Nutricional en el contexto de la migración'} 
          enlace={migracion}
          nombre={'2. san_migracion.pdf'}
          thumb={img_migracion}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'3. Política y Estrategia Nacional de Seguridad Alimentaria y Nutricional PyENSAN 2030'} 
          enlace={pyensan}
          nombre={'PyENSAN 2030.pdf'}
          thumb={img_pyensan}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'4. Hoja de compromiso Niños de 0 a 6 meses'} 
          enlace={ninos06}
          nombre={'4. hoja_compromiso6mes.pdf'}
          thumb={img_ninos06}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'5. Hoja de compromiso Niños de 6 a 8 meses'} 
          enlace={ninos8}
          nombre={'6. hoja_compromiso8mes.pdf'}
          thumb={img_ninos8}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'6. Hoja de compromiso Niños de 9 a 11 meses'} 
          enlace={ninos11}
          nombre={'8. hoja_compromiso11mes.pdf'}
          thumb={img_ninos11}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'7. Hoja de compromiso Niños de 12 a 17 meses'} 
          enlace={ninos17}
          nombre={'5. hoja_compromiso17mes.pdf'}
          thumb={img_ninos17}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'8. Hoja de compromiso Niños de 18 a 23 meses'} 
          enlace={ninos23}
          nombre={'7. hoja_compromiso23mes.pdf'}
          thumb={img_ninos23}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'9. Tarjeta de Atención Integral de la Niña'} 
          enlace={intnina}
          nombre={'9. tarjeta_integral.pdf'}
          thumb={img_intnina}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'10. Tarjeta de Atención Integral del Niño'} 
          enlace={intnino}
          nombre={'10. tarjeta_nino.pdf'}
          thumb={img_intnino}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'11. Historia Clínica para Niño'} 
          enlace={clin_nino}
          nombre={'11. historia_clininicanino.pdf'}
          thumb={img_clin_nino}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'12. Historia Clínica para Niña'} 
          enlace={clin_nina}
          nombre={'12. historia_clinicanina.pdf'}
          thumb={img_clin_nina}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'13. Hoja de Evaluación AIEPI de recién nacidos a 2 meses'} 
          enlace={eva2}
          nombre={'13. evaluacion_recien.pdf'}
          thumb={img_eva2}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'14. Hoja de Evaluación AIEPI de Niño de 2 meses a 4 años'} 
          enlace={eva4}
          nombre={'14. evaluacion_nino4anos.pdf'}
          thumb={img_eva4}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'15. Formato registro diario de Atención en la comunidad niños enfermos'} 
          enlace={enfermos}
          nombre={'15. formato_registro.pdf'}
          thumb={img_enfermos}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'16. Formato Informe comunitario AIN-C'} 
          enlace={comunitario}
          nombre={'16. formato_informeainc.pdf'}
          thumb={img_comunitario}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'17. Formato referencia respuesta comunidad'} 
          enlace={ref_com}
          nombre={'17. formato_referencia.pdf'}
          thumb={img_ref_com}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'18. Formato gráfica de indicadores de seguimiento de AIN-C'} 
          enlace={indicadores}
          nombre={'18. grafica_indicadores.pdf'}
          thumb={img_indicadores}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'19. Formato Plan de Visita Domiciliaria'} 
          enlace={visita}
          nombre={'19. plan_visita.pdf'}
          thumb={img_visita}
        />
      </Col>
      <Col sm={12} md={6} xl={4} className='my-3'>
        <DocumentoCajaHerramientas 
          titulo={'20. Listado de niños y niñas menores de 5 años'} 
          enlace={listado}
          nombre={'20. listado_ninos.pdf'}
          thumb={img_listado}
        />
      </Col>
    </Row>
    </>
  )
}
