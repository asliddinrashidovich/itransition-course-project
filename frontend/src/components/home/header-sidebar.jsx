import { useState } from "react"
import { FaBarsStaggered } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import LanguageChanger from "./language-changer"

function HeaderSidebar() {
    const [openSidebar, setOpenSideBar] = useState(false)
    function handleOpen() {setOpenSideBar(true)}
    function handleClose() {setOpenSideBar(false)}
    const  navigate = useNavigate()
    function handleClick(path) {
        navigate(path)
        setOpenSideBar(false)
    }
  return (
    <div className="lg:hidden flex">
        <button onClick={handleOpen} className="lg:hidden flex cursor-pointer">
            <FaBarsStaggered className="text-[#fff] text-[25px]"/>
        </button>
        {<div className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-[100%]"} transition-liniar duration-200  right-0 bottom-0 bg-[#fff] w-[40%] z-30 `}>
            <div onClick={handleClick} className="p-[20px] flex md:hidden">
                <LanguageChanger/>
            </div>
        </div>}
        {openSidebar && <div onClick={handleClose} className="fixed top-0 left-0 bottom-0 bg-black/50 w-[100%] brightness-50 z-20"></div>}
        </div>
  )
}

export default HeaderSidebar