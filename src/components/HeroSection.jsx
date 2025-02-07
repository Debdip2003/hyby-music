import headphone from "../assets/headphone.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="bg-[#ffae0ccd]  w-full flex mt-20 flow-hidden py-10">
      {" "}
      <div className="px-24 flex flex-col justify-center w-1/2 z-10">
        {" "}
        <h1 className="text-7xl font-extrabold leading-tight">
          {" "}
          Music <br />
          Without <br />
          Boundaries
        </h1>
        <p className="text-white mt-6">
          Enjoy seamless music streaming with our HYBY music platform, giving
          you access to millions of songs without interruptions.
        </p>
        {/* sign in button */}
        <div className="w-1/4 bg-black text-white mt-16 rounded-md py-3 ">
          <Button>Sign in</Button>
        </div>
      </div>
      {/* display of headphone image */}
      <div className="w-1/2 absolute  inset-y-20 right-0 h-full">
        {" "}
        <img src={headphone} alt="Headphones" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
