import BreadcrumbOne from '@/components/common/breadcrumb/BreadcrumbOne'
import FooterFour from '@/layouts/footers/FooterFour'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import FaqArea from './FaqArea'
import FancyBanner from '@/components/common/FancyBanner'

const Faq = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbOne title="Dúvidas Frequêntes" link="#" link_title="Pages" sub_title="Faq’s" style={true} />
         <FaqArea/>
         <FancyBanner style={false} />
         <FooterFour />
      </>
   )
}

export default Faq
