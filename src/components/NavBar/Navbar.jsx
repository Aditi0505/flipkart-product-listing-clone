import { Search } from "../Input/Search";

const Navbar = () => {
  return (
    <div className="bg-blue-500 flex gap-x-4 flex-wrap justify-around h-16">
      <div className="w-2/4 flex items-center">
        <span className="text-white p-4 font-Montserrat flex-none">
          Flipkart
        </span>
        <Search />
      </div>
      <div className="flex items-center justify-around gap-12">
        <button className="text-blue-500 bg-white p-1 font-Montserrat flex-none w-24 cursor-pointer">
          Login
        </button>
        <span className="text-white cursor-pointer gap-12 font-Montserrat">
          More <i className="fas fa-angle-down"></i>
        </span>
        <span className="text-white cursor-pointer flex gap-x-2 items-center font-Montserrat">
          <i className="fas fa-shopping-cart"></i>
          <span>Cart</span>
        </span>
      </div>
    </div>
  );
};
export { Navbar };
