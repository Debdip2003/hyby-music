import headphone from "../assets/headphone.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="bg-[#ffae0ccd] w-full flex flex-col md:flex-row items-center mt-20 overflow-hidden py-10">
      {/* Left Section: Text Content */}
      <div className="px-6 sm:px-12 md:px-24 flex flex-col justify-center w-full md:w-1/2 z-10 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
          Music <br />
          Without <br />
          Boundaries
        </h1>
        <p className="text-white mt-6 text-sm sm:text-base">
          Enjoy seamless music streaming with our HYBY music platform, giving
          you access to millions of songs without interruptions.
        </p>

        {/* Sign-in Button */}
        <div className="w-1/2 sm:w-1/4 bg-black text-white mt-10 sm:mt-16 rounded-md py-3 mx-auto md:mx-0">
          <Button>Sign in</Button>
        </div>
      </div>

      {/* Right Section: Headphone Image (Hidden on Small Screens) */}
      <div className="w-full md:w-1/2 hidden md:block absolute inset-y-20 right-0 h-full">
        <img src={headphone} alt="Headphones" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
