"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';

export default function Carousel() {
  const [games, setGames] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api'); // Certifique-se de que a URL da API está correta
        const data = await response.json();
        setGames(data.slice(0, 4).map(game => ({
          ...game,
          descricao: truncateDescription(game.descricao),
        }))); // Limita a exibição a 6 itens
      } catch (error) {
        console.error('Failed to fetch games:', error);
      }
    };
    
    fetchGames();
  }, []);

  const truncateDescription = (description) => {
    const maxLength = 100; // Defina o comprimento máximo desejado
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    } else {
      return description;
    }
  };

  return (
    <div className={styles.carouselContainer}>
      {games.map((game, index) => (
        <div
          key={index}
          className={`${styles.carouselItem} ${hovered === index ? styles.hovered : ''}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Image src={game.imgCarrosel} alt={game.name} width={300} height={200} />
          <div className={styles.overlay}>
            <h2>{game.name}</h2>
            <p>{game.descricao}</p>
            <p>Plataformas: {game.plataformaText.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
