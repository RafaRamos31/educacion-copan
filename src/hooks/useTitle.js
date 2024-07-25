import { useEffect } from "react";
import { getDepartamento, getTitle } from "../services/info-service";

const useTitle = (title) => {

  useEffect(() => {
    document.title = `${getTitle(process.env.REACT_APP_WEB_SECTOR)} de ${getDepartamento(process.env.REACT_APP_WEB_DEPTO)} - ${title}`; 
  }, [title]);
};

export default useTitle;