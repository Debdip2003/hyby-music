import Button from "./Button";
import headphone from "../assets/headphone.png";

const ContactForm = () => {
  return (
    <div className="bg-[#ffae0ccd]  w-full flex flex-row-reverse mt-20 flow-hidden pb-20 pt-5 mb-36">
      {" "}
      <div className="px-24 flex flex-col justify-center items-center w-1/2 z-10">
        {" "}
        <h2 className="text-5xl text-black mb-20 underline font-bold">
          Send your Query
        </h2>
        {/* display of form */}
        <form className="flex flex-col gap-8 w-full max-w-md">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Full Name"
            className="p-2 text-xl font-bold rounded-lg border-2 border-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            className="p-2 text-xl  font-bold rounded-lg border-2 border-black"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your Mobile Number"
            className="p-2  text-xl  font-bold rounded-lg border-2 border-black"
            required
          />
        </form>
        {/* display of submit button */}
        <div className="w-full max-w-md text-2xl py-1 bg-white text-black flex items-center justify-center mt-16  rounded-md ">
          <Button>Submit</Button>
        </div>
      </div>
      <div className="w-1/2 absolute inset-y-20 left-0 h-full">
        {" "}
        <img src={headphone} alt="Headphones" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default ContactForm;
