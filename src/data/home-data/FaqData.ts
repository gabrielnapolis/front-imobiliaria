interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const faq_data:DataType[] = [
   {
      id: 1,
      page: "home_six",
      question: "Quem somos nós??",
      answer: "A empresa de engenharia e imobiliária, com 16 anos de mercado, destaca-se pela excelência e comprometimento com seus clientes."+
      " Ao longo dos anos, consolidou sua reputação no ramo da construção civil, oferecendo soluções inovadoras e projetos de alta qualidade. "+
      " Com uma equipe qualificada e experiente, a empresa tem se destacado no desenvolvimento de empreendimentos residenciais e comerciais que unem funcionalidade, design e sustentabilidade."+ 
      " Com um olhar voltado para o futuro, a empresa continua firmando parcerias e buscando aprimorar seus serviços,"+
      " visando sempre superar as expectativas de seus clientes e contribuir para o crescimento urbano de forma responsável e sustentável."+ 
      " Esperando vocês para realizar o melhor negócios juntos.Quer construir,  alugar ou vender podemos ajudar.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_six",
      question: "Nosso objetivo",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_six",
      question: "Nossa Visão",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
];

export default faq_data;