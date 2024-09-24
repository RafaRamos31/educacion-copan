import educacionCopan from "../assets/images/navbar-logos/educacion-copan.png"
import saludCopan from "../assets/images/navbar-logos/salud-copan.png"
import educacionSB from "../assets/images/navbar-logos/educacion-sb.png"
import saludSB from "../assets/images/navbar-logos/salud-sb.png"
import educacionLempira from "../assets/images/navbar-logos/educacion-lempira.png"
import saludLempira from "../assets/images/navbar-logos/salud-lempira.png"
import educacionOcotepeque from "../assets/images/navbar-logos/educacion-ocotepeque.png"
import saludOcotepeque from "../assets/images/navbar-logos/salud-ocotepeque.png"

export const getNavBarLogo = () => {
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

  return options[process.env.REACT_APP_WEB_SECTOR][process.env.REACT_APP_WEB_DEPTO]
}
