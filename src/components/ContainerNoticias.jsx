import { Spinner } from "react-bootstrap"
import { Noticia } from "./Noticia"

export const ContainerNoticias = ({noticias, loading}) => {

  if(noticias === null || loading){
    return (
      <div className="contenedor-noticias d-flex flex-column align-items-center justify-content-center" 
      style={{backgroundColor: 'var(--mp-gris-5)', width: '97%', height: '90%', marginLeft: '1rem', borderRadius: ' 10px'}}>
        <Spinner className="mb-2" style={{ height: '5rem', width: '5rem', fontSize: '2rem', color: 'var(--mp-rojo-1)' }}/>
        <p style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold'}}>Cargando....</p>
      </div>
    )
  }

  if(noticias.length === 0){
    return (
      <div className="contenedor-noticias d-flex flex-column align-items-center justify-content-center" 
      style={{backgroundColor: 'var(--mp-azul-5)', width: '97%', height: '70%', marginLeft: '1rem', borderRadius: ' 10px'}}>
        <i className="bi bi-folder-x" style={{fontSize: '4rem', fontWeight: 'bold'}}></i>
        <p style={{fontSize: '2rem', textAlign: 'center', fontWeight: 'bold'}}>No se encontraron resultados para tu búsqueda</p>
      </div>
    )
  }

  return (
    <div className="contenedor-noticias">
      {
        noticias.map((noticia) => (
          <Noticia key={noticia._id} noticia={noticia} />
        )) 
      }
    </div>
  )
}
