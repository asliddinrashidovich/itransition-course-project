import { Outlet } from "react-router-dom"
import { Header } from "../components"

function MainLayout() {
  return (
    <>
      <Header/>
      <div>
        <Outlet/>  
      </div>
    </>
  )
}

export default MainLayout