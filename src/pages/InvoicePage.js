import { Outlet } from "react-router"
import Header from "../lib/Header"
import Nav from "../lib/Nav"
import { Form, Formik } from "formik"

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
       initialValues={{ colors: '', password: '' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.email) {
      //      errors.email = 'Required';
      //    } else if (
      //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //    ) {
      //      errors.email = 'Invalid email address';
      //    }
      //    return errors;
      //  }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          console.log('submitting');
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           
           <Outlet/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
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