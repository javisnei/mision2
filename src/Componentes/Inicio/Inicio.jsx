import React from "react";

import styles from "../../App.module.css";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Compras</h1>

      <p className={styles.description}>
        Este proyecto está ambientado para el uso personal de cualquier usuario
        que desee llevar un registro de aquello que compra, lo que quisiera
        comprar y tambien poder llegar a tener notas para recordar en algun
        momento dado algo por realizar.
      </p>

      <div className={styles.integrantesBox}>
        <h3 className={styles.subTitle}>Integrantes del Proyecto</h3>
        <ul>
          <li>Javier Sneider Rincón Moreno</li>
        </ul>
      </div>

      <div className={styles.buttonGroup}>
        <Link to="/Modelo" className={styles.boton}>
          Representación del Modelo ER
        </Link>
        <Link to="/Tablas" className={styles.boton}>
          Creación de Entidades
        </Link>
        <Link to="/Pruebas" className={styles.boton}>
          Operación de Prueba
        </Link>
      </div>
    </div>
  );
};
