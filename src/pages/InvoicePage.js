import { Outlet } from 'react-router';
import Header from '../lib/Header';
import Nav from '../lib/Nav';
import { Form, Formik } from 'formik';
import Button from '../lib/Button';
import MenuIcon from '../assets/icons/MenuIcon';
import * as Yup from 'yup';

const InvoicePage = () => {
    const initialValues = {
        vendor: '',
        purchase_order_number: '',
        invoice_number: '',
        date: '',
        total_amount: '',
        payment_terms: '',
        invoice_due_date: '',
        gl_post_date: '',
        invoice_description: '',
        line_amount: '',
        department: '',
        account: '',
        location: '',
        description: '',
        comments: ''
    };

    const formValidationSchema = Yup.object({
        vendor: Yup.string().required('Please select a vendor'),
        purchase_order_number: Yup.string().required(
            'Please select a purchase order number'
        ),
        invoice_number: Yup.string().required(
            'Please select an invoice number'
        ),
        date: Yup.string().required('Please select a date'),
        total_amount: Yup.string().required('Please add a total amount'),
        payment_terms: Yup.string().required('Please choose a term'),
        invoice_due_date: Yup.string().required('Please choose a due date'),
        gl_post_date: Yup.string().required('Please choose a post date'),
        invoice_description: Yup.string().required('Please add a description'),
        line_amount: Yup.string().required('Please add a line amount'),
        department: Yup.string().required('Please add a department'),
        account: Yup.string().required('Please add an account'),
        location: Yup.string().required('Please choose a location'),
        description: Yup.string().required('Please add a description')
    });

    return (
        <>
            <Header />
            <section className="bg-theme-bg">
                <div className="container mx-auto">
                    <Nav />
                    <div className="grid lg:grid-cols-2">
                        <div></div>
                        <div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={formValidationSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        console.log('submitting');
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting, isValid, dirty }) => (
                                    <Form className="">
                                        <div className="h-[calc(100vh-100px-68px)] overflow-y-auto scroll-pe-3 pe-3">
                                            <Outlet />
                                        </div>
                                        <div className="border border-theme-tertiary p-3 rounded-md flex items-center gap-x-3">
                                            <button className="p-3 border border-transparent rounded-md active:border-theme-border">
                                                <MenuIcon />
                                            </button>
                                            <Button
                                                customClass="border border-theme-border w-1/2"
                                                type="button"
                                            >
                                                Save as Draft
                                            </Button>
                                            <Button
                                                type="submit"
                                                customClass="bg-theme text-white w-1/2 disabled:opacity-50"
                                            >
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
    );
};

export default InvoicePage;