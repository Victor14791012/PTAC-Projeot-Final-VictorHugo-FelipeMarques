
# Projeto Web de Jogos Indies

Este projeto foi desenvolvido como parte do trabalho final para a disciplina **PROGRAMAÇÃO E TECNOLOGIAS PARA APLICAÇÕES CLIENTE 3 (PTAC3)**, por **Victor Hugo Lourenço de Carvalho** e **Felipe Marques**. O projeto é uma mini aplicação web que exibe jogos indies, inspirado no design das plataformas Steam e Nuvem. A aplicação utiliza **Next.js**, **JavaScript (JS)** e **CSS**, e inclui uma API simulada, criada localmente na pasta do projeto.

Repositório do projeto no GitHub: [PTAC Projeto Final - Victor Hugo & Felipe Marques](https://github.com/Victor14791012/PTAC-Projeot-Final-VictorHugo-FelipeMarques)

## Funcionalidades

- **Next.js** para renderização no lado do servidor e roteamento.
- **Roteamento dinâmico**: As rotas mudam dinamicamente com base no ID do jogo na API.
- **API Simulada**: Uma API local que fornece dados dos jogos indies.
- **Componentes Reutilizáveis**: Componentes criados para serem reutilizados em várias páginas do projeto.
- **Design Responsivo**: Estilizado com CSS para garantir compatibilidade em diferentes dispositivos, seguindo práticas modernas de design web inspiradas em plataformas de jogos.

## Tecnologias Utilizadas

- **Next.js**: Um framework React para construção de aplicações web rápidas com renderização no lado do servidor.
- **JavaScript (JS)**: Utilizado para criar os componentes e gerenciar a lógica da aplicação.
- **CSS**: Para estilização e design responsivo.
- **API Local**: Dados simulados da API armazenados localmente no projeto.

## Estrutura do Projeto

- **Componentes**: Contém os componentes reutilizáveis usados em diferentes páginas.
- **Páginas**: Implementa o roteamento, incluindo rotas dinâmicas para acessar jogos por ID.
- **Pasta da API**: Armazena os dados da API simulada utilizados pela aplicação.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Victor14791012/PTAC-Projeot-Final-VictorHugo-FelipeMarques.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd PTAC-Projeot-Final-VictorHugo-FelipeMarques
   ```

3. Instale as dependências:
   ```bash
   npm i
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e vá para:
   ```
   http://localhost:3000
   ```

## Simulação de API

A API é simulada localmente e fornece dados para a lista de jogos indies. Ela retorna informações dos jogos 

Essa API é acessada nas páginas que precisam dos dados dos jogos, permitindo o carregamento dinâmico do conteúdo com base no jogo selecionado.

## Inspiração

O design deste projeto foi inspirado em plataformas de jogos populares como **Steam** e **Nuvem**, com foco na simplicidade e na usabilidade.

---

Projeto desenvolvido por **Victor Hugo Lourenço de Carvalho** e **Felipe Marques**.
