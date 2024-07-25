// layout.js
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import styles from "./componentes/css.module.css";



export const metadata = {
  
  title: 'Indie-Store',
  description: 'Indie-Store',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="pt-br">
       
       <link rel="icon" href="/images/logo2.png"  />


      <body className={styles.body}>
        <Header />
       
        {children}
        <Footer />

      
      </body>
    </html>
  );
}
