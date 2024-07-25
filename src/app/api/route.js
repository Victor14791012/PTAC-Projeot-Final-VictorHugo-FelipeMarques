// api antiga

//import { NextResponse } from "next/server";

// const games = [
//     { id: 1, name: 'Hollow Knight',
//         preco: 14.99, 
//         genero: 'Action-Adventure', 
//         descricao: 'Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão',
//         desenvolvedora: 'Team Cherry' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/nSPJXlYjENE?si=jINP7hapmBIRu9Dz'],
//         imagesDeExibicao: ['https://s2-techtudo.glbimg.com/lBU0NMFgaehPYNQ-wTDLpx7AEHU=/800x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2020/04/14/hollow-knight-1.jpg','https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.600x338.jpg?t=1695270428', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.600x338.jpg?t=1695270428','https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_a81e4231cc8d55f58b51a4a938898af46503cae5.600x338.jpg?t=1695270428','https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_62e10cf506d461e11e050457b08aa0e2a1c078d0.600x338.jpg?t=1695270428'] ,
//         imagesPrincipal: 'https://assets-prd.ignimgs.com/2021/12/07/hollowknight-1638908888257.png?width=300&crop=1%3A1%2Csmart&auto=webp' 

//     }, 
//     { id: 2, name: 'Cuphead',
//         preco: 22.99, 
//         genero: 'Action-Adventure', 
//         descricao: 'Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz. Jogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!',
//         desenvolvedora: 'Studio MDHR Entertainment Inc.' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/NN-9SQXoi50?si=bP0ze-LJgtSkco2m'],
//         imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.600x338.jpg?t=1695270428', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_d5b6edd94e77ba6db31c44d8a3c09d807ab27751.600x338.jpg?t=1695270428'] ,
//         imagesPrincipal: 'https://assets1.ignimgs.com/2019/03/21/cuphead---button-fin-1553203839109.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' 

//     },
//     { id: 3, name: 'Undertale',
//         preco: 4.99, 
//         genero: 'Action-Adventure', 
//         descricao: 'Welcome to UNDERTALE. In this RPG, you control a human who falls underground into the world of monsters. Now you must find your way out... or stay trapped forever.((Healthy Dog',
//         desenvolvedora: 'tobyfox' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/oRN6341NB7Y?si=ZEfKXptqD8Rh7gos'],
//         imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_b9ec4c53a8ed37f764649c970757c0a1f4948ec1.600x338.jpg?t=1579096091', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_6ded97a2c98473ac1e8a2b3c1419d93fb31b1186.600x338.jpg?t=1579096091'] ,
//         imagesPrincipal: 'https://assets-prd.ignimgs.com/2022/02/01/understale-sq-1643754419947.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' 

//     },
//     { 
//         id: 4, 
//         name: 'Stardew Valley',
//         preco: 14.99, 
//         genero: 'Simulation, RPG', 
//         descricao: 'Stardew Valley é um jogo de simulação de fazenda criado por ConcernedApe. Herde uma fazenda antiga, plante colheitas, cuide dos animais, pesque, cave minas e interaja com os moradores da cidade para restaurar a vida rural e redescobrir a alegria da agricultura.',
//         desenvolvedora: 'ConcernedApe' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
//         imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_c32865684c8d45b3f57fbb1e93bfa47c2a845cbf.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_6422d297347258086b389e3d5d9c0e0c698312e4.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.600x338.jpg?t=1711128146'] ,
//         imagesPrincipal: 'https://assets-prd.ignimgs.com/2021/12/20/stardewvalley-1640044262769.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' 
//       },

