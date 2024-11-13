import { FaArrowRight } from "react-icons/fa";

const ButtonPrimay = ({text}) => {
  return (
    <button className="bg-black h-max w-max text-white flex items-center px-4  py-2 gap-2 rounded-full">
     {text} <FaArrowRight className="-rotate-45" />
    </button>
  );
};

export default ButtonPrimay;
