import { ErrorMessage, Field } from 'formik';
import InvoiceIconTwo from '../assets/icons/InvoiceIconTwo';
import Card from '../lib/Card';
import Heading from '../lib/Heading';
import classes from '../lib/Input/input.module.css';
import Input from '../lib/Input/Input';
import Button from '../lib/Button';
import Switch from '../lib/Switch';

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
                <div className="pt-3">
                    <Input
                        type="select"
                        name="purchase_order_number"
                        label="purchase order number"
                        required={true}
                        component="div"
                        selectoptions={['hi', 'hello']}
                        placeholder="Select PO Number"
                    />
                </div>
            </div>
            <div className="py-3">
                <p className="text-xl font-medium capitalize">
                    Invoice Details
                </p>
                <div className="grid grid-cols-2 gap-3 pb-3">
                    <div>
                        <Input
                            type="select"
                            name="invoice_number"
                            required={true}
                            label="invoice number"
                            selectoptions={['hi', 'hello']}
                            component="div"
                            placeholder="Select Vendor"
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            label="date"
                            name="date"
                            required={true}
                            component="div"
                        />
                    </div>

                    <div>
                        <Input
                            type="number"
                            name="total_amount"
                            label="Total amount"
                            required={true}
                            component="div"
                        />
                    </div>

                    <div>
                        <Input
                            type="select"
                            name="payment_terms"
                            label="payment terms"
                            required={true}
                            selectoptions={['hi', 'hello']}
                            component="div"
                            placeholder="Select"
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            name="invoice_due_date"
                            label="invoice due date"
                            required={true}
                            component="div"
                        />
                    </div>

                    <div>
                        <Input
                            type="date"
                            label="GL post date"
                            name="gl_post_date"
                            required={true}
                            component="div"
                        />
                    </div>
                </div>
                <Input
                    type="text"
                    label="Invoice description"
                    name="invoice_description"
                    required={true}
                    component="div"
                />
            </div>
            <div className="pb-3">
                <p className="text-xl font-medium capitalize flex items-center justify-between">
                    Expense Details
                    <div className="flex gap-x-3 items-center">
                        <p className="text-base flex gap-x-2">
                            $0.00 /<span className="text-theme">$0.00</span>
                        </p>
                        <Switch />
                    </div>
                </p>
                <div className="grid grid-cols-2 gap-3 pb-3 lg:me-14">
                    <div>
                        <Input
                            type="number"
                            name="line_amount"
                            required={true}
                            label="line amount"
                            component="div"
                        />
                    </div>

                    <div>
                        <Input
                            type="select"
                            label="department"
                            selectoptions={['one']}
                            name="department"
                            required={true}
                            component="div"
                            placeholder="Select Department"
                        />
                    </div>

                    <div>
                        <Input
                            type="select"
                            name="account"
                            label="account"
                            selectoptions={['one']}
                            required={true}
                            component="div"
                            placeholder="Select Account"
                        />
                    </div>

                    <div>
                        <Input
                            type="select"
                            name="location"
                            label="location"
                            required={true}
                            selectoptions={['hi', 'hello']}
                            component="div"
                            placeholder="Select Location"
                        />
                    </div>
                </div>
                <Input
                    type="text"
                    label="description"
                    name="description"
                    required={true}
                    component="div"
                />
                <div className="pt-3">
                    <Button
                        type="button"
                        customClass="border border-theme-border px-3 ms-auto block"
                    >
                        + Add Expense Coding
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;
