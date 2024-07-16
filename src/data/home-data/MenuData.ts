interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        has_dropdown: true,
        title: "Imoveis",
        class_name:"mega-dropdown-sm",
        link: "#",
        menu_column: [
            {
                id: 1,
                mega_title: "Listing Type",
                mega_menus: [
                    { link: "/listing_12", title: "Compra" },
                    { link: "/listing_12", title: "Aluguel" },
                    { link: "/contact", title: "Venda" },
            
                ]
            },
        ]
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Sobre nós",
        class_name:"mega-dropdown-sm",
        link: "#",
        menu_column: [
            {
                id: 1,
                mega_title: "Essential",
                mega_menus: [
               
                    { link: "/contact", title: "Contato" },
                    { link: "/faq", title: "Dúvidas Frequêntes" },
                    { link: "/about_us", title: "Zucheratto Imobiliaria" },
                ]
            },
            
    
        ]
    },
];
export default menu_data;
