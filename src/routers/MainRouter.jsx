import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../views/Home'
import { Noticias } from '../views/Noticias'
import { Recursos } from '../views/Recursos'
import { Contacto } from '../views/Contacto'
import { Login } from '../views/Login'
import { Publicar } from '../views/Publicar'
import { RefetchContextProvider } from '../contexts/RefetchContext'
import { ToastContextProvider } from '../contexts/ToastContext'
import { GestionRoles } from '../views/GestionRoles'
import { Configuraciones } from '../views/Configuraciones'

export const MainRouter = () => {
  return (
    <>
      <RefetchContextProvider>
      <ToastContextProvider>  
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="noticias" element={<Noticias />}></Route>
        <Route path="contacto" element={<Contacto />}></Route>
        <Route path="recursos" element={<Recursos />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="publicar" element={<Publicar />}></Route>
        <Route path="admin/config" element={<Configuraciones />}></Route>
        <Route path="admin/roles" element={<GestionRoles />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      </ToastContextProvider>
      </RefetchContextProvider>
    </>
  )
}
