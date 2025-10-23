import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="pt-20 text-black dark:text-white">
      <div className="justify-end p-2 flex">
        <Link
          to="/register"
          className="flex gap-3 w-fit rounded p-2 cursor-pointer font-semibold text-white bg-gray-900 dark:text-black dark:bg-white"
        >
          Get started <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
