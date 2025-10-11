// import { Button } from "@/components/ui/button"

import { Outlet } from "react-router"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div><Navbar /></div>
      <div className="grow-1 ">
        <Outlet />
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default App