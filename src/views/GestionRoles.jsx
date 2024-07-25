import { Button, Container, Modal } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import useFetch from "../hooks/useFetch";
import { Layout } from "./Layout";
import { getDateString } from "../services/stringFormatter";
import { RegistrarUsuario } from "./RegistrarUsuario";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../contexts/ToastContext";
import { deleteUser } from "../services/login-service";
import { CambiarPassword } from "./CambiarPassword";

export const GestionRoles = () => {
  //Validacion
  const {userData} = useContext(UserContext);

  //Toast
  const {setShowToast, actualizarTitulo, setContent, setVariant} = useContext(ToastContext)

  const navigation = useNavigate()
  useEffect(() => {
    if(userData?.rol !== 'ADMIN'){
      navigation('/')
    }

  }, [userData, navigation])

  const [selected, setSelected] = useState('')
  const [selectedId, setSelectedId] = useState('')
  
  const { data, isLoading } = useFetch(process.env.REACT_APP_API_URL + '/usuarios/list');

  //usuarios
  const [master, setMaster] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    if(data && users === null){
      setMaster(data.filter((user) => user.rol === 'ADMIN')[0])
      setUsers(data.filter((user) => user.rol !== 'ADMIN'))
    }
  
  }, [data, isLoading, users])
  

  //Modal registro
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Modal eliminar
  const [showEliminar, setShowEliminar] = useState(false);
  const handleCloseEliminar = () => setShowEliminar(false);

  //Modal Password
  const [showFirst, setShowFirst] = useState(false);
  const handleCloseFirst = () => setShowFirst(false);
  const handleShowFirst = () => setShowFirst(true);

  const handleShowEliminar = (id, username) => {
    setShowEliminar(true);
    setSelected(username)
    setSelectedId(id)
  }


  //Eliminar archivo
  const [correct, setCorrect] = useState(null);

  const handleDelete = async () => {
    const result = await deleteUser(selectedId)
    setUsers(users.filter((user) => user.username !== selected))
    setSelected('')
    setShowEliminar(false)
    setCorrect(result)
  }

  useEffect(() => {
    if(correct===true){
      actualizarTitulo('Usuario Eliminado')
      setContent('El usuario se ha eliminado.')
      setVariant('info')
      setShowToast(true)
    }
    if(correct===false){
      actualizarTitulo('Error al Eliminar Usuario')
      setContent('Ocurrio un error al tratar de eliminar el usuario, intente de nuevo.')
      setVariant('danger')
      setShowToast(true)
    }
  // eslint-disable-next-line
  }, [correct])

  return (
    <Layout pagina={"Gestión de Roles"}>
      <Container>
      <h1 className="titulo-contacto">GESTIÓN DE USUARIOS</h1>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Última Conexión</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {
              master &&
              <tr key={master._id}>
                <td>{1}</td>
                <td>{master.username}</td>
                <td>{master.nombre}</td>
                <td>{master.rol}</td>
                <td>{getDateString(master.ultimaConexion)}</td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button variant="warning" onClick={() => handleShowFirst()}>
                    <i className="bi bi-tools"></i>{' '}Cambiar Contraseña
                  </Button>
                </td>
              </tr>
            }
            {
              users && users.map((user, i) => (
                <tr key={user._id}>
                  <td>{i+2}</td>
                  <td>{user.username}</td>
                  <td>{user.nombre}</td>
                  <td>{user.rol}</td>
                  <td>{getDateString(user.ultimaConexion)}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <Button variant="danger" onClick={() => handleShowEliminar(user._id, user.username)}>
                      <i className="bi bi-trash"></i>{' '}Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <Button variant="warning" className="mx-4 my-3 px-4" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Registrar
        </Button>
      </Container>
      {/*Modal registro*/}
      <Modal show={show} onHide={handleClose}>
        <RegistrarUsuario handleClose={handleClose}/>
      </Modal>

      {/*Modal eliminar*/}
      <Modal show={showEliminar} onHide={handleCloseEliminar}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Desea eliminar la cuenta de este usuario? Esta acción no puede revertirse.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="px-3" onClick={handleCloseEliminar}>
            Volver
          </Button>
          <Button variant="danger" className="px-3" onClick={handleDelete}>
            Eliminar Usuario
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFirst} onHide={handleCloseFirst}>
        <CambiarPassword handleClose={handleCloseFirst} />
      </Modal>
    </Layout>
  );
}
