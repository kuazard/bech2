import { Navigate, Route, Routes } from "react-router-dom"

import { Navbar } from "../ui"
import { HomePage, VitrinaPage ,BuscadorPage, DetallePage} from "../productos"
export const AppRouter = () => {
  return (
    <>

    <Navbar/>
      <Routes>
        <Route path="home"      element={<HomePage/>} />
        <Route path="vitrina"   element={<VitrinaPage/>} />
        <Route path="buscar"    element={<BuscadorPage/>} />
        <Route path="detalle/:id"element={<DetallePage />} />
        <Route path="/"         element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}


8