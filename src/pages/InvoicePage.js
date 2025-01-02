import { Outlet } from 'react-router';
import Header from '../lib/Header';
import Nav from '../lib/Nav';
import { Form, Formik } from 'formik';
import Button from '../lib/Button';
import MenuIcon from '../assets/icons/MenuIcon';
import * as Yup from 'yup';
import UploadInvoice from './UploadInvoice/UploadInvoice';
import Toast from '../lib/Toast';
import { useState } from 'react';

const InvoicePage = () => {
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

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

    const handleSave = (values) => {
      handleStorage(values,'savedForms')
      handleToast('success', 'saved')
    }

    const handleDraft = (values) => {
      handleStorage(values,'draftedForms')
      handleToast('success', 'saved to drafts')
    }

    const handleStorage = (values,key) =>{
      const saveArr = []
      const randomId = new Date().getTime()
      saveArr.push({...values,id:randomId})
      localStorage.setItem(key, JSON.stringify(saveArr))
    }

    const handleToast = (type, message) =>{
      setToast({ show: true, message, type });
      setTimeout(()=>{
        setToast(prevToast => prevToast.show = false)
      },3000)
    }

    return (
        <>
            <section className="bg-theme-bg">
                <div className="container mx-auto">
                    <Nav />
                    <div className="grid lg:grid-cols-2 lg:gap-x-4 py-3">
                        <UploadInvoice/>
                        <div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={formValidationSchema}
                                onSubmit={(values, { setSubmitting, resetForm,validateForm }) => {
                                  handleSave(values)
                                  setSubmitting(false);
                                  resetForm()
                                }}
                            >
                                {({ values, resetForm, validateForm }) => (
                                    <Form className="">
                                        <div className="h-[calc(100vh-100px-68px-1.5rem)] overflow-y-auto scroll-pe-3 pe-3">
                                            <Outlet />
                                        </div>
                                        <div className="border border-theme-tertiary p-3 rounded-md flex items-center gap-x-3">
                                            <button className="p-3 border border-transparent rounded-md active:border-theme-border">
                                                <MenuIcon />
                                            </button>
                                            <Button
                                                customClass="border border-theme-border w-1/2"
                                                type="button"
                                                onClick={()=>{handleDraft(values);validateForm();resetForm()}}
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
                  <Toast
                    type={toast.type}
                    message={toast.message}
                    show={toast.show}
                />
            </section>
        </>
    );
};

export default InvoicePage;
