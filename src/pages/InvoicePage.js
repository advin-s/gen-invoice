import { Outlet } from "react-router"
import Header from "../lib/Header"
import Nav from "../lib/Nav"

const InvoicePage = () =>{
  return <>
  <Header/>
  <section className="bg-theme-bg">
  <div className="container mx-auto">
  <Nav/>
  <div className="grid lg:grid-cols-2">
  <div></div>
  <div>
    <Outlet/>
  </div>
  </div>
  </div>
  </section>
  </>
}

export default InvoicePage