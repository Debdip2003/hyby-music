import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ArrowButtons = () => {
  return (
    <div className="flex justify-end gap-6 px-26 mb-8 mt-2">
      {" "}
      {/* left arrow */}
      <button className="rounded-full p-2  hover:cursor-pointer border-amber-500 border-2 ">
        <FaArrowLeft className="h-6 w-6 text-black " />
      </button>
      {/* right arrow */}
      <button className=" border-amber-500 border-2 rounded-full p-2   hover:cursor-pointer">
        <FaArrowRight className="h-6 w-6 text-black" />
      </button>
    </div>
  );
};

export default ArrowButtons;
