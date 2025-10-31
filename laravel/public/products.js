// products.js

// Array de PRODUTORES (com IDs para ligação)
const producers = [
    { 
        id: 1,
        produtor: 'Lucia Ferreira',
        name: 'Sabor do Campo', 
        descricao: 'Eu sou a Lucia, apaixonada por frutas! No Sabor do Campo, colho cada fruta no ponto certo, com muito cuidado para manter o sabor e a doçura natural. Tudo fresquinho, como se tivesse acabado de sair do pé.',
        location: 'Rua Principal, 100 - Centro',
        phone: '(11) 98765-4321',
        image: '../img/luciaferreira.jpg'
    },
    { 
        id: 2,
        produtor: 'Ana Costa',
        name: 'Orgânicos da Vila', 
        descricao: 'Meu nome é Ana e acredito que comida boa vem de uma terra bem cuidada. No Orgânicos da Vila, cultivo uma mistura de produtos 100% orgânicos — verduras, frutas e temperos — sem agrotóxicos e com muito amor.',
        location: 'Av. Sustentável, 50 - Vila Verde',
        phone: '(21) 98765-1234',
        image: '../img/anacosta.jpg'
    },
    { 
        id: 3,
        produtor: 'Rodinei Ramos',
        name: 'Pomar da Montanha', 
        descricao: 'Sou o Rodinei, e no Pomar da Montanha cultivo verduras e legumes fresquinhos, direto da terra para sua mesa. Trabalho com carinho e sem pressa, respeitando o tempo da natureza para oferecer sempre produtos saborosos e saudáveis.',
        location: 'Estrada do Pico, KM 5 - Montanha',
        phone: '(31) 98765-5678',
        image: '../img/rodineiramos.jpg'
    },
    { 
        id: 4,
        produtor: 'João Silva',
        name: 'Terra Fértil', 
        descricao: 'Meu nome é João, e na Terra Fértil cultivo raízes e tubérculos de primeira qualidade. Batatas, cenouras, beterrabas — tudo plantado com cuidado, colhido na hora certa e cheio de sabor da roça.',
        location: 'Fazenda Bonita, s/n - Zona Rural',
        phone: '(31) 98765-5678',
        image: '../img/joaosilva.jpg'
    },
    { 
        id: 5,
        produtor: 'Carlos Oliveira',
        name: 'Horta da Serra', 
        descricao: 'Sou o Carlos, e na Horta da Serra produzo temperos e hortaliças sempre frescos. Gosto de ver a cozinha ganhar vida com o aroma das ervas e o verde das folhas que cultivo com tanto zelo.',
        location: 'Recanto do Sossego, 12 - Serra',
        phone: '(31) 98765-5678',
        image: '../img/carlosoliveira.jpeg'
    },
    { 
        id: 6,
        produtor: 'Magno Arthur',
        name: 'Sítio Flor da Terra', 
        descricao: 'Eu sou o Magno, e no meu sítio, a Flor da Terra, cultivo frutas vermelhas e exóticas. Morangos, amoras, physalis… tudo feito com carinho e colhido no ponto certo, para quem aprecia sabores únicos e naturais.',
        location: 'Rodovia das Flores, 77 - Interior',
        phone: '(35) 99999-1234',
        image: '../img/magno.jpg'
    },
    { 
        id: 7,
        produtor:'Marcia Lurdes',
        name: 'Sítio Boa Esperança', 
        descricao: 'Eu sou a Marcia, e no Sítio Boa Esperança cultivo grãos e sementes com dedicação. Aqui, cada colheita é resultado de muito cuidado e paciência, para que você tenha alimentos nutritivos e de qualidade na sua mesa.',
        location: 'Alameda do Vale, 33 - Vale',
        phone: '(12) 98888-5678',
        image: '../img/marcialurdes.jpg'
    },
    { 
        id: 8,
        produtor: 'Caio Vieira',
        name: 'Rancho Verde', 
        descricao: 'Sou o Caio, do Rancho Verde. Aqui produzimos um pouco de tudo: frutas, verduras, queijos e compotas. Gosto de levar para as pessoas o verdadeiro sabor da roça, com aquele toque simples e caseiro que faz a diferença.',
        location: 'Estrada Velha, 200 - Rancho',
        phone: '(35) 97777-9012',
        image: '../img/caiovieira.jpg'
    },
    { 
        id: 9,
        produtor: 'Clarice Lima',
        name: 'Mel da Serra', 
        descricao: 'Sou a Clarice, e minhas abelhas são minhas parceiras. No Mel da Serra, produzo mel puro e artesanal, além de própolis e cera natural. Cada pote carrega o sabor da serra e o trabalho das abelhas que tanto respeito.',
        location: 'Colmeia de Ouro, 1 - Serra Alta',
        phone: '(21) 96666-3456',
        image: '../img/claricelima.jpg'
    },
];

