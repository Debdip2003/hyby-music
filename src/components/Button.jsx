import PropTypes from "prop-types";

const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      className={`font-bold px-6 py-2 rounded-md transition-all duration-300 hover:opacity-80 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
