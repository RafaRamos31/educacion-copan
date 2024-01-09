import { Button, Card, Form, FloatingLabel, Spinner } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { sendLogin } from "../services/login-service";
import { useEffect, useState } from "react";

export const Login = () => {
  const [charging, setCharging] = useState(false);
  const [error, setError] = useState(false);

  const { values, handleChange } = useForm({
    usuario: '',
    password: ''
  });

  useEffect(() => {
    setError(false);
  }, [values])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCharging(true)
    const result = await sendLogin(values.usuario, values.password)
    setCharging(false)
    if(result.valid){
      localStorage.setItem("user-id", result.id);
      window.location.reload();
    }
    else{
      setError(true);
    }
  };

  return (
    <Card>
      <Card.Header>
        <h3>Iniciar Sesión</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <FloatingLabel label="Usuario">
              <Form.Control aria-label="Usuario"  id="usuario" name="usuario" onChange={handleChange} required/>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-4">
            <FloatingLabel label="Contraseña">
              <Form.Control type="password" id="password" name="password" onChange={handleChange} required/>
            </FloatingLabel>
          </Form.Group>
          <div className="d-grid gap-2">
            {
              !error ? 
                !charging ? 
                <Button as="input" variant="info" type="submit" value="Iniciar Sesión" />
                : <Button variant="info"> 
                  <Spinner
                    as="span"
                    animation="border"
                    size="md"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Cargando...</span>
                </Button>
              :
              <Button as="input" variant="danger" type="submit" value="Error" />
              }
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
