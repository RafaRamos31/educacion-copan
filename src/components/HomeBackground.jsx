import { Image } from 'react-bootstrap'
import educacionCopan from "../assets/images/background/educacion-copan.jpg"
import saludCopan from "../assets/images/background/salud-copan.jpg"
import educacionSB from "../assets/images/background/educacion-sb.jpg"
import saludSB from "../assets/images/background/salud-sb.jpeg"
import educacionLempira from "../assets/images/background/educacion-lempira.jpg"
import saludLempira from "../assets/images/background/salud-lempira.jpg"
import educacionOcotepeque from "../assets/images/background/educacion-ocotepeque.jpg"
import saludOcotepeque from "../assets/images/background/salud-ocotepeque.jpg"

export const HomeBackground = () => {
  const options = {
    1: {
      1: saludSB,
      2: saludCopan,
      3: saludLempira,
      4: saludOcotepeque
    },
    2: {
      1: educacionSB,
      2: educacionCopan,
      3: educacionLempira,
      4: educacionOcotepeque
    }
  }

  const fondo = options[process.env.REACT_APP_WEB_SECTOR][process.env.REACT_APP_WEB_DEPTO]

  return (
    <Image src={fondo} className="animate__animated animate__fadeIn" id="main-image" fluid/>
  )
}
