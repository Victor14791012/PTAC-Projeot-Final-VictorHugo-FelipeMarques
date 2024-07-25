import Image from 'next/image';
import styles from "./componentes/css.module.css";

export default function NotFound() {
  return (
    <div  className={styles.notFound }>
      <Image
        width={150}
        height={100}
        src="/images/logo.png"
        alt="Logo"
      />
      <h1 >Página não encontrada</h1>
    </div>
  );
}

