import { Navigate } from "react-router"
import { authcontext } from "./context/AuthContext"
import Dashboard from "./view/dashboard/Dashboard"
import Login from "./view/login/Login"


function App() {
  const { user } = authcontext()

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