//     { 
//         id: 5, 
//         name: 'Stardew Valley',
//         preco: 14.99, 
//         genero: 'Simulation, RPG', 
//         descricao: 'Stardew Valley é um jogo de simulação de fazenda criado por ConcernedApe. Herde uma fazenda antiga, plante colheitas, cuide dos animais, pesque, cave minas e interaja com os moradores da cidade para restaurar a vida rural e redescobrir a alegria da agricultura.',
//         desenvolvedora: 'ConcernedApe' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
//         imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_c32865684c8d45b3f57fbb1e93bfa47c2a845cbf.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_6422d297347258086b389e3d5d9c0e0c698312e4.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.600x338.jpg?t=1711128146'] ,
//         imagesPrincipal: 'https://assets-prd.ignimgs.com/2021/12/20/stardewvalley-1640044262769.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' 
//       },
//       { 
//         id: 6, 
//         name: 'Stardew Valley',
//         preco: 14.99, 
//         genero: 'Simulation, RPG', 
//         descricao: 'Stardew Valley é um jogo de simulação de fazenda criado por ConcernedApe. Herde uma fazenda antiga, plante colheitas, cuide dos animais, pesque, cave minas e interaja com os moradores da cidade para restaurar a vida rural e redescobrir a alegria da agricultura.',
//         desenvolvedora: 'ConcernedApe' ,
//         qtdVendas: 100 ,
//         plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
//         plataformaText: ["steam" ,"nintendo-switch","xbox"],
//         videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
//         imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_c32865684c8d45b3f57fbb1e93bfa47c2a845cbf.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_6422d297347258086b389e3d5d9c0e0c698312e4.600x338.jpg?t=1711128146', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.600x338.jpg?t=1711128146'] ,
//         imagesPrincipal: 'https://assets-prd.ignimgs.com/2021/12/20/stardewvalley-1640044262769.jpg?width=300&crop=1%3A1%2Csmart&auto=webp' 
//       },
// ];

// export async function GET(){
//     return NextResponse.json(games)
// }

import { NextResponse } from "next/server";

