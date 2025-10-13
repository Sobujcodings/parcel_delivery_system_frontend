// import { Button } from "@/components/ui/button"

import { Outlet } from "react-router"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import { Toaster } from "sonner"
import ScrollToTop from "./components/ui/scrolltoTop"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster richColors position="top-right" />
      <ScrollToTop />
      <div><Navbar /></div>
      <div className="grow-1 ">
        <Outlet />
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default App