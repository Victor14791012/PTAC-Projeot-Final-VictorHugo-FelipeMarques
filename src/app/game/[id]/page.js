"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./product.module.css";
import Carregando from '../../componentes/Carregando'; 
import ErrorGetData from '../../componentes/ErrorGetData'; 

// Função para extrair o ID do vídeo do YouTube a partir da URL
const getYoutubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export default function Product({ params }) {
  const [game, setGame] = useState(null);
  const [mainMedia, setMainMedia] = useState(null); // Estado para a mídia principal (imagem ou vídeo)
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api`);
        const data = await response.json();
        
        const selectedGame = data.find((game) => game.id === parseInt(params.id, 10));
        setGame(selectedGame);

        if (selectedGame) {
          setMainMedia(selectedGame.videosExibicao?.[0] || selectedGame.imagesPrincipal);
        }
      } catch {
        setErrorFetch(true);
      }
    };

    fetchData();
  }, [params.id]);

 

  if (errorFetch) {
    return <ErrorGetData/>;
  }

  if (!game) {
    return <Carregando/>;
  }

  const handleMediaClick = (media) => {
    setMainMedia(media);
  };

  return (
    <div className={styles.productContainer}>
      <Image
        className={styles.imgB}
        src={game.imagesDeExibicao[0]}
        alt={game.name}
        width={600}
        height={400}
      />
      <div className={styles.productImage}>
        {mainMedia?.includes("youtube.com") || mainMedia?.includes("youtu.be") ? (
          <iframe
            className={styles.productMainImage}
            src={mainMedia}
            width={700}
            height={400}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        ) : (
          <Image
            className={styles.productMainImage}
            src={mainMedia}
            alt={game.name}
            width={700}
            height={400}
          />
        )}
        <div className={styles.mediaThumbnailsContainer}>
          <div className={styles.mediaThumbnails}>
            {game.videosExibicao?.map((video, index) => {
              const videoId = getYoutubeVideoId(video);
              const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
              return (
                <Image
                  key={index}
                  src={thumbnailUrl}
                  alt={`Video Thumbnail ${index + 1}`}
                  width={180}
                  height={120}
                  onClick={() => handleMediaClick(video)}
                  className={`${styles.productThumbnail} ${mainMedia === video ? styles.active : ''}`}
                />
              );
            })}

            {game.imagesDeExibicao?.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={180}
                height={120}
                onClick={() => handleMediaClick(image)}
                className={`${styles.productThumbnail} ${mainMedia === image ? styles.active : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{game.name}</h1>
        <p className={styles.productCategory}><strong>Categoria:</strong> {game.genero}</p>
        <p className={styles.productDescription}><strong>Descrição:</strong> {game.descricao}</p>
        <p className={styles.productPrice}><strong>Preço:</strong> R${game.preco}</p>
        <p className={styles.productRating}><strong>Desenvolvedora:</strong> {game.desenvolvedora}</p>
        <p className={styles.productCount}><strong>Quantidade de Vendas:</strong> {game.qtdVendas}</p>
        <p className={styles.productPlatform}><strong>Plataforma:</strong> {game.plataformaText.join(", ")}</p>
      </div>
    </div>
  );
}
