import { getFileEnlace } from "../../services/stringFormatter";
import { Documento } from "./Documento";
import { Fotografia } from "./Fotografia";
import { Video } from "./Video";

export const ContainerMultimedia = ({archivo}) => {
  switch (archivo.tipo) {
    case "Documento":
      return <Documento archivo={archivo}/>;

    case "Imagen":
      return <Fotografia enlace={getFileEnlace(archivo.fileId)}/>;

    case "Video":
      return <Video enlace={getFileEnlace(archivo.fileId)}/>;

    default:
      return null;
  }
  
}
