/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import { Toaster } from "sonner"
import ScrollToTop from "./components/ui/scrolltoTop"
import { Spinner } from "./components/ui/spinner"

// homepage ta thik koro --> heroSection add koro --> banner r text thik koro
// about, contact page thik koro --> text + content 
// deploy koro --> beckend(already kora ache abar update hoye new url ta frontend e boshbe then frontend deploy koro) + frontend

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* needs to be load for full screen */}
      {/* <div className="flex items-center gap-4">
        <Spinner />
      </div>       */}
      <Toaster richColors position="top-right" />
      <div className="flex items-center gap-4">
      </div>
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