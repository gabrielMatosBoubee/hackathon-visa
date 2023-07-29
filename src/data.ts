import { IEvents } from "./interfaces/IData";

// precisa rever gastos para bater com dispesa real
export const gastos = {
  estagiario: [
   {
      name: "telefone",
      value: 38,
      type: "fixed",
      purchaseInterval: "monthly",
      buff: "vida",
      charge: +3,
      valorEstipulado: 38,
      valueSpending: 300,
    }, {
      name: "plano de saude",
      value: 220,
      type: "fixed",
      purchaseInterval: "monthly",
      buff: "vida",
      charge: +15,
      valorEstipulado: 220,
      valueSpending: 220,
    },
  ],
  junior: [
    { 
    name: "aluguel",
    cost: 500,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "felicidade",
    charge: +10,
  }, { 
    name: "luz",
    value: 80,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, { 
    name: "água",
    value: 60,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, { 
    name: "internet",
    value: 80,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +10,
  }, {
    name: "telefone",
    value: 38,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +3,
  }, {
    name: "mercado",
    value: 526,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, {
    name: "seguro de vida",
    value: 120,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }],
  pleno: [{ 
    name: "aluguel",
    value: 600,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "felicidade",
    charge: +10,
  }, { 
    name: "luz",
    value: 120,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, { 
    name: "água",
    value: 100,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, { 
    name: "internet",
    value: 100,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +10,
  }, {
    name: "telefone",
    value: 50,
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +3,
  }, {
    name: "mercado",
    value: "626",
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  }, {
    name: "academia",
    value: "60",
    type: "variant",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15
  }, {
    name: "streaming",
    value: "50",
    type: "variant",
    purchaseInterval: "monthly",
    buff: "felicidade",
    charge: +10,
  }, {
    name: "plano de saude",
    value: "220",
    type: "fixed",
    purchaseInterval: "monthly",
    buff: "vida",
    charge: +15,
  },
  ],
}

export const events: IEvents[] = [
  {
    text: `Você foi convidado para um happy hour com seus colegas de trabalho, porém eles pretendem sair para comer em um restaurante caro, você decide ir com eles e gastar 150 coins?`,
    accept: { lost: {type: "coin", value: -150 }, benefit: { type: "felicidade", value: +30 } },
    denied: { lost: {type: "felicidade", value: -15 }, benefit: {} }
  },
  {
    text: `A sua franquia favorita de filmes lançou mais um filme do seu universo favorito e seus amigos te chamaram pra assistir o filme em conjunto. Todos vão na pré-estreia pois não querem tomar spoiler. Você decide ir com eles e gastar 80 coins?`,
    accept: { lost: { type: "coin", value: -80 }, benefit: { type: "felicidade", value: +15 } },
    denied: { lost: {type: "felicidade", value: -10 }, benefit: {} }
  },
  {
    text: `Sua banda favorita está chegando na sua cidade para fazer um show, todos a sua volta vão. Você decide comprar o ingresso da pista por 200 coins?`,
    accept: { lost: { type: "coin", value: -200 }, benefit: { type: "felicidade", value: +35 } },
    denied: { lost: { type: "felicidade", value: -35 }, benefit: {} }
  },
  {
    text: `Você está sentindo uma dor de dente muito forte, o que está te impedindo de comer. Você decide ir ao médico e pagar 40 coins pela consulta?`,
    accept: { lost: { type: "coin", value: -40 }, benefit: { type: "saúde", value: +20 } },
    denied: { lost: { type: "saúde", value: -35 }, benefit: {} }
  },
  {
    text: `Você acabou de se lembrar que o aniversário de algum ente da sua famĺia está próximo e que você não comprou o presente dele. Você decide gastar 39 coins e comprar o presente?`,
    accept: { lost: { type: "coin", value: -39 }, benefit: { type: "felicidade", value: +10 } },
    denied: { lost: { type: "felicidade", value: -10 }, benefit: {} }
  },
  {
    text: `Sua família está planejando uma viagem para a casa de praia da sua tia, porém os gastos incluem comida, transporte e lazer. Você decidir ir com eles e gasta 260 coins?`,
    accept: { lost: { type: "coin", value: -260 }, benefit: { type: "felicidade", value: +30 } },
    denied: { lost: { type: "felicidade", value: -30 }, benefit: {} }
  },
  {
    text: `Você conheceu alguém pela internet e a pessoa decide marcar um encontro com você. Ela te fala sobre um restaurante chamado CacauBambusa que é super caro, você decide ir para o restaurante e gasta 270 coins?`,
    accept: { lost: { type: "coin", value: -270 }, benefit: { type: "felicidade", value: +30 } },
    denied: { lost: { type: "felicidade", value: -30 }, benefit: {} }
  },
  {
    text: `Seu celular quebrou, ele já vinha apresentando problemas há algum tempo mas, pro seu emprego, ele é indispensável. Você tem a possibilidade de comprar um celular novo ou apenas de consertar o seu antigo. Vocẽ decide comprar um celular novo por 1800?`,
    accept: { lost: { type: "coin", value: -1800 }, benefit: { type: "felicidade", value: +30 } },
    denied: { lost: { type: "felicidade", value: -25 }, benefit: {} }
  },
  {
    text: `Sua antiga escola está promovendo um encontro de ex-alunos e você foi convidado para ir. Você apenas irá gastar com o transporte pois tudo já está incluso. Você decide gastar com a ida até o evento?`,
    accept: { lost: { type: "coin", value: -20 }, benefit: { type: "felicidade", value: +15 } },
    denied: { lost: { type: "felicidade", value: -25 }, benefit: {} }
  }, {
    text: `Você se sente cansado do trabalho e não se sente a vontade para voltar em pé de onibus para casa e então você decide olhar no aplicativo quanto que uma corrida no aplicativo Buber está custando até a sua casa. Você decide gastar 50 coins até a sua casa hoje?`,
    accept: { lost: { type: "coin", value: -50 }, benefit: { type: "felicidade", value: +20 } },
    denied: { lost: { type: "felicidade", value: -25 }, benefit: {} }
  }, {
    text: `Você acabou de se lembrar que terá um aniversário para ir, mas se lembrou que você não tme roupa para ir a festa. Você decide gastar 65 coins em uma camisa nova na loja de roupas Marielo?`,
    accept: { lost: { type: "coin", value: -65 }, benefit: { type: "felicidade", value: +5 } },
    denied: { lost: { type: "felicidade", value: -12 }, benefit: {} }
  }
]

export const niveis = [{ level: "Estagiário", salary: 500 }, { level:"Júnior I", salary: 1320 }, { level: "Júnior II", salary: 1700 }, { level: "Júnior III", salary: 2000 }, { level: "Pleno I", salary: 2600}, { level: "Pleno II", salary: 3000 }, { level: "Pleno III", salary: 4000 }, { level: "Senior I", salary: 6000}, { level: "Senior II", salary: 7500 }, { level: "Senior III", salary: 10000}]

export const wallet = [{ image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Tela principal", link: "/", id: 0, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Cartão de credito", link: "/credit-card", id: 1, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Cartão de debito", link: "/credit-card", id: 2, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Investimentos", link: "/credit-card", id: 3, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Comidas", link: "/credit-card", id: 4, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Gastos", link: "/spendings", id: 5, },
{ image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "Orçamento", link: "/budget", id: 5, }]

export default { gastos, events, niveis, wallet };