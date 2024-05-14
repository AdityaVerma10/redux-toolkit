import Header from "./Header"
import { Outlet } from "react-router-dom"
function Layout() {
  return (
    <>
        <div className="flex justify-center flex-col gap-[1rem]">
        <Header/>
        <Outlet/>
        </div>
    </>
  )
}

export default Layout