interface DataType {
  id: number;
  page: string;
  widget_title: string;
  widget_class?: string;
  widget_class2?: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 1,
    page: "home_5",
    widget_class: "col-lg-3 ms-auto",
    widget_class2: "ps-xl-5",
    widget_title: "Links",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/contato", link_title: "Contato" },
      { link: "/sobre_nos", link_title: "Sobre Nós" },
    ],
  },
  {
    id: 2,
    widget_class: "col-lg-3",
    page: "home_5",
    widget_title: "Legal",
    footer_link: [
       { link: "/faq", link_title: "Cookies" },
       { link: "/faq", link_title: "Termos e condições" },
       { link: "/faq", link_title: "Dúvidas Frequêntes" },
      { link: "/faq", link_title: "Política de Privacidade" },
    ],
  },
  {
    id: 3,
    widget_class: "col-lg-2",
    page: "home_5",
    widget_title: "Imóveis",
    footer_link: [
      { link: "/imoveis", link_title: "Compra" },
      { link: "/imoveis", link_title: "Aluguel" },
    ],
  },
];

export default footer_data;
