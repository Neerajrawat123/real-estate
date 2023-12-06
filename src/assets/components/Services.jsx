import { services } from "../constants/services";

function Services() {
  const ServiceCard = ({ service }) => (
    <div
      className="flex flex-col items-center text-center px-3 py-3 hover:bg-indigo-600 hover:scale-110 hover:text-white ease-in-out
    transition rounded-lg"
    >
      <div className="w-2/3">
        <img src={service.imageUrl} alt="" />
      </div>
      <h2 className="text-xl font-bold mb-3">{service.name}</h2>
      <p className="text-lg">{service.desc}</p>
    </div>
  );
  return (
    <div className="w-full h-full px-[8%]">
      <h1 className="text-center m-auto pt-8 pb-2 mb-12 font-bold text-3xl relative border-b-4 max-w-max border-indigo-700">
        Our Services
      </h1>
      <div className="md:grid gap-8 grid-cols-3">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