const products = [
    {
        id: 1,
        image: '../img/abacaxi-perola.jpg',
        type: 'unidade',
        price: 'R$ 8,50',
        description: 'Fruta doce, suculenta e com acidez suave. Perfeita para sucos, sobremesas ou para comer pura. Rica em vitamina C e excelente para refrescar.',
        title: 'Abacaxi pérola',
        producer_id: 1
    },
    {
        id: 2,
        image: '../img/abobora-japonesa.jpg',
        type: 'kg',
        price: 'R$ 6,00',
        description: 'Polpa alaranjada e sabor adocicado. Ideal para purês, sopas e assados. Rica em fibras e betacaroteno, ajuda na digestão e na saúde da pele.',
        title: 'Abóbora japonesa',
        producer_id: 2
    },
    {
        id: 3,
        image: '../img/abobrinha.jpg',
        type: 'kg',
        price: 'R$ 5,00',
        description: 'Leve, versátil e rica em água. Combina com refogados, grelhados e massas. Um ingrediente saudável para o dia a dia.',
        title: 'Abobrinha',
        producer_id: 3
    },
    {
        id: 4,
        image: '../img/acafrao-in-natura.jpg',
        type: 'kg',
        price: 'R$ 38,00',
        description: 'Raiz de cor intensa e sabor marcante. Possui ação anti-inflamatória e antioxidante. Pode ser usada em sucos, chás e temperos.',
        title: 'Açafrão in natura',
        producer_id: 4
    },
    {
        id: 5,
        image: '../img/acafrao-da-terra.jpg',
        type: 'kg',
        price: 'R$ 35,00',
        description: 'Tempero natural que dá cor e sabor aos alimentos. Excelente aliado da saúde e muito usado em pratos e bebidas.',
        title: 'Açafrão-da-terra',
        producer_id: 5
    },
    {
        id: 6,
        image: '../img/acerola.jpg',
        type: 'kg',
        price: 'R$ 20,00',
        description: 'Fruta pequena e azedinha, com alto teor de vitamina C. Ideal para sucos naturais, sobremesas e geleias.',
        title: 'Acerola',
        producer_id: 6
    },
    {
        id: 7,
        image: '../img/alecrim.jpg',
        type: 'maço',
        price: 'R$ 6,00',
        description: 'Erva aromática com perfume marcante. Dá sabor a carnes, batatas e pães, além de poder ser usada em chás relaxantes.',
        title: 'Alecrim',
        producer_id: 5
    },
    {
        id: 8,
        image: '../img/alface-americana.jpg',
        type: 'maço',
        price: 'R$ 5,00',
        description: 'Folhas firmes e crocantes, perfeitas para saladas e sanduíches. Refrescante e rica em vitaminas.',
        title: 'Alface americana',
        producer_id: 3
    },
    {
        id: 9,
        image: '../img/alface-crespa.jpg',
        type: 'maço',
        price: 'R$ 4,50',
        description: 'Textura leve e sabor suave. Ideal para saladas frescas e coloridas. Rica em fibras e minerais.',
        title: 'Alface crespa',
        producer_id: 3
    },
    {
        id: 10,
        image: '../img/alface-lisa-organica.jpg',
        type: 'maço',
        price: 'R$ 6,00',
        description: 'Cultivada sem agrotóxicos, tem sabor delicado e natural. Opção saudável para o dia a dia.',
        title: 'Alface lisa orgânica',
        producer_id: 2
    },
    {
        id: 11,
        image: '../img/alho-fresco.jpg',
        type: 'kg',
        price: 'R$ 25,00',
        description: 'Mais suave e aromático que o comum. Realça o sabor de qualquer prato e possui propriedades naturais que fortalecem o organismo.',
        title: 'Alho fresco',
        producer_id: 5
    },
    {
        id: 12,
        image: '../img/alho-poro.jpg',
        type: 'kg',
        price: 'R$ 10,00',
        description: 'Sabor leve e adocicado. Ideal para sopas, risotos e refogados. Fonte de vitaminas e minerais.',
        title: 'Alho-poró',
        producer_id: 4
    },
    {
        id: 13,
        image: '../img/ameixa.jpg',
        type: 'kg',
        price: 'R$ 12,00',
        description: 'Doce e suculenta, rica em fibras e antioxidantes. Boa para o intestino e perfeita para sobremesas.',
        title: 'Ameixa',
        producer_id: 1
    },
    {
        id: 14,
        image: '../img/amendoas.png',
        type: 'unidade',
        price: 'R$ 70,00',
        description: 'Crocrantes, nutritivas e cheias de energia. Ótimas como lanche ou em receitas doces e salgadas.',
        title: 'Amêndoas',
        producer_id: 7
    },
    {
        id: 15,
        image: '../img/amendoim-cru.jpg',
        type: 'kg',
        price: 'R$ 15,00',
        description: 'Natural e rico em proteínas. Pode ser torrado em casa ou usado em receitas saudáveis.',
        title: 'Amendoim cru',
        producer_id: 8
    },
    {
        id: 16,
        image: '../img/amendoim-torrado.jpg',
        type: 'kg',
        price: 'R$ 18,00',
        description: 'Crocante, saboroso e nutritivo. Um lanche prático e cheio de energia.',
        title: 'Amendoim torrado',
        producer_id: 7
    },
    {
        id: 17,
        image: '../img/amora.jpg',
        type: 'kg',
        price: 'R$ 22,00',
        description: 'Fruta leve e refrescante, com sabor levemente ácido. Boa para sucos, sobremesas e geleias.',
        title: 'Amora',
        producer_id: 6
    },
    {
        id: 18,
        image: '../img/arroz-branco.jpg',
        type: 'kg',
        price: 'R$ 7,50',
        description: 'Clássico da culinária brasileira. Leve, solto e fácil de preparar. Fonte de energia e sabor.',
        title: 'Arroz branco',
        producer_id: 8
    },
    {
        id: 19,
        image: '../img/arroz-integral.jpg',
        type: 'kg',
        price: 'R$ 8,00',
        description: 'Mais nutritivo e rico em fibras. Dá saciedade e contribui para uma alimentação equilibrada.',
        title: 'Arroz integral',
        producer_id: 7
    },
    {
        id: 20,
        image: '../img/arroz-integral-organico.jpg',
        type: 'kg',
        price: 'R$ 10,00',
        description: 'Produzido sem agrotóxicos, preserva o sabor e os nutrientes naturais do grão.',
        title: 'Arroz integral orgânico',
        producer_id: 2
    },
    {
        id: 21,
        image: '../img/aveia-em-flocos.jpg',
        type: 'kg',
        price: 'R$ 12,00',
        description: 'Fonte de fibras e energia. Ideal para cafés da manhã, vitaminas e receitas saudáveis.',
        title: 'Aveia em flocos',
        producer_id: 7
    },
    {
        id: 22,
        image: '../img/banana-nanica.jpg',
        type: 'kg',
        price: 'R$ 6,00',
        description: 'Doce e macia, ótima para lanches, vitaminas e sobremesas. Rica em potássio e energia.',
        title: 'Banana nanica',
        producer_id: 1
    },
    {
        id: 23,
        image: '../img/banana-organica.jpg',
        type: 'kg',
        price: 'R$ 7,00',
        description: 'Sabor natural e cultivo sem agrotóxicos. Nutritiva e sustentável.',
        title: 'Banana orgânica',
        producer_id: 2
    },
    {
        id: 24,
        image: '../img/banana-seca.jpg',
        type: 'kg',
        price: 'R$ 8,00',
        description: 'Prática, doce e energética. Perfeita para lanches e trilhas. 100% fruta natural.',
        title: 'Banana seca',
        producer_id: 8
    },
    {
        id: 25,
        image: '../img/laranja-bahia.jpg',
        type: 'kg',
        price: 'R$ 6,99',
        description: 'Fruta doce, suculenta e sem sementes. Perfeita para sucos naturais e consumo in natura. Rica em vitamina C, ajuda na imunidade e hidratação.',
        title: 'Laranja bahia',
        producer_id: 1
    },
    {
        id: 26,
        image: '../img/maca-gala.jpg',
        type: 'kg',
        price: 'R$ 9,99',
        description: 'De casca vermelha e polpa crocante, a maçã gala é leve, doce e refrescante. Ótima para lanches e sobremesas. Fonte de fibras e antioxidantes.',
        title: 'Maçã gala',
        producer_id: 1
    },
    {
        id: 27,
        image: '../img/melancia.jpg',
        type: 'kg',
        price: 'R$ 1,60',
        description: 'Refrescante e naturalmente doce, a melancia é rica em água e ideal para dias quentes. Ajuda na hidratação e na digestão.',
        title: 'Melancia',
        producer_id: 1
    },
    {
        id: 28,
        image: '../img/melao.jpg',
        type: 'kg',
        price: 'R$ 13,18',
        description: 'Fruta leve e saborosa, com polpa macia e adocicada. Excelente para sucos, saladas e sobremesas. Rica em vitaminas e minerais.',
        title: 'Melão',
        producer_id: 1
    },
    {
        id: 29,
        image: '../img/maracuja.jpg',
        type: 'kg',
        price: 'R$ 4,70',
        description: 'Sabor marcante e levemente ácido. Perfeito para sucos, caldas e sobremesas. Possui propriedades calmantes e é fonte de vitamina C.',
        title: 'Maracujá',
        producer_id: 1
    },
    {
        id: 30,
        image: '../img/pimentao-vermelho.jpg',
        type: 'unidade',
        price: 'R$ 8,03',
        description: 'De sabor adocicado e suave, é ótimo em saladas, refogados e assados. Rico em vitamina A e antioxidantes, traz cor e sabor aos pratos.',
        title: 'Pimentão vermelho',
        producer_id: 5
    },
    {
        id: 31,
        image: '../img/mamao-papaia.jpg',
        type: 'unidade',
        price: 'R$ 6,34',
        description: 'Doce, macio e fácil de digerir. Excelente para o café da manhã e sobremesas. Contém enzimas que ajudam na digestão e é rico em vitaminas A e C.',
        title: 'Mamão papaia',
        producer_id: 1
    },
    {
        id: 32,
        image: '../img/morango.jpg',
        type: 'bandeija',
        price: 'R$ 6,99',
        description: 'Fruta saborosa e aromática, com leve toque ácido. Ideal para sucos, sobremesas e saladas de frutas. Fonte de antioxidantes e vitamina C.',
        title: 'Morango',
        producer_id: 1
    },
    {
        id: 33,
        image: '../img/cheiro-verde.jpg',
        type: 'unidade',
        price: 'R$ 3,79',
        description: 'Cebolinha e salsa. Mistura fresca e aromática usada para finalizar e realçar o sabor dos pratos. Dá um toque especial a caldos, carnes, saladas e arroz.',
        title: 'Cheiro verde',
        producer_id: 5
    },
    {
        id: 34,
        image: '../img/limao-taiti.jpg',
        type: 'kg',
        price: 'R$ 7,98',
        description: 'Ácido na medida certa, é essencial em temperos, sucos e drinks. Fonte de vitamina C e ótimo aliado na digestão.',
        title: 'Limão taiti',
        producer_id: 1
    },
    {
        id: 35,
        image: '../img/cenoura.jpg',
        type: 'kg',
        price: 'R$ 3,59',
        description: 'De cor vibrante e sabor adocicado, é excelente crua, cozida ou em sucos. Rica em betacaroteno, ajuda na saúde da pele e dos olhos.',
        title: 'Cenoura',
        producer_id: 3
    },
    {
        id: 36,
        image: '../img/chuchu.jpg',
        type: 'kg',
        price: 'R$ 5,78',
        description: 'Leve, com sabor suave e alto teor de água. Ideal para refogados e sopas. Ajuda na hidratação e é pobre em calorias.',
        title: 'Chuchu',
        producer_id: 3
    },
    {
        id: 37,
        image: '../img/beterraba.jpg',
        type: 'kg',
        price: 'R$ 3,58',
        description: 'De cor intensa e sabor adocicado, é rica em ferro e antioxidantes. Boa para sucos, saladas e pratos cozidos.',
        title: 'Beterraba',
        producer_id: 4
    },
    {
        id: 38,
        image: '../img/berinjela.jpg',
        type: 'kg',
        price: 'R$ 9,49',
        description: 'Textura macia e sabor leve, ótima para grelhar, assar ou refogar. Rica em fibras e antioxidantes, ajuda no controle do colesterol.',
        title: 'Berinjela',
        producer_id: 4
    },
    {
        id: 39,
        image: '../img/cebola.jpg',
        type: 'kg',
        price: 'R$ 1,98',
        description: 'Ingrediente essencial na cozinha. Dá sabor e aroma a qualquer prato, além de ter propriedades antioxidantes e digestivas.',
        title: 'Cebola',
        producer_id: 5
    },
    {
        id: 40,
        image: '../img/vela-aromatica-de-mel.jpg',
        type: 'unidade',
        price: 'R$ 25,00',
        description: 'Aroma suave e aconchegante de mel. Ideal para relaxar, decorar e perfumar o ambiente com um toque de doçura.',
        title: 'Vela aromática de mel',
        producer_id: 9
    }
];