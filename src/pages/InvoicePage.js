import { Outlet } from "react-router"
import Header from "../lib/Header"
import Nav from "../lib/Nav"
import { Form, Formik } from "formik"
import Button from "../lib/Button"
import MenuIcon from "../assets/icons/MenuIcon"

const InvoicePage = () =>{
  return <>
  <Header/>
  <section className="bg-theme-bg">
  <div className="container mx-auto">
  <Nav/>
  <div className="grid lg:grid-cols-2">
  <div></div>
  <div>
  <Formik
       initialValues={{vendor:''}}
       validate={values => {
         const errors = {};
        if(!values.vendor){
          errors.vendor = "Please select a vendor"
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          console.log('submitting');
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting,isValid,dirty }) => (
         <Form className="">
           <div className="h-[calc(100vh-100px-68px)] overflow-y-auto scroll-pe-3 pe-3">
           <Outlet/>
           </div>
          <div className="border border-theme-tertiary p-3 rounded-md flex items-center gap-x-3">
            <button className="p-3 border border-transparent rounded-md active:border-theme-border">
              <MenuIcon/>
            </button>
            <Button customClass="border border-theme-border w-1/2" type="button">
              Save as Draft
            </Button>
          <Button type="submit" customClass="bg-theme text-white w-1/2 disabled:opacity-50" disabled={!isValid || !dirty}>
             Submit & new
           </Button>
          </div>
         </Form>
       )}
     </Formik>
  </div>
  </div>
  </div>
  </section>
  </>
}

export default InvoicePage