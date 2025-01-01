import { ErrorMessage, Field } from 'formik';
import InvoiceIconTwo from '../assets/icons/InvoiceIconTwo';
import Card from '../lib/Card';
import Heading from '../lib/Heading';
import classes from '../lib/Input/input.module.css';
import Input from '../lib/Input/Input';

const InvoiceDetails = () => {
    const invoiceDetails = {
        heading: 'invoice details',
        icon: <InvoiceIconTwo />
    };

    return (
        <div>
            <Heading {...invoiceDetails} />
            <div className="py-3">
                <p className="text-xl font-medium capitalize">
                    General Information
                </p>
                <div className="py-3">
                    <Input
                        type="select"
                        name="purchase order number"
                        required={true}
                        selectoptions={['hi', 'hello']}
                    />
                </div>
                <p className="text-xl font-medium capitalize">
                    Invoice Details
                </p>
                <div className="grid grid-cols-2 gap-3 pb-3">
                    <div>
                        <Input
                            type="select"
                            name="invoice number"
                            required={true}
                            selectoptions={['hi', 'hello']}
                        />
                    </div>

                    <div>
                        <Input type="date" name="date" required={true} />
                    </div>

                    <div>
                        <Input
                            type="number"
                            name="Total amount"
                            required={true}
                        />
                    </div>

                    <div>
                        <Input
                            type="select"
                            name="payment terms"
                            required={true}
                            selectoptions={['hi', 'hello']}
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            name="invoice due date"
                            required={true}
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            name="GL post date"
                            required={true}
                        />
                    </div>
                </div>
                <Input type="text" name="GL post date" required={true} />
            </div>
        </div>
    );
};

export default InvoiceDetails;
