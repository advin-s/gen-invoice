import { InvoiceIcon } from '../assets/icons/InvoiceIcon';
import { Form, Formik } from 'formik';
import Button from '../lib/Button';
import FormField from '../lib/FormField';
import { useState } from 'react';
import { handleToken } from '../utils/auth';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const [wrongPassword, setWrongPassword] = useState(false);
    const navigate = useNavigate();
    const onLogin = async (values) => {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                ...values
            })
        });

        console.log(response);
        if (response.status === 400) setWrongPassword(true);
        if (response.status === 200) {
            const resData = await response.json();
            handleToken(resData);
            navigate('view');
        }
    };
    return (
        <section className="bg-theme-bg">
            <div className="container">
                <div className="grid lg:grid-cols-4 items-center h-dvh">
                    <div className="col-span-3">
                        <p className="text-5xl mb-0 flex justify-center items-center gap-x-2">
                            <InvoiceIcon customClass={'h-10 w-10 text-theme'} />{' '}
                            Gen Invoice
                        </p>
                    </div>
                    <div className="p-6 rounded-lg shadow-md bg-white">
                        <p className="text-lg font-medium text-center">Login</p>
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.username) {
                                    errors.username =
                                        'Please provide a username';
                                } else if (values.username.length !== 6) {
                                    errors.username =
                                        'Username should be 6 characters long';
                                } else if (/^[a-zA-Z]$/.test(values.username)) {
                                    errors.username =
                                        'username contains special characters';
                                }

                                if (!values.password) {
                                    errors.password =
                                        'Please provide a password';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                onLogin(values);
                                setSubmitting(false);
                            }}
                        >
                            {({ values, isSubmitting }) => (
                                <Form className="grid gap-y-3">
                                    <FormField
                                        type="text"
                                        name="username"
                                        component="div"
                                    />
                                    <FormField
                                        type="password"
                                        name="password"
                                        component="div"
                                    />
                                    {wrongPassword && values.password ? (
                                        <p className="text-xs text-red-500">
                                            Incorrect email or password
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        customClass="bg-theme text-white"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
