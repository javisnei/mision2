import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./volver.module.css"
export const Volver = () => {
  return (
    <div className={styles.boton}>
      <Link to="/">🏠 Inicio</Link>
    </div>
  )
}
