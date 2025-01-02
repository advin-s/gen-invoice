import { Field, Form, Formik } from 'formik';
import VendorIcon from '../assets/icons/VendorIcon';
import Heading from '../lib/Heading';
import classes from '../lib/Input/input.module.css';
import Input from '../lib/Input/Input';

const VendorDetails = () => {
    const cardDetails = {
        icon: <VendorIcon />,
        heading: 'vendor details'
    };

    return (
        <div>
            <Heading {...cardDetails} />
            <div className="py-3">
                <p className="text-xl font-medium capitalize">
                    vendor information
                </p>

                <div className="py-3">
                    <Input
                        type="select"
                        name="vendor"
                        selectoptions={['one', 'two']}
                        required
                        component="div"
                        label="vendor"
                        placeholder="Select Vendor"
                    />
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
        </div>
    );
};

export default VendorDetails;
