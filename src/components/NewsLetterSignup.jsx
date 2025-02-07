import person from "../assets/person.png";
import Button from "./Button";

const NewsLetterSignup = () => {
  return (
    <div className="bg-[#ffae0ccd] py-12 px-6 sm:px-18 rounded-lg mt-20 flex flex-col sm:flex-row h-auto w-full overflow-hidden relative">
      {/* Text Section */}
      <div className="max-w-3xl text-center sm:text-left mt-10 sm:mt-20 flex flex-col justify-center w-full sm:w-1/2 z-10 px-6 sm:px-8">
        <h2 className="text-4xl sm:text-7xl font-bold text-black mb-4 leading-tight">
          Stay in the Loop!
        </h2>
        <p className="text-md sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
          Stay updated on the latest music news, exclusive offers, and new
          releases by subscribing to our newsletter. Be the first to learn about
          upcoming events, artist spotlights, and more. Sign up now and never
          miss a beat!
        </p>
        {/* Newsletter Signup */}
        <div className="flex w-full sm:w-2/3">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black text-white px-4 py-3 rounded-l-md border-2 border-white"
          />
          <Button className="bg-white text-black ml-2 font-semibold px-4 py-3 rounded-r-md hover:cursor-pointer">
            SUBSCRIBE
          </Button>
        </div>
      </div>

      {/* Image Section (Hidden on Mobile) */}
      <div className="hidden sm:block absolute inset-y-0 right-0 w-1/2">
        <img src={person} alt="Person" className="object-cover h-full w-full" />
      </div>
    </div>
  );
};

export default NewsLetterSignup;
