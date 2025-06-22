import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import HeaderSidebar from "./header-sidebar";
import LanguageChanger from "./language-changer";
import { IoSearch } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import AuthComponent from "./auth-component";

function Header() {

    const url = useLocation()
    const [scrolled, setScrolled] = useState(false);

    const skrolledCase = scrolled || ( url.pathname !== '/' && url.pathname !== '/about' && url.pathname !== '/resources'  && url.pathname !== '/favorites'  && url.pathname !== '/appointment' && url.pathname !== '/create-centers' && url.pathname !== '/create-centers' && url.pathname !== '/my-centers') 

    useEffect(() => {
        const handleScroll = () => {setScrolled(window.scrollY > 50);};
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)};
    }, []);

  return (
    <header className={`${skrolledCase ? "bg-[#e1e1e1] shadow-xl" : "bg-[#fff]"} px-5 md:px-10 py-[10px] fixed w-full z-99`}>
      <div className="flex items-center justify-between gap-[10px]">
        <Link to={'/'} className={`max-w-[60px] `}>
          <img src="https://easi.its.utoronto.ca/wp-content/uploads/2019/12/1024px-Microsoft_Forms_2019-present.svg-e1576870389646.png" alt="logo" />
        </Link>
        <form className="px-[5px] py-[5px] bg-[#f0f4f9] flex items-center rounded-[30px]">
            <button className="w-[50px] h-[50px] cursor-pointer transition-all duration-200 hover:bg-[#d5d8dc] rounded-[50%]  flex items-center justify-center">
                <IoSearch className="text-[25px] "/>
            </button>
            <input type="text" className="w-[700px] outline-none h-[40px]" placeholder="Search"/>
            <button className="w-[50px] h-[50px] cursor-pointer transition-all duration-200 hover:bg-[#d5d8dc] rounded-[50%]  flex items-center justify-center">
                <MdClear className="text-[25px]"/>
            </button>
        </form>
        <div className="flex gap-[10px] items-center">
          <div className="hidden md:flex">
            <LanguageChanger/>
          </div>
          <AuthComponent/>
          <HeaderSidebar />
        </div>
      </div>
    </header>
  )
}

export default Header