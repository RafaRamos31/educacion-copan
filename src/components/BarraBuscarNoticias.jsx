import { Form } from "react-bootstrap";
import { useState } from "react";

export const BarraBuscarNoticias = ({setFilter, setRefetch}) => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(f => ({...f, query: query}))
    setRefetch(true)
  }


  return (
    <aside className="px-3 mt-4">
      <h3>Buscar Noticias</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4 d-flex">
          <Form.Control aria-label="Buscar"  id="query" name="query" onChange={handleChange} value={query} required></Form.Control>
          <i className="bi bi-search my-auto mx-2" style={{cursor: 'pointer'}} onClick={handleSubmit}></i>
        </Form.Group>
      </Form>
    </aside>
  )
}
