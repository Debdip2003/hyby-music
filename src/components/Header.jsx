import PropTypes from "prop-types";

const Header = ({ children, description }) => {
  return (
    <div className="text-center mt-12 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold">{children}</h2>
      {description && (
        <p className="text-md text-yellow-700 mt-2">{description}</p>
      )}
    </div>
  );
};

// Define prop types
Header.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default Header;
