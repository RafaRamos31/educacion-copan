import { Documento } from "./Documento";
import { Fotografia } from "./Fotografia";
import { Video } from "./Video";

export const ContainerMultimedia = ({archivo}) => {
  switch (archivo.tipo) {
    case "Documento":
      return <Documento archivo={archivo}/>;

    case "Imagen":
      return <Fotografia enlace={archivo.enlace}/>;

    case "Video":
      return <Video enlace={archivo.enlace}/>;

    default:
      return null;
  }
  
}
