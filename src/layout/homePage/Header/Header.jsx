import {appleImg} from "../../../utils";
import {searchImg} from "../../../utils";
import {bagImg} from "../../../utils";

const Header = () => {
  return (
    <header>
      <nav className="px-5 py-5 md:px-10 flex items-center justify-between">

        <div className="cursor-pointer">
          <img src={appleImg} alt="Logo" height={14} width={16} />
        </div>

        <div>
          <ul className="flex items-center gap-5 cursor-pointer">
            <li>Phome</li>
            <li>Macbook</li>
            <li>Tablet</li>
          </ul>
        </div>

        <div className="flex items-center gap-5 cursor-pointer">
          <img src={searchImg} alt="searchIcone" height={18} width={18} />
          <img src={bagImg} alt="cartIcone" height={18} width={18} />
        </div>

      </nav>
    </header>
  );
};

export default Header;