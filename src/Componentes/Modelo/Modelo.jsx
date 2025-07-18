import React from "react";
import { Volver } from "../volver/Volver";
import styles from "./Modelo.module.css"

export const Modelo = () => {
  return (
    <div className={styles.contenedor }>
      <Volver />
      <img
      className={styles.imagen }
        src="https://res.cloudinary.com/dbfpjsjym/image/upload/v1752866295/Untitled_sug12q.png"
        alt=""
      />
    </div>
  );
};
