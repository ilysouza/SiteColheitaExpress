const products = [
    {
        id: 1,
        image: '../img/abacaxi-perola.jpg',
        type: 'unidade',
        price: 'R$ 8,50',
        description: 'Fruta doce, suculenta e com acidez suave. Perfeita para sucos, sobremesas ou para comer pura. Rica em vitamina C e excelente para refrescar.',
        title: 'Abacaxi pérola',
        local: 'Sabor do Campo'
    },
    {
        id: 2,
        image: '../img/abobora-japonesa.jpg',
        type: 'kg',
        price: 'R$ 6,00',
        description: 'Polpa alaranjada e sabor adocicado. Ideal para purês, sopas e assados. Rica em fibras e betacaroteno, ajuda na digestão e na saúde da pele.',
        title: 'Abóbora japonesa',
        local: 'Orgânicos da Vila'
    },
    {
        id: 3,
        image: '../img/abobrinha.jpg',
        type: 'kg',
        price: 'R$ 5,00',
        description: 'Leve, versátil e rica em água. Combina com refogados, grelhados e massas. Um ingrediente saudável para o dia a dia.',
        title: 'Abobrinha',
        local: 'Pomar da Montanha'
    },
    {
        id: 4,
        image: '../img/acafrao-in-natura.jpg',
        type: 'kg',
        price: 'R$ 38,00',
        description: 'Raiz de cor intensa e sabor marcante. Possui ação anti-inflamatória e antioxidante. Pode ser usada em sucos, chás e temperos.',
        title: 'Açafrão in natura',
        local: 'Terra Fértil'
    },
    {
        id: 5,
        image: '../img/acafrao-da-terra.jpg',
        type: 'kg',
        price: 'R$ 35,00',
        description: 'Tempero natural que dá cor e sabor aos alimentos. Excelente aliado da saúde e muito usado em pratos e bebidas.',
        title: 'Açafrão-da-terra',
        local: 'Horta da Serra'
    },
    {
        id: 6,
        image: '../img/acerola.jpg',
        type: 'kg',
        price: 'R$ 20,00',
        description: 'Fruta pequena e azedinha, com alto teor de vitamina C. Ideal para sucos naturais, sobremesas e geleias.',
        title: 'Acerola',
        local: 'Sítio Flor da Terra'
    },
    {
        id: 7,
        image: '../img/alecrim.jpg',
        type: 'maço',
        price: 'R$ 6,00',
        description: 'Erva aromática com perfume marcante. Dá sabor a carnes, batatas e pães, além de poder ser usada em chás relaxantes.',
        title: 'Alecrim',
        local: 'Horta da Serra'
    },
    {
        id: 8,
        image: '../img/alface-americana.jpg',
        type: 'maço',
        price: 'R$ 5,00',
        description: 'Folhas firmes e crocantes, perfeitas para saladas e sanduíches. Refrescante e rica em vitaminas.',
        title: 'Alface americana',
        local: 'Pomar da Montanha'
    },
    {
        id: 9,
        image: '../img/alface-crespa.jpg',
        type: 'maço',
        price: 'R$ 4,50',
        description: 'Textura leve e sabor suave. Ideal para saladas frescas e coloridas. Rica em fibras e minerais.',
        title: 'Alface crespa',
        local: 'Pomar da Montanha'
    },
    {
        id: 10,
        image: '../img/alface-lisa-organica.jpg',
        type: 'maço',
        price: 'R$ 6,00',
        description: 'Cultivada sem agrotóxicos, tem sabor delicado e natural. Opção saudável para o dia a dia.',
        title: 'Alface lisa orgânica',
        local: 'Orgânicos da Vila'
    },
    {
        id: 11,
        image: '../img/alho-fresco.jpg',
        type: 'kg',
        price: 'R$ 25,00',
        description: 'Mais suave e aromático que o comum. Realça o sabor de qualquer prato e possui propriedades naturais que fortalecem o organismo.',
        title: 'Alho fresco',
        local: 'Horta da Serra'
    },
    {
        id: 12,
        image: '../img/alho-poro.jpg',
        type: 'kg',
        price: 'R$ 10,00',
        description: 'Sabor leve e adocicado. Ideal para sopas, risotos e refogados. Fonte de vitaminas e minerais.',
        title: 'Alho-poró',
        local: 'Terra Fértil'
    },
    {
        id: 13,
        image: '../img/ameixa.jpg',
        type: 'kg',
        price: 'R$ 12,00',
        description: 'Doce e suculenta, rica em fibras e antioxidantes. Boa para o intestino e perfeita para sobremesas.',
        title: 'Ameixa',
        local: 'Sabor do Campo'
    },
    {
        id: 14,
        image: '../img/amendoas.png',
        type: 'unidade',
        price: 'R$ 70,00',
        description: 'Crocrantes, nutritivas e cheias de energia. Ótimas como lanche ou em receitas doces e salgadas.',
        title: 'Amêndoas',
        local: 'Sítio Boa Esperança'
    },
    {
        id: 15,
        image: '../img/amendoim-cru.jpg',
        type: 'kg',
        price: 'R$ 15,00',
        description: 'Natural e rico em proteínas. Pode ser torrado em casa ou usado em receitas saudáveis.',
        title: 'Amendoim cru',
        local: 'Rancho Verde'
    },
    {
        id: 16,
        image: '../img/amendoim-torrado.jpg',
        type: 'kg',
        price: 'R$ 18,00',
        description: 'Crocante, saboroso e nutritivo. Um lanche prático e cheio de energia.',
        title: 'Amendoim torrado',
        local: 'Sítio Boa Esperança'
    },
    {
        id: 17,
        image: '../img/amora.jpg',
        type: 'kg',
        price: 'R$ 22,00',
        description: 'Fruta leve e refrescante, com sabor levemente ácido. Boa para sucos, sobremesas e geleias.',
        title: 'Amora',
        local: 'Sítio Flor da Terra'
    },
    {
        id: 18,
        image: '../img/arroz-branco.jpg',
        type: 'kg',
        price: 'R$ 7,50',
        description: 'Clássico da culinária brasileira. Leve, solto e fácil de preparar. Fonte de energia e sabor.',
        title: 'Arroz branco',
        local: 'Rancho Verde'
    },
    {
        id: 19,
        image: '../img/arroz-integral.jpg',
        type: 'kg',
        price: 'R$ 8,00',
        description: 'Mais nutritivo e rico em fibras. Dá saciedade e contribui para uma alimentação equilibrada.',
        title: 'Arroz integral',
        local: 'Sítio Boa Esperança'
    },
    {
        id: 20,
        image: '../img/arroz-integral-organico.jpg',
        type: 'kg',
        price: 'R$ 10,00',
        description: 'Produzido sem agrotóxicos, preserva o sabor e os nutrientes naturais do grão.',
        title: 'Arroz integral orgânico',
        local: 'Orgânicos da Vila'
    },
    {
        id: 21,
        image: '../img/aveia-em-flocos.jpg',
        type: 'kg',
        price: 'R$ 12,00',
        description: 'Fonte de fibras e energia. Ideal para cafés da manhã, vitaminas e receitas saudáveis.',
        title: 'Aveia em flocos',
        local: 'Sítio Boa Esperança'
    },
    {
        id: 22,
        image: '../img/banana-nanica.jpg',
        type: 'kg',
        price: 'R$ 6,00',
        description: 'Doce e macia, ótima para lanches, vitaminas e sobremesas. Rica em potássio e energia.',
        title: 'Banana nanica',
        local: 'Sabor do Campo'
    },
    {
        id: 23,
        image: '../img/banana-organica.jpg',
        type: 'kg',
        price: 'R$ 7,00',
        description: 'Sabor natural e cultivo sem agrotóxicos. Nutritiva e sustentável.',
        title: 'Banana orgânica',
        local: 'Orgânicos da Vila'
    },
    {
        id: 24,
        image: '../img/banana-seca.jpg',
        type: 'kg',
        price: 'R$ 8,00',
        description: 'Prática, doce e energética. Perfeita para lanches e trilhas. 100% fruta natural.',
        title: 'Banana seca',
        local: 'Rancho Verde'
    },
    {
        id: 25,
        image: '../img/laranja-bahia.jpg',
        type: 'kg',
        price: 'R$ 6,99',
        description: 'Fruta doce, suculenta e sem sementes. Perfeita para sucos naturais e consumo in natura. Rica em vitamina C, ajuda na imunidade e hidratação.',
        title: 'Laranja bahia',
        local: 'Sabor do Campo'
    },
    {
        id: 26,
        image: '../img/maca-gala.jpg',
        type: 'kg',
        price: 'R$ 9,99',
        description: 'De casca vermelha e polpa crocante, a maçã gala é leve, doce e refrescante. Ótima para lanches e sobremesas. Fonte de fibras e antioxidantes.',
        title: 'Maçã gala',
        local: 'Sabor do Campo'
    },
    {
        id: 27,
        image: '../img/melancia.jpg',
        type: 'kg',
        price: 'R$ 1,60',
        description: 'Refrescante e naturalmente doce, a melancia é rica em água e ideal para dias quentes. Ajuda na hidratação e na digestão.',
        title: 'Melancia',
        local: 'Sabor do Campo'
    },
    {
        id: 28,
        image: '../img/melao.jpg',
        type: 'kg',
        price: 'R$ 13,18',
        description: 'Fruta leve e saborosa, com polpa macia e adocicada. Excelente para sucos, saladas e sobremesas. Rica em vitaminas e minerais.',
        title: 'Melão',
        local: 'Sabor do Campo'
    },
    {
        id: 29,
        image: '../img/maracuja.jpg',
        type: 'kg',
        price: 'R$ 4,70',
        description: 'Sabor marcante e levemente ácido. Perfeito para sucos, caldas e sobremesas. Possui propriedades calmantes e é fonte de vitamina C.',
        title: 'Maracujá',
        local: 'Sabor do Campo'
    },
    {
        id: 30,
        image: '../img/pimentao-vermelho.jpg',
        type: 'unidade',
        price: 'R$ 8,03',
        description: 'De sabor adocicado e suave, é ótimo em saladas, refogados e assados. Rico em vitamina A e antioxidantes, traz cor e sabor aos pratos.',
        title: 'Pimentão vermelho',
        local: 'Horta da Serra'
    },
    {
        id: 31,
        image: '../img/mamao-papaia.jpg',
        type: 'unidade',
        price: 'R$ 6,34',
        description: 'Doce, macio e fácil de digerir. Excelente para o café da manhã e sobremesas. Contém enzimas que ajudam na digestão e é rico em vitaminas A e C.',
        title: 'Mamão papaia',
        local: 'Sabor do Campo'
    },
    {
        id: 32,
        image: '../img/morango.jpg',
        type: 'bandeija',
        price: 'R$ 6,99',
        description: 'Fruta saborosa e aromática, com leve toque ácido. Ideal para sucos, sobremesas e saladas de frutas. Fonte de antioxidantes e vitamina C.',
        title: 'Morango',
        local: 'Sabor do Campo'
    },
    {
        id: 33,
        image: '../img/cheiro-verde.jpg',
        type: 'unidade',
        price: 'R$ 3,79',
        description: 'Cebolinha e salsa. Mistura fresca e aromática usada para finalizar e realçar o sabor dos pratos. Dá um toque especial a caldos, carnes, saladas e arroz.',
        title: 'Cheiro verde',
        local: 'Horta da Serra'
    },
    {
        id: 34,
        image: '../img/limao-taiti.jpg',
        type: 'kg',
        price: 'R$ 7,98',
        description: 'Ácido na medida certa, é essencial em temperos, sucos e drinks. Fonte de vitamina C e ótimo aliado na digestão.',
        title: 'Limão taiti',
        local: 'Sabor do Campo'
    },
    {
        id: 35,
        image: '../img/cenoura.jpg',
        type: 'kg',
        price: 'R$ 3,59',
        description: 'De cor vibrante e sabor adocicado, é excelente crua, cozida ou em sucos. Rica em betacaroteno, ajuda na saúde da pele e dos olhos.',
        title: 'Cenoura',
        local: 'Pomar da Montanha'
    },
    {
        id: 36,
        image: '../img/chuchu.jpg',
        type: 'kg',
        price: 'R$ 5,78',
        description: 'Leve, com sabor suave e alto teor de água. Ideal para refogados e sopas. Ajuda na hidratação e é pobre em calorias.',
        title: 'Chuchu',
        local: 'Pomar da Montanha'
    },
    {
        id: 37,
        image: '../img/beterraba.jpg',
        type: 'kg',
        price: 'R$ 3,58',
        description: 'De cor intensa e sabor adocicado, é rica em ferro e antioxidantes. Boa para sucos, saladas e pratos cozidos.',
        title: 'Beterraba',
        local: 'Terra Fértil'
    },
    {
        id: 38,
        image: '../img/berinjela.jpg',
        type: 'kg',
        price: 'R$ 9,49',
        description: 'Textura macia e sabor leve, ótima para grelhar, assar ou refogar. Rica em fibras e antioxidantes, ajuda no controle do colesterol.',
        title: 'Berinjela',
        local: 'Terra Fértil'
    },
    {
        id: 39,
        image: '../img/cebola.jpg',
        type: 'kg',
        price: 'R$ 1,98',
        description: 'Ingrediente essencial na cozinha. Dá sabor e aroma a qualquer prato, além de ter propriedades antioxidantes e digestivas.',
        title: 'Cebola',
        local: 'Horta da Serra'
    },
    {
        id: 40,
        image: '../img/vela-aromatica-de-mel.jpg',
        type: 'unidade',
        price: 'R$ 25,00',
        description: 'Aroma suave e aconchegante de mel. Ideal para relaxar, decorar e perfumar o ambiente com um toque de doçura.',
        title: 'Vela aromática de mel',
        local: 'Mel da Serra'
    }
];