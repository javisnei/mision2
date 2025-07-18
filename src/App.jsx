import { Link, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Modelo } from "./Componentes/Modelo/Modelo";
import { Tablas } from "./Componentes/Tablas/Tablas";
import { Pruebas } from "./Componentes/Pruebas/Pruebas";
import { Insertar } from "./Componentes/Insertar/Insertar";
import { Inicio } from "./Componentes/Inicio/Inicio";
import { RutaFeliz } from "./Componentes/RutaFeliz/RutaFeliz";

function App() {
  return (
    <>
      <div className={styles.cont1}>
    
        <div>
          <Routes>
             <Route path="/" element={<Inicio />} />
            <Route path="/Modelo" element={<Modelo />} />
            <Route path="Tablas" element={<Tablas />} />
            <Route path="Pruebas" element={<Pruebas />} />
            <Route path="/insertar" element={<Insertar />} />
            <Route path="/rutaFeliz" element={<RutaFeliz />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
