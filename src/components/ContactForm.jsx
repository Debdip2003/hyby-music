import PropTypes from "prop-types";
import Button from "./Button";
import headphone from "../assets/headphone.png";

const ContactForm = () => {
  return (
    <div className="bg-[#ffae0ccd] w-full flex flex-col-reverse lg:flex-row-reverse items-center mt-20 overflow-hidden pb-20 pt-5 mb-36">
      {/* Form Section */}
      <div className="px-6 lg:px-24 flex flex-col justify-center items-center w-full lg:w-1/2 z-10">
        <h2 className="text-3xl lg:text-5xl text-black mb-10 lg:mb-20 underline font-bold">
          Send your Query
        </h2>

        <form className="flex flex-col gap-6 w-full max-w-md">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Full Name"
            className="p-3 text-lg lg:text-xl font-bold rounded-lg border-2 border-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            className="p-3 text-lg lg:text-xl font-bold rounded-lg border-2 border-black"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your Mobile Number"
            className="p-3 text-lg lg:text-xl font-bold rounded-lg border-2 border-black"
            required
          />
          {/* Submit Button */}
          <Button className="w-full bg-black text-white text-lg lg:text-2xl py-2 rounded-md mt-6">
            Submit
          </Button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:absolute inset-y-20 left-0 h-full">
        <img
          src={headphone}
          alt="Headphones"
          className="object-cover w-3/4 lg:w-full"
        />
      </div>
    </div>
  );
};

export default ContactForm;
