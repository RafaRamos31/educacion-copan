import { Col, Row } from 'react-bootstrap'

export const CajaHerramientas = () => {
  return (
    <Row className='w-100 mx-auto'>
      <h3 className='mt-5 mb-3' style={{fontWeight: 'bold'}}>¡BIENVENIDO A LA CAJA DE HERRAMIENTAS PARA LOS ACTORES DEL SISTEMA EDUCATIVO, PARA APOYAR LA EDUCACIÓN NUTRICIONAL DE LA POBLACIÓN ESCOLAR DE HONDURAS!</h3>
      <p>Esta Caja de Herramientas proporciona a los actores del sector de educación, recursos de referencia ya existentes y otros desarrollados por el proyecto USAID 
        Avanzando la Nutrición Honduras, de uso práctico al personal para fortalecer sus competencias y el desempeño de sus labores relacionados con la implementación de 
        la ley nacional de alimentación escolar y los servicios de educación nutricional y contribuir a sentar las bases para un futuro más saludable y próspero en Honduras.</p>
        <p>Juntos, avanzamos hacia un Honduras más nutrido, educado, y sano.</p>
        <p>¡Gracias por ser parte de esta importante misión!</p>
        <Row>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-newspaper"></i>{' '}¿Cómo priorizamos los temas de las herramientas?</h4>
            <p>Para iniciar actividades y asegurar una respuesta a las necesidades existentes que permitan orientar el fortalecimiento de capacidades y competencias se desarrolló 
              un diagnóstico de capacidades organizacionales del sector a nivel institucional con las cuatro Direcciones Departamentales de Educación, 11 Direcciones Municipales 
              de Educación y centros educativos de los 11 municipios de los cuatro departamentos del área de intervención. Encontramos necesidades relacionadas a las capacidades y
              competencias para el buen uso de plataformas digitales y la implementación de normas y reglamentos relacionados con la alimentación escolar. También encontramos que 
              existen muy pocos materiales de apoyo para el sector educación relacionados con la alimentación y educación nutricional.Luego, juntamente con los actores del 
              sector educación a nivel departamental, priorizamos los temas de las herramientas que hemos incluido en esta Caja de Herramientas.</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-card-checklist"></i>{' '}¿Cómo diseñamos e identificamos las herramientas?</h4>
            <p>La mayor parte del material incluido en esta Caja de Herramientas fue identificado a través de un proceso de consulta amplia de recursos y material 
              oficial existente previamente desarrollado y validado, como también otros recursos relevantes existentes de otros proyectos. También identificamos materiales 
              oficiales existentes del sector a los cuales el personal no tiene acceso o desconocen su existencia.</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-bar-chart"></i>{' '}¿Para quienes son las herramientas?</h4>
            <p>Esta Caja de Herramientas está dirigida principalmente al personal del sector educación. Sin embargo el abordaje multisectorial a la nutrición requiere 
              la coordinación y colaboración entre distintos sectores, reconociendo que la nutrición es una responsabilidad compartida. Por lo tanto, la Caja de Herramientas 
              es un recurso valioso para todos aquellos actores que buscan contribuir a la mejora de la nutrición y la salud de la población más vulnerable.Atender adecuadamente 
              la nutrición en el ciclo de vida, contribuye a sentar las bases para un futuro más saludable y próspero en Honduras.Juntos, avanzamos hacia un Honduras más educado, 
              nutrido y sano. ¡Gracias por ser parte de esta importante misión!</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-easel"></i>{' '}¿Cómo pueden usar las herramientas?</h4>
            <p>La Caja de Herramientas es una compilación de materiales relevantes relacionados a leyes, programas y reglamentos relacionados con la alimentación escolar, 
              educación nutricional y la venta de alimentos en centros educativos, que fueron utilizados en el desarrollo de una serie de procesos y acciones para fortalecer 
              capacidades organizacionales y competencias de los actores del sector. A continuación el listado de los documentos incluidos:
              <br></br>1. PyENSAN 2030
              <br></br>2. Decreto Ley de alimentación escolar
              <br></br>3. AM Reglamento venta de alimentos en centros educativos
              <br></br>4. Manual de procesos SACE
              <br></br>5. Brochure SAN en el contexto de la emigración
              <br></br>6. USAID AtM-Recetas para alimentación de la niñez rural</p>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <h4 style={{fontWeight: 'bold'}}><i className="bi bi-file-earmark-text"></i>{' '}¿Cuáles son las herramientas?</h4>
            <p>LEstos individuos pueden usar los materiales incluidos en esta Caja de Herramientas para el desempeño de sus funciones. Los materiales 
              ayudarán a diseñar abordajes, programar actividades y establecer alianzas con el propósito de mejorar la educación nutricional brindada en centros educativos, 
              la dieta de la familia, y la seguridad alimentaria y la resiliencia de las comunidades.</p>
          </Col>
        </Row>
    </Row>
  )
}
