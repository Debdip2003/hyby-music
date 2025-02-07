import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowButtons = () => {
  return (
    <div className="flex justify-end items-center gap-4 px-8  mt-2">
      {/* Left Arrow */}
      <button className="rounded-full p-2 border-2 border-amber-500 text-black hover:bg-amber-500 hover:text-white transition-all">
        <FaArrowLeft className="h-6 w-6" />
      </button>
      {/* Right Arrow */}
      <button className="rounded-full p-2 border-2 border-amber-500 text-black hover:bg-amber-500 hover:text-white transition-all">
        <FaArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ArrowButtons;
