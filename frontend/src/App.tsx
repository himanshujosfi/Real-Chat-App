import { Route, Routes } from "react-router-dom"
import { Register } from "./Component/Auth/Register"
import { Login } from "./Component/Auth/Login"
import { Dashboard } from "./Component/Pages/Dashboard"
import { Navbar } from "./Component/Navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={""}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/:userId' element={< Dashboard />}></Route >
      </Routes>
    </>
  )
}

export default App
