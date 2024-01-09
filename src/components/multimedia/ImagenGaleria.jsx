import { getImageUrl } from '../../services/stringFormatter'
import { Image } from 'react-bootstrap'

export const ImagenGaleria = ({enlace, modal=false}) => {
  return (
    <>
      <Image className='noticia-img mx-auto' src={getImageUrl(enlace)} style={!modal ? {maxWidth: '95vw',  maxHeight: '100%'} : {}} />
    </>
  )
}