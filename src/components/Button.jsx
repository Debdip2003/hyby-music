import PropTypes from "prop-types";

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={`font-bold px-10 hover:cursor-pointer  ${className || ""}`} //accept the classname of button from the parent class
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
