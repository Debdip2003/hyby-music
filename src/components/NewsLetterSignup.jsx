import person from "../assets/person.png";
import Button from "./Button";

const NewsLetterSignup = () => {
  return (
    <div className="bg-[#ffae0ccd] py-12 px-18 rounded-lg mt-20 flex h-auto w-full overflow-hidden relative">
      {" "}
      <div className="max-w-3xl text-center mt-20 flex flex-col justify-center w-1/2 z-10 px-8">
        {" "}
        <h2 className="text-7xl font-bold text-black mb-4 text-start leading-tight">
          {" "}
          Stay in the Loop!
        </h2>
        <p className="text-md text-start text-white mb-8 leading-relaxed">
          {" "}
          Stay updated on the latest music news, exclusive offers, and new
          releases by subscribing to our newsletter. Be the first to learn about
          upcoming events, artist spotlights, and more. Sign up now and never
          miss a beat!
        </p>
        {/* newsletter sign up */}
        <div className="flex w-2/3">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-2/3 bg-black text-white px-4 py-3 rounded-l-md mb-4 border-2 border-white "
          />
          {/* subscribe button */}
          <Button className="bg-white text-black font-semibold px-4 py-3 h-2/3 rounded-r-md hover:cursor-pointer">
            SUBSCRIBE
          </Button>
        </div>
      </div>
      {/* display of person image */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        {" "}
        <img src={person} alt="Person" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default NewsLetterSignup;
