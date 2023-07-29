import { IEvents } from "./interfaces/IData";
import cardVisa from "./icons/cartãoVisa.png"
import cart from "./icons/cart.png"

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

// const t = {name: "energetico", value: 9, type: "comida, vestuario, casa, lazer", benefit: [{type: "felicidade", value: 10 }] }; 

export const investiments = [
  { 
    name: "Renda fixa",
    image: "https://cdnbr.guiadoinvestidor.com.br/2021/06/rendafixa.jpg",
    descricao: "A renda fixa é uma modalidade de investimento caracterizada por ter a rentabilidade preestabelecida no momento da aplicação. É considerada uma opção de investimento mais conservadora e segura.",
    caracteristicas: [
      { type: "lost", text: "Pode haver perdas dependendo do tipo de renda fixa escolhida." },
      { type: "benefit", text: "Garante uma rentabilidade mínima mesmo em cenários adversos." },
      { type: "benefit", text: "Possui diversas opções de investimento com diferentes prazos e rentabilidades." },
    ],
  },
  { 
    name: "Poupança",
    image: "https://www.sicoobengecred.coop.br/wp-content/uploads/2022/11/banner-blogpost-poupanca.jpg",
    descricao: "A poupança é uma das modalidades de investimento mais tradicionais do Brasil. É uma opção de baixo risco e com alta liquidez, mas sua rentabilidade pode ser afetada pela taxa básica de juros (Selic) e pela inflação.",
    caracteristicas: [
      { type: "lost", text: "A rentabilidade da poupança pode ficar abaixo da inflação em alguns períodos." },
      { type: "benefit", text: "É uma opção segura para guardar dinheiro de forma rápida e acessível." },
    ],
  },
  { 
    name: "Selic",
    descricao: "O Tesouro Selic é um título público do Tesouro Direto que acompanha a taxa básica de juros (Selic). É considerado um investimento seguro e uma alternativa interessante para a reserva de emergência.",
    image: "https://www.cordierinvestimentos.com.br/blog/wp-content/uploads/2021/03/3-1536x768.jpg",
    caracteristicas: [
      { type: "lost", text: "A rentabilidade do Tesouro Selic pode ser afetada pela variação da taxa básica de juros (Selic)." },
      { type: "lost", text: "Há a incidência de imposto de renda sobre o rendimento do título." },
      { type: "lost", text: "O rendimento pode ficar abaixo de outras opções de investimento em momentos de alta da Selic." },
      { type: "benefit", text: "É uma opção de investimento de baixo risco." },
    ],
  },
  { 
    name: "Fundos de Investimento",
    descricao: "Os fundos de investimento são uma modalidade de investimento coletivo, onde os recursos de vários investidores são reunidos e aplicados em uma carteira diversificada de ativos. Existem diversos tipos de fundos, cada um com suas próprias características e estratégias de investimento.",
    image: "https://atlasinvest.com.br/wp-content/uploads/2020/07/Fundos_Investimento.png",
    caracteristicas: [
      { type: "lost", text: "Os fundos de investimento estão sujeitos a riscos de mercado e podem apresentar perdas." },
      { type: "lost", text: "Algumas modalidades de fundos cobram taxas de administração e performance, o que pode impactar a rentabilidade do investimento." },
      { type: "benefit", text: "Os fundos permitem o acesso a uma diversidade de ativos e estratégias de investimento, mesmo para investidores com pouco capital." },
      { type: "benefit", text: "Existem fundos de investimento com diferentes perfis de risco, adequados para diferentes objetivos e perfis de investidores." },
    ],
  },
  { 
    name: "Tesouro Direto",
    descricao: "O Tesouro Direto é um programa do governo federal que permite a compra de títulos públicos diretamente pela internet. É uma opção de investimento de renda fixa, onde o investidor empresta dinheiro para o governo em troca de uma remuneração.",
    image: "https://cdn.evg.gov.br/cursos/244_EVG/banner.svg",
    caracteristicas: [
      { type: "lost", text: "A rentabilidade do Tesouro Direto pode ser afetada por mudanças na taxa básica de juros (Selic) e por oscilações no mercado financeiro." },
      { type: "lost", text: "Em alguns títulos, há incidência de imposto de renda sobre o rendimento." },
      { type: "lost", text: "Alguns títulos têm prazos mais longos e podem não ser adequados para objetivos de curto prazo." },
      { type: "benefit", text: "O Tesouro Direto é considerado um investimento seguro, já que é garantido pelo governo federal." },
    ],
  },
  { 
    name: "Títulos Privados",
    descricao: "Os títulos privados são emitidos por instituições financeiras e empresas privadas, e podem ser uma opção de investimento de renda fixa. Alguns exemplos de títulos privados são CDBs, LCIs e LCAs.",
    image: "https://files.certifiquei.com.br/p/uploads/2020/09/T%C3%ADtulos-privados.jpg",
    caracteristicas: [
      { type: "lost", text: "Os títulos privados estão sujeitos a riscos de crédito da instituição emissora." },
      { type: "lost", text: "Em alguns casos, é necessário pagar imposto de renda sobre o rendimento dos títulos." },
      { type: "benefit", text: "Existem títulos privados com diferentes prazos e rentabilidades, adequados para diferentes objetivos de investimento." },
      { type: "benefit", text: "Alguns títulos privados contam com a proteção do Fundo Garantidor de Créditos (FGC) para valores de até R$ 250 mil por CPF e por instituição financeira." },
    ],
  },
];

export const niveis = [{ level: "Estagiário", salary: 500 }, { level:"Júnior I", salary: 1320 }, { level: "Júnior II", salary: 1700 }, { level: "Júnior III", salary: 2000 }, { level: "Pleno I", salary: 2600}, { level: "Pleno II", salary: 3000 }, { level: "Pleno III", salary: 4000 }, { level: "Senior I", salary: 6000}, { level: "Senior II", salary: 7500 }, { level: "Senior III", salary: 10000}]

export const wallet = [{ image: cardVisa, 
name: "tela principal", link: "/", id: 0, }, { image: cardVisa, 
name: "cartão de credito", link: "/credit-card", id: 1, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "cartão de debito", link: "/credit-card", id: 2, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "investimentos", link: "/investiments", id: 3, }, { image: cart, 
name: "Consumiveis", link: "/itens", id: 4, }, { image: "https://www.visa.com.br/dam/VCOM/regional/na/canada/pay-with-visa/cards/credit/visa-classic-recto-800x450.jpg", 
name: "gastos", link: "/spendings", id: 5, }]

export default { gastos, events, niveis, wallet };