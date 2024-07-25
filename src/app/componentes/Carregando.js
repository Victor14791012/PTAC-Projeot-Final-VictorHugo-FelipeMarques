import Image from 'next/image'; // Importe o componente Image do Next.js

export default function Carregando() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , te:'white'}}>
            <Image
                src="/loading.svg"
                alt="imagem carregando"
                width={100}
                height={100}
            />
        </div>
    );
}
