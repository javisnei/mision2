import React, { useState } from "react";

import styles from "../Insertar/Insertar.module.css";
import { Volver } from "../volver/Volver";

export const Tablas = () => {
  const imagenes = [
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868535/fijos_f8w0ut.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868543/usuario_e9wbtr.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868534/categoria_moiu0g.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868534/compra_n8x3tj.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868537/notas_siagpn.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868541/recordatorio_vqavmd.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868540/notificacion_am95kt.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868537/historial_a8pbup.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752868534/compartir_mr1orw.png",
  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <>
      <Volver />
      <div className={styles.contenedor}>
        <div className={styles.imagenwrapper}>
          <img
            key={indice}
            src={imagenes[indice]}
            alt={`Imagen ${indice + 1}`}
            className={styles.imagengaleria}
          />
        </div>
        <div className={styles.botones}>
          <button onClick={anterior}>⏪ Anterior</button>
          <button onClick={siguiente}>Siguiente ⏩</button>
        </div>
      </div>
    </>
  );
};
