"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import Carregando from "./Carregando";
import ErrorGetData from './ErrorGetData';
import Link from "next/link";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carrosel from "./Carrosel";

export default function Main() {
  const [listProducts, setListProducts] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const data = await response.json();
        setListProducts(data);
        setListComplete(data);
      } catch {
        setErrorFetch(true);
      }
    };
    getProduct();
  }, []);

  const orderAZ = () => {
    const newList = [...listProducts].sort((a, b) => a.name.localeCompare(b.name));
    setListProducts(newList);
  };

  const orderPriceMenor = () => {
    const newList = [...listProducts].sort((a, b) => a.preco - b.preco);
    setListProducts(newList);
  };

  const orderPriceMaior = () => {
    const newList = [...listProducts].sort((a, b) => b.preco - a.preco);
    setListProducts(newList);
  };

  const searchText = (text) => {
    setSearch(text);

    if (text.trim() === "") {
      setListProducts(listComplete);
      setNoResults(false);
      return;
    }

    const newList = listComplete.filter((products) =>
      products.name.toUpperCase().trim().includes(text.toUpperCase().trim())
    );
    setListProducts(newList);
    setNoResults(newList.length === 0);
  };

  if (listProducts.length === 0) {
    if (errorFetch === true) {
      return <ErrorGetData />;
    } else if (noResults) {
      return <p className={styles.noResults}>Nenhum resultado encontrado recarregue a pagina.</p>;
    } else {
      return <Carregando />;
    }
  } else {
    return (
      <main className={styles.main}>
        <Carrosel />
        <h1 className={styles.catalogoH1}>Catálogo</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={search}
            onChange={(e) => searchText(e.target.value)}
            placeholder="Pesquisar produtos..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.ordenar}>
          <button className="btn btn-primary me-2" onClick={orderAZ}>
            Ordenar A-Z <i className="bi bi-sort-alpha-down"></i>
          </button>
          <button className="btn btn-primary me-2" onClick={orderPriceMenor}>
            Ordenar Preço Menor - Maior <i className="bi bi-sort-numeric-up"></i>
          </button>
          <button className="btn btn-primary" onClick={orderPriceMaior}>
            Ordenar Preço Maior - Menor <i className="bi bi-sort-numeric-down"></i>
          </button>
        </div>
        <div className={styles.productsContainer}>
          {listProducts.map((produto) => (
            <Link href={`/game/${produto.id}`} key={produto.id} style={{ textDecoration: "none", color: "inherit" }}>
              <div className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image width={200} height={200} src={produto.imagesPrincipal} alt={produto.title} />
                </div>
                <div className={styles.productTextContainer}>
                  <p className={styles.productName}>{produto.name}</p>
                  <p className={styles.productPlataforma}>
                    <i className={produto.plataforma[0]}></i> / <i className={produto.plataforma[1]}></i> / <i className={produto.plataforma[2]}></i>
                  </p>
                </div>
                <div className={styles.productInfo}>
                  <button className={styles.addToCartButton}>
                    <p className={styles.productPrice}>R${produto.preco}</p>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    );
  }
}
