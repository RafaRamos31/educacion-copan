import { getImageUrl } from '../../services/stringFormatter'

export const ImagenGaleria = ({enlace, modal=false}) => {
  return (
    <div className='d-flex mx-auto'>
      <div style={{padding: '1rem', backgroundColor: 'lightgray'}}>
        <iframe style={{border: 0, height: modal ? 600 : 'auto', width: modal ? 600 : 'auto'}} title={enlace} 
        src={getImageUrl(enlace)}
        ></iframe>
      </div>
    </div>
  )
}