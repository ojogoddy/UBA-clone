import logo from "../assets/UBA-Logo.svg"
import {MdMenu, MdSearch} from "react-icons/md"
import {GoLock} from "react-icons/go"

const Header = () => {
  return (
    <div className="flex bg-white items-center justify-between px-4 h-[70px] fixed top-0 w-full">
        <nav className=" flex items-center gap-x-2">
            <li className=" text-gray-500 list-none text-[30px]">
                <MdMenu/>
            </li>
            <li className=" text-gray-500 list-none text-[30px]">
                <MdSearch/>
            </li>
            <li className=" flex items-center gap-x-2 bg-[#CD1307] text-white list-none px-3 py-1 rounded-md">
              <span> <GoLock/> </span> LOG IN
            </li>
            
        </nav>
        <div className="w-[100px]">
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Header