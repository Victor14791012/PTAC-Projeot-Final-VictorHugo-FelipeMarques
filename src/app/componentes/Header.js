"use client"; // Adiciona essa linha para indicar que o componente é do lado do cliente

import Link from "next/link";
import styles from "./header.module.css"; // Certifique-se de que o caminho para o arquivo CSS está correto
import { useState } from "react";

export default function Menu() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <header className={styles.cabecalho}>

      


      <nav className={styles.nav}>

      <div className={styles.logoTitle}>
      <h1 className={styles.logoText} style={{  textDecoration: "none", color: "white" }}>
  <Link href="http://localhost:3000" style={{ textDecoration: "none", color: "white" }}>Indie-Store</Link>
</h1>

        </div>
        
        <div className={styles.menuIcon} onClick={toggleCategories}>
          <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
        </div>
        
        <div className={styles.icons}>
          <Link href="#">
            <p className={styles.fale_conosco}> Fale Conosco</p>
          </Link>
          <Link href="#">
            <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
          </Link>
          <Link href="#">
            <i className="bi bi-bag" style={{ fontSize: "2rem" }}></i>
          </Link>
          <Link href="#">
            <i className="bi bi-person" style={{ fontSize: "2rem" }}></i>
          </Link>
        </div>
      </nav>
      {showCategories && (
        <div className={styles.categories}>
          <Link href="#">Recomendação</Link>
          <Link href="#">melhores</Link>
        </div>
      )}
    </header>
  );
}
