import { Form } from "react-router"
import { InvoiceIcon } from "../assets/icons/InvoiceIcon"
import Button from "./Button"

const Header = () =>{
  return <section className="bg-slate-200 border-b-gray-300 border py-1">
    <div className="container flex mx-auto">
      <p className="text-base mb-0 flex items-center gap-x-1">
      <InvoiceIcon customClass={'h-5 w-5 text-theme'} />{' '}

        Gen invoice</p>

        <Form action="/logout" method="post" className="ms-auto">
        <Button customClass="bg-theme px-3 text-white">Logout</Button>
        </Form>
    </div>
  </section>
}

export default Header