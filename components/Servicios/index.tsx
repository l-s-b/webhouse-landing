import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import copy from '../../text.json';

const Servicios = () => {
  return (
    <>
      <section id="servicios" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={copy.services.title}
            paragraph={copy.services.paragraph}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((service) => (
              <SingleFeature key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;
