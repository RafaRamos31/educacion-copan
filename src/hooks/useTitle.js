import { useEffect } from "react";

const useTitle = (title) => {

  useEffect(() => {
    document.title = `Dirección Departamental de Educación de Copán - ${title}`; 
  }, [title]);
};

export default useTitle;