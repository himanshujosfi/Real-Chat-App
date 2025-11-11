import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register } from "./Component/Auth/Register"
import { Login } from "./Component/Auth/Login"
import { Dashboard } from "./Component/Pages/Dashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/:userId' element={< Dashboard />}></Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
