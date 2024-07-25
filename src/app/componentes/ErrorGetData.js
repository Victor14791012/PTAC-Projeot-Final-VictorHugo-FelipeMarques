"use client"; 

import styles from "./ErrorGetData.module.css";

export default function ErrorGetData() {
  return (
    <div className={styles.errorContainer}>
      <h2>Erro ao carregar dados</h2>
      <p>Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.</p>
    </div>
  );
}
