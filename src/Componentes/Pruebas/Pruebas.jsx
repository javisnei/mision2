import React from "react";
import { Link } from "react-router-dom";
import styles from "../../App.module.css";
import { Volver } from "../volver/Volver";

export const Pruebas = () => {
  return (
    <div className={styles.contenedor}>
      <Volver />
      <Link to="/insertar" className={styles.boton}>
        Insertar
      </Link>

      <Link to="/rutaFeliz" className={styles.boton}>
        Ruta Feliz
      </Link>
    </div>
  );
};