const games = [
    {
        id: 1,
        name: 'Hollow Knight',
        preco: 46.99,
        genero: 'Action-Adventure',
        descricao: 'Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.',
        desenvolvedora: 'Team Cherry',
        qtdVendas: 2.800000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/ss_5384f9f8b96a0b9934b2bc35a4058376211636d2.116x65.jpg?t=1695270428'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428',
        imgCarrosel:'https://assets-prd.ignimgs.com/2021/12/07/hollowknight-1638908888257.png?width=300&crop=1%3A1%2Csmart&auto=webp'
    },

    {
        id: 2,
        name: 'Cuphead',
        preco: 36.99,
        genero: 'Action-Adventure',
        descricao: 'Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz. Jogue como Cuphead ou Mugman (nos modos um só jogador ou cooperativo) e atravesse mundos estranhos, adquira novas armas, aprenda supergolpes potentes e descubra segredos ocultos, tudo isso enquanto tenta pagar a dívida que você fez com o diabo!',
        desenvolvedora: 'Studio MDHR Entertainment Inc.',
        qtdVendas: 5.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_e3096a5555cb77d88db165c83d5ef3a24af1354a.600x338.jpg?t=1709068852', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/ss_615455299355eaf552c638c7ea5b24a8b46e02dd.600x338.jpg?t=1709068852'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852',
        imgCarrosel:'https://assets1.ignimgs.com/2019/03/21/cuphead---button-fin-1553203839109.jpg?width=300&crop=1%3A1%2Csmart&auto=webp'
    },

    {
        id: 3,
        name: 'Undertale',
        preco: 19.99,
        genero: 'Action-Adventure',
        descricao: 'UNDERTALE! The RPG game where you dont have to destroy anyone',
        desenvolvedora: 'tobyfox',
        qtdVendas: 530.343,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_6ded97a2c98473ac1e8a2b3c1419d93fb31b1186.600x338.jpg?t=1579096091', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/ss_b9018c41cea2bdfb150609bedfca99b16a5af02a.600x338.jpg?t=1579096091'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091',
        imgCarrosel:'https://assets-prd.ignimgs.com/2022/02/01/understale-sq-1643754419947.jpg?width=300&crop=1%3A1%2Csmart&auto=webp'
    },

    {
        id: 4,
        name: 'Celeste',
        preco: 59.99,
        genero: 'Platformer',
        descricao: 'Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste, nesse jogo de plataforma super afiado dos criadores de TowerFall. Desbrave centenas de desafios meticulosos, descubra segredos complicados e desvende o mistério da montanha.',
        desenvolvedora: 'Maddy Makes Games Inc., Extremely OK Games, Ltd.',
        qtdVendas: 500.000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_03bfe6bd5ddac7f747c8d2aa1a4f82cfd53c6dcb.600x338.jpg?t=1714089525', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/ss_3140f6f87aa74c20e142c36d74691f930eda88d5.600x338.jpg?t=1714089525'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525',
        imgCarrosel:'https://assets1.ignimgs.com/2018/01/23/celeste---button-1516746065043.jpg?width=300&crop=1%3A1%2Csmart&auto=webp'
    },

    {
        id: 5,
        name: 'Stardew Valley',
        preco: 24.99,
        genero: 'Simulation',
        descricao: 'Você herdou a antiga fazenda do seu avô, em Stardew Valley. Com ferramentas de segunda-mão e algumas moedas, você parte para dar início a sua nova vida. Será que você vai aprender a viver da terra, a transformar esse matagal em um próspero lar?',
        desenvolvedora: 'ConcernedApe',
        qtdVendas: 20.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_91f4be6c85aaea4ecd63c6177b36b2f8d5e9a1e6.600x338.jpg?t=1630517790', 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_7b189f65a0f2a8881ef97d2c1c4edaa12ea9079e.600x338.jpg?t=1630517790'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146'
    },

    {
        id: 6,
        name: 'Hades',
        preco: 73.99,
        genero: 'Action-RPG',
        descricao: 'Desafie o deus dos mortos enquanto você batalha para sair do Submundo neste jogo roguelike dos mesmos criadores de Bastion, Transistor e Pyre.',
        desenvolvedora: 'Supergiant Games',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_c0fed447426b69981cf1721756acf75369801b31.600x338.jpg?t=1715722799', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/ss_fa48b583bfd1423561c6efdd6690b30acd85887c.600x338.jpg?t=1715722799'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg?t=1715722799'
    },

    {
        id: 7,
        name: 'Enter the Gungeon',
        preco: 46.99,
        genero: 'Roguelike',
        descricao: 'Enter the Gungeon é uma aventura em um labirinto com armas de fogo, na qual um bando de desajustados arrependidos terá que atirar, saquear, se esquivar e virar mesas, em busca da absolvição pessoal, chegando ao lendário tesouro final do Balabirinto: a arma que mata o passado.',
        desenvolvedora: 'Dodge Roll',
        qtdVendas: 3.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/ss_bca0036bc452b872a7d9ee3de9e0c9548e8cd4f5.600x338.jpg?t=1713472631', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/ss_9d3f304b18e8cd1cf6ac4a886bec474e0b677800.600x338.jpg?t=1713472631'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/header.jpg?t=1713472631'
    },

    {
        id: 8,
        name: 'Dead Cells',
        preco: 47.49,
        genero: 'Metroidvania',
        descricao: 'Dead Cells é um "roguelite" de ação em plataforma estilo Metroidvania. Você vai explorar um castelo extenso e em constante mutação... Sem checkpoints. Mate, morra, aprenda, repita.',
        desenvolvedora: 'Motion Twin',
        qtdVendas: 5.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_ac28000ade40cc2fe5c128f32ac98ba33c008a7a.600x338.jpg?t=1717495895', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/ss_7bde51ea6c8f6289e85ea1d8c1c941e1f8bfee91.600x338.jpg?t=1717495895'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1717495895'
    },

    {
        id: 9,
        name: 'Shovel Knight',
        preco: 75.49,
        genero: 'Platformer',
        descricao: 'Shovel Knight: Treasure Trove é a edição integral e completa de Shovel Knight, um jogo de aventura e ação clássico arrebatador, com uma jogabilidade incrível, personagens memoráveis e estética retrô de 8 bits! Na pele de Shovel Knight, portador da Lâmina-pá, corra, pule e lute numa aventura pelo seu amor perdido. Derrote os abomináveis cavaleiros da Ordem Inclemente e confronte sua líder ameaçadora: a Feiticeira.',
        desenvolvedora: 'Yacht Club Games',
        qtdVendas: 2.500000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250760/ss_baa7f49b90967605b11082a58cf7baa8a41a3bb3.600x338.jpg?t=1701228370', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250760/ss_519230118c68f9bab8c8975d9e064df7060af53d.600x338.jpg?t=1701228370'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250760/header.jpg?t=1701228370'
    },

    {
        id: 10,
        name: 'Night in the Woods',
        preco: 59.99,
        genero: 'Adventure',
        descricao: 'NIGHT IN THE WOODS is an adventure game focused on exploration, story, and character, featuring dozens of characters to meet and lots to do across a lush, vibrant world.',
        desenvolvedora: 'Infinite Fall',
        qtdVendas: 100.000,
        plataforma: ["bi bi-steam", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481510/ss_f038268bdcef20dc090dca4e0ac8fbed4923c496.600x338.jpg?t=1706292417', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481510/ss_be58beee5186f4b06b828a90a126f47cca55ae0a.600x338.jpg?t=1706292417'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481510/header.jpg?t=1706292417'
    },

    {
        id: 11,
        name: 'Ori and the Blind Forest',
        preco: 99.99,
        genero: 'Platformer',
        descricao: '"Ori and the Blind Forest" conta a história de um jovem órfão destinado a feitos heróicos através de um jogo de plataforma com um visual impressionante, criado pela Moon Studios para PC.',
        desenvolvedora: 'Moon Studios GmbH',
        qtdVendas: 10.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261570/ss_c617379b9d195eed0342f3ecf86898513e702b96.600x338.jpg?t=1667504148', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261570/ss_a4dbe240c363fe04e39a13c9bd78c88c026f3c50.600x338.jpg?t=1667504148'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261570/header.jpg?t=1667504148'
    },

    {
        id: 12,
        name: 'A Hat in Time',
        preco: 88.99,
        genero: 'Platformer',
        descricao: 'A Hat in Time is a cute-as-heck 3D platformer featuring a little girl who stitches hats for wicked powers! Freely explore giant worlds and recover Time Pieces to travel to new heights!',
        desenvolvedora: 'Gears for Breakfast',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253230/ss_eb442a7301b8a0d8e94c4064575ebe68d77deb12.600x338.jpg?t=1688042605', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253230/ss_b9a71f27ac4c7428666490065b872087c9d8cacb.600x338.jpg?t=1688042605'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/253230/header.jpg?t=1688042605'
    },

    {
        id: 13,
        name: 'Firewatch',
        preco: 59.99,
        genero: 'Adventure',
        descricao: 'Firewatch is a single-player first-person mystery set in the Wyoming wilderness, where your only emotional lifeline is the person on the other end of a handheld radio.',
        desenvolvedora: 'Campo Santo',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383870/ss_80432f2d4f4192017115c23e7dff090df95b204a.600x338.jpg?t=1688484486', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383870/ss_c7e16bc8d5a6d40ab1f7c339395d26d8f6eb57ff.600x338.jpg?t=1688484486'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383870/header.jpg?t=1688484486'
    },

    {
        id: 14,
        name: 'Hyper Light Drifter',
        preco: 36.99,
        genero: 'Action-Adventure',
        descricao: 'Explore a beautiful, vast and ruined world riddled with dangers and lost technologies.',
        desenvolvedora: 'Heart Machine',
        qtdVendas: 100.000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_e786b1d9c66eb9c61e4da2945fe1d9faeb2af736.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_19c973259b736f14c4541ba044f3761b39a18737.600x338.jpg?t=1649868127'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/header.jpg?t=1649868127'
    },

    {
        id: 15,
        name: 'Limbo',
        preco: 9.99,
        genero: 'Puzzle-Platformer',
        descricao: '',
        desenvolvedora: '',
        qtdVendas: 100,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://cdn.cloudflare.steamstatic.com/steam/apps/48000/ss_5e6cbe21b0a3e2b3ff0cd6ef6d0ae0e2b54a5ce0.600x338.jpg?t=1638322976', 'https://cdn.cloudflare.steamstatic.com/steam/apps/48000/ss_43f8d69a81b998e4de3a6761d8d84c7dd617c23a.600x338.jpg?t=1638322976'],
        imagesPrincipal: 'https://cdn.cloudflare.steamstatic.com/steam/apps/48000/header.jpg?t=1638322976'
    },

    {
        id: 16,
        name: 'The Messenger',
        preco: 29.99,
        genero: 'Action, Platformer',
        descricao: '    Enquanto seu vilarejo é sitiado por um exército demoníaco, um jovem ninja parte em uma aventura por um mundo amaldiçoado para entregar um pergaminho fundamental para a sobrevivência de seu clã.',
        desenvolvedora: 'Sabotage Studio',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/764790/ss_8e0fa7f8226d8f8fd0dd313e26e6b4d97562f7a3.600x338.jpg?t=1710763477', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/764790/ss_105fd3de6a4dbf2cb848f2c265212ae3eb7434e5.600x338.jpg?t=1710763477'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/764790/header.jpg?t=1710763477'
    },

    {
        id: 17,
        name: 'Slay the Spire',
        preco: 39.99,
        genero: 'Roguelike, Card Game',
        descricao: 'Nós combinamos jogos de carta com roguelike para fazer o melhor deckbuilder single player que pudemos. Monte um deck único, encontre criaturas bizarras, descubra relíquias de imenso poder, e Destrua o Pináculo(Slay The Spire)!',
        desenvolvedora: 'MegaCrit',
        qtdVendas: 2.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_c171816f7ecd35b5b46d2fa27532f4c5b8ca3cc5.600x338.jpg?t=1712773871', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/ss_01aa3e7759e457bfbf2422f31c325d7b3ba8a6eb.600x338.jpg?t=1712773871'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg?t=1712773871'
    },

    {
        id: 18,
        name: 'Axiom Verge',
        preco: 19.99,
        genero: 'Metroidvania',
        descricao: 'Explore e desvende o mistério de um mundo alienígena surreal explodindo aliens e usando os glitches do ambiente ao seu redor nesta intensa aventura/ação retro de deslocamento lateral.',
        desenvolvedora: 'Thomas Happ Games',
        qtdVendas: 500.000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/332200/ss_978607583bf147d520f488bb9acdb1c00ea3349b.600x338.jpg?t=1645563574', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/332200/ss_6fa9f9993bd867660e70f42f4e37f66c1359feb1.600x338.jpg?t=1645563574'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/332200/header.jpg?t=1645563574'
    },

    {
        id: 19,
        name: 'Oxenfree',
        preco: 19.99,
        genero: 'Adventure',
        descricao: 'Oxenfree is a supernatural thriller about a group of friends who unwittingly open a ghostly rift. You are Alex, and you’ve just brought your new stepbrother Jonas to an overnight island party gone horribly wrong.',
        desenvolvedora: 'Night School Studio',
        qtdVendas: 1.500000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/388880/ss_72abbfd384f1825b6d68ed8977b373b78dfbc30f.600x338.jpg?t=1718924110', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/388880/ss_a976add91216ecd7f5b9530a3928dc32b658c7dd.600x338.jpg?t=1718924110'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/388880/header.jpg?t=1718924110'
    },

    {
        id: 20,
        name: 'Risk of Rain 2',
        preco: 39.99,
        genero: 'Action, Roguelike',
        descricao: 'Fuja de um planeta alienígena caótico enfrentando hordas de monstros frenéticos com seus amigos ou por conta própria. Combine itens de maneiras inusitadas e domine cada personagem para se tornar o caos que você temia depois da primeira aterrissagem forçada.',
        desenvolvedora: 'Hopoo Games',
        qtdVendas: 3.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_2bb49071317f7b241a527cf6e7aabd2cb6af055b.600x338.jpg?t=1699992764', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/ss_a3f57f281813cb51cb5d919701470acb962ff297.600x338.jpg?t=1699992764'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg?t=1699992764'
    },

    {
        id: 21,
        name: 'Gris',
        preco: 16.99,
        genero: 'Adventure',
        descricao: 'Gris é uma jovem esperançosa, perdida em seu próprio mundo, que lida com uma dolorosa experiência.',
        desenvolvedora: 'Nomada Studio',
        qtdVendas: 500.000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/683320/ss_4fa618f5a2141d48a05716d43598a260235b0aaa.600x338.jpg?t=1721032112', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/683320/ss_a155ad5423e11e3e764a1a270dcf4f30323f0a35.600x338.jpg?t=1721032112'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/683320/header.jpg?t=1721032112'
    },

    {
        id: 22,
        name: 'Hyper Light Drifter',
        preco: 19.99,
        genero: 'Action, Adventure',
        descricao: 'Explore a beautiful, vast and ruined world riddled with dangers and lost technologies.',
        desenvolvedora: 'Heart Machine',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_e786b1d9c66eb9c61e4da2945fe1d9faeb2af736.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_19c973259b736f14c4541ba044f3761b39a18737.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_37ad0b207c867078e87cf8a185fe3c66b0bdd490.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_b38d4392356a39a745fd18c032195a71c40d038b.600x338.jpg?t=1649868127','https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_6f2737707906d93e4bd92c7aa4db615b8da10693.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_fba6762a846f9d79ade2f008514e2e4cea16d0a4.600x338.jpg?t=1649868127', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/ss_102dcb97e5b22daf206a3432e4f22415f135c46a.600x338.jpg?t=1649868127' ],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/257850/header.jpg?t=1649868127'
    },

    {
        id: 23,
        name: 'Spelunky 2',
        preco: 29.99,
        genero: 'Platformer, Roguelike',
        descricao: 'Spelunky 2 baseia-se nos desafios únicos e aleatorizados que transformaram o jogo original num clássico de masmorras, oferecendo uma enorme aventura concebida para satisfazer os jogadores experientes ou novos.',
        desenvolvedora: 'Mossmouth, BlitWorks',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418530/ss_bf20692e69cfef2da4b6b4096f42823a5283701c.600x338.jpg?t=1663719294', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418530/ss_e92a2f46bb81fc745684204858ecc1284b3eeae4.600x338.jpg?t=1663719294'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418530/header.jpg?t=1663719294'
    },

    {
        id: 24,
        name: 'Bastion',
        preco: 14.99,
        genero: 'Action, RPG',
        descricao: 'Descobre os segredos da Calamidade, uma catástrofe surreal que deixou o mundo em pedaços.',
        desenvolvedora: 'Supergiant Games',
        qtdVendas: 3.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/107100/ss_12e48f86f7429da252c6895ad337b0ac38560244.600x338.jpg?t=1670649904', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/107100/ss_490170c42afe389fb80324b5c29f9b704d87943e.600x338.jpg?t=1670649904'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/107100/header.jpg?t=1670649904'
    },

    {
        id: 25,
        name: 'Inside',
        preco: 19.99,
        genero: 'Puzzle, Platformer',
        descricao: 'Caçado e sozinho, um garoto acaba sendo atraído para o centro de um projeto sombrio.',
        desenvolvedora: 'Playdead',
        qtdVendas: 1.000000,
        plataforma: ["bi bi-steam", "bi bi-nintendo-switch", "bi bi-playstation", "bi bi-xbox"],
        plataformaText: ["steam", "nintendo-switch", "playstation", "xbox"],
        videosExibicao: ['https://www.youtube.com/embed/8A7A1X1TVNc?si=fRePIa7vQFc8fLIV'],
        imagesDeExibicao: ['https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_d23769199f1e3d498f8293892f0456696458c717.600x338.jpg?t=1684943720', 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/ss_ebeba62a8d2141b4fd36760500529fb2d9a29190.600x338.jpg?t=1684943720'],
        imagesPrincipal: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/304430/header.jpg?t=1684943720'
    }
];

export async function GET() {
    return NextResponse.json(games)
}