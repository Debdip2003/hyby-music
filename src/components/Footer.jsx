import logo from "../assets/logo.png";
// import logo_dark from "../assets/logo_dark.png";
import footerData from "../data/FooterData";

const Footer = () => {
  return (
    <footer className="py-12 px-24 flex flex-col md:flex-row justify-between items-start">
      {" "}
      <div className="text-left mb-6 ">
        {/* display of logo */}
        <div className="font-bold text-xl flex items-center">
          {" "}
          <img src={logo} alt="logo" className="h-16 " />{" "}
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Copyright © 2022. <br /> All Rights Reserved.
        </p>
      </div>
      {/* actual footer */}
      <div className="flex flex-wrap md:flex-nowrap justify-between  w-auto">
        {Object.entries(footerData).map(([title, links], index) => (
          <div key={index} className="mb-6 mr-24">
            {" "}
            <h4 className="font-bold mb-3 text-gray-800">{title}</h4>
            <ul className="text-gray-600">
              {links.map((link, i) => (
                <li key={i} className="mb-2">
                  <a href={link.link} className="hover:underline ">
                    {" "}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
