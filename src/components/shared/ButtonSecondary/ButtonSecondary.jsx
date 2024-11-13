import { FaArrowRight } from "react-icons/fa";

const ButtonSecondary = ({ text }) => {
  return (
    <button className="border flex w-max border-black h-max mx-auto items-center px-4 py-2 gap-2 rounded-full">
      {text} <FaArrowRight className="-rotate-45" />
    </button>
  );
};

export default ButtonSecondary;
