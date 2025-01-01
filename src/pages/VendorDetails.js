import { Field, Form, Formik } from 'formik';
import VendorIcon from '../assets/icons/VendorIcon';
import Heading from '../lib/Heading';
import classes from '../lib/Input/input.module.css';

const VendorDetails = () => {
    const cardDetails = {
        icon: <VendorIcon />,
        heading: 'vendor details'
    };

    return (
        <>
            <Heading {...cardDetails} />
            <div className="py-3">
                <p className="text-xl font-medium capitalize">
                    vendor information
                </p>

                <div className="py-3">
                    <label
                        htmlFor="vendor"
                        className="text-sm text-theme-content-secondary capitalize"
                    >
                        vendor
                        <span className="text-red-500 ms-1">*</span>
                    </label>
                    <div className="relative">
                        <Field
                            name="color"
                            as="select"
                            className={`w-full bg-white p-2 border-theme-border border outline-none rounded-lg px-3 ${classes['override-select']}`}
                        >
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>
                        <svg
                            class="text-theme-content size-5 mr-2 absolute top-1/2 end-0 -translate-y-1/2"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-base text-theme-content-secondary">
                        550 Main St., Lynn
                    </p>
                    <button
                        className="w-full flex justify-center text-base items-center text-theme gap-x-2"
                        type="button"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 11 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.5 1L5.5 5L9.5 1"
                                stroke="#1787E0"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        View Vendor Details
                    </button>
                </div>
            </div>
        </>
    );
};

export default VendorDetails;
