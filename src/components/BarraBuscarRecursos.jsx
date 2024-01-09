import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const BarraBuscarRecursos = ({setDocumentos, setImagenes}) => {

  const [query, setQuery] = useState('');
  const [refetch, setRefetch] = useState(false);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRefetch(true)
  }

  //Buscar noticias
  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append('query', query)
        const response = await fetch(process.env.REACT_APP_API_URL +  `/query`, {
          method: 'POST',
          body: formData
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const jsonData = await response.json();
        const archivos = jsonData.filter((e) => e.tipo === 'Documento')
        const imagenes = jsonData.filter((e) => e.tipo === 'Imagen')
        setDocumentos(archivos)
        setImagenes(imagenes)
      } catch (error) {
        console.error(error.message);
      }
    }

    if(refetch){
      fetchData();
      setRefetch(false)
    }
  }, [query, refetch, setDocumentos, setImagenes])

  return (
    <aside className="px-3 mt-4">
      <h3>Buscar Recursos</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 d-flex">
          <Form.Control aria-label="Buscar"  id="query" name="query" onChange={handleChange} value={query} required></Form.Control>
          <i className="bi bi-search my-auto mx-2" style={{cursor: 'pointer'}} onClick={handleSubmit}></i>
        </Form.Group>
      </Form>
    </aside>
  )
}
