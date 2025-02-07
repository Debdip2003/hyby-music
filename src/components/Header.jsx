import PropTypes from "prop-types";

const Header = ({ children, description }) => {
  return (
    <div className="text-center mt-30">
      {" "}
      <h2 className="text-5xl font-extrabold">{children}</h2>{" "}
      <p className="text-md text-yellow-700 mt-2">{description}</p>{" "}
    </div>
  );
};

// define the prop types
Header.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Header;
