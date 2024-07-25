import { UserContextProvider } from "./contexts/UserContext"
import useTitle from "./hooks/useTitle"
import { MainRouter } from "./routers/MainRouter"

export const App = () => {
  useTitle('Inicio')
  return (
    <>
      <UserContextProvider>
        <MainRouter/>
      </UserContextProvider>
    </>
  )
}
