import { useState } from "react";
import { Volver } from "../volver/Volver";
import styles from "./Insertar.module.css";

export const Insertar = () => {
  const imagenes = [
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870828/insertarUsuario_ihscys.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870830/insertCategoria_eahnwv.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870831/insertCompra_dmr5qw.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870842/insetarNotas_jw5efv.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870827/inserRecordatori_fs0puj.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870838/insertNotificacion_eqpduk.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870826/inserHistorial_iv3jxn.png",
    "https://res.cloudinary.com/dbfpjsjym/image/upload/v1752870834/insertConmpartir_ik3w6u.png",
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
  <span>Se realizo la insercion de 10 datos por cada tabla en el orden correspondiente que se ve acontinuacion:</span>
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
