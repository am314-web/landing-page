import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1">
        "Innovative Solutions for Seamless Healthcare"
      </h5>
      <ul className="flex ">
        {companyLogos.map((logo, index) => (
          <li key={index} className="mr-28">
            <img
              src={logo}
              width={134}
              height={28}
              alt={`Company logo ${index}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
