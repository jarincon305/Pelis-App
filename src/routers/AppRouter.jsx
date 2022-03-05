import { Routes, Route, BrowserRouter } from "react-router-dom";
import EjercicioOne from "../components/ejercicioOne/EjercicioOne";
import EjercicioThree from "../components/ejercicioThree/EjercicioThree";
import EjercicioTwo from "../components/ejercicioTwo/EjercicioTwo";
import { Navbar } from "../components/navbar/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />  
        <Routes>
          <Route path="/ejercicioOne" element={<EjercicioOne />}/>
          <Route path="/ejercicioTwo" element={<EjercicioTwo />}/>
          <Route path="/ejercicioThree" element={<EjercicioThree />}/>
        </Routes>
    </BrowserRouter>
  )
}
