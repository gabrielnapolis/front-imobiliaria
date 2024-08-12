import  {PropertyDetails } from "@/data/inner-data/PropertyDetails"
import {  useEffect, useState } from "react";

const CommonPropertyFeatureList = ({ params }: { params: { property: any } }) => {
   const [property, setProperty] = useState<any>(params.property);
   const [property_list, setPropertyList] = useState<PropertyDetails[]>([]);
 
   useEffect(() => {
     setProperty(property);
     addItems(property)
   }, []);

   const addItems = (property: any) => {
      const categories: { [key: string]: { id: number; title: string; features: { title: string; count: string }[] } } = {
        details: {
          id: 1,
          title: "Detalhes do Imóvel",
          features: []
        },
        external: {
          id: 2,
          title: "Recursos Externos",
          features: []
        }
      };
  
      const featureMappings: { [key: string]: { category: string; featureTitle: string; count: (value: any) => string } } = {
         bed: { category: 'details', featureTitle: "Quartos", count: (value) => value.toString() },
         bath: { category: 'details', featureTitle: "Banheiros", count: (value) => value.toString() },
         kitchen: { category: 'details', featureTitle: "Cozinha", count: (value) => value.toString() },
         parking: { category: 'external', featureTitle: "Estacionamento", count: (value) => value ? "Sim" : "Não" },
         garden: { category: 'details', featureTitle: "Jardim", count: (value) => value ? "Sim" : "Não" },
         hvac: { category: 'details', featureTitle: "Ar-condicionado", count: (value) => value ? "Sim" : "Não" },
         garages: { category: 'external', featureTitle: "Garagem", count: (value) => value.toString() },
         playground: { category: 'external', featureTitle: "Playground", count: (value) => value ? "Sim" : "Não" },
         elevator: { category: 'details', featureTitle: "Elevador", count: (value) => value ? "Sim" : "Não" },
         swimmimgpool: { category: 'external', featureTitle: "Piscina", count: (value) => value ? "Sim" : "Não" },
         ceilingHeight: { category: 'details', featureTitle: "Pé Direito", count: (value) => value.toString() },
         mts: { category: 'details', featureTitle: "M²", count: (value) => value.toString() },
         security: { category: 'external', featureTitle: "Segurança", count: (value) => value },
         pcdAccess: { category: 'details', featureTitle: "Acessibilidade para PCD", count: (value) => value ? "Sim" : "Não" },
         furnished: { category: 'details', featureTitle: "Mobiliado", count: (value) => value ? "Sim" : "Não" },
         wifi: { category: 'details', featureTitle: "WiFi", count: (value) => value ? "Sim" : "Não" },
         petAllowed: { category: 'details', featureTitle: "Aceita Animais", count: (value) => value ? "Sim" : "Não" },
         gym: { category: 'external', featureTitle: "Academia", count: (value) => value ? "Sim" : "Não" }
       };
  
      for (const key in property) {
        if (featureMappings[key]) {
          const mapping = featureMappings[key];
          categories[mapping.category].features.push({
            title: `${mapping.featureTitle}:`,
            count: mapping.count(property[key])
          });
        }
      }
  
      const items: PropertyDetails[] = Object.values(categories).filter(category => category.features.length > 0).map(category => ({
        id: category.id,
        title: category.title,
        feature_list: category.features
      }));
  
      setPropertyList(items);
    };

   return (
      <div className="accordion" id="accordionTwo">
         {property_list.map((item: any) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false"
                     aria-controls={`collapse${item.id}`}>
                     {item.title}
                  </button>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                  data-bs-parent="#accordionTwo">
                  <div className="accordion-body">
                     <div className="feature-list-two">
                        <ul className="style-none d-flex flex-wrap justify-content-between">
                           {item.feature_list.map((list: { title: string | number | boolean ; count: string | number | boolean |  null | undefined; }, i: number | null | undefined) => (
                              <li key={i}><span>{list.title} </span> <span className="fw-500 color-dark">{list.count}</span></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default CommonPropertyFeatureList;
