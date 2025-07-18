import React, { useState } from "react";
import styles from "../Insertar/Insertar.module.css";
import { Volver } from "../volver/Volver";

export const RutaFeliz = () => {
  const imagenes = [
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876710/nuevoUsuario_w0bktl.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876708/nuevaCompra_yszxnc.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876706/nuevaNota_ho1rnz.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876705/nuevoRecordatorio_htu2ui.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876702/nuevaNotificacion_suecyp.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752876702/compartirentreUsuaroos_nyjdcb.png"

  ];

  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((indice + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndice((indice - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className={styles.contenedor}>
      <Volver />
      <div className={styles.imagenwrapper}>
        <img
          key={indice}
          src={imagenes[indice]}
          alt={`Imagen ${indice + 1}`}
          className={styles.imagengaleria}
        />
        <div className={styles.botones}>
          <button onClick={anterior}>⏪ Anterior</button>
          <button onClick={siguiente}>Siguiente ⏩</button>
        </div>
      </div>
    </div>
  );
};
