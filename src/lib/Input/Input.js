import { ErrorMessage, Field } from 'formik';
import classes from './input.module.css';
import CalendarIcon from '../../assets/icons/CalendarIcon';

const Input = (props) => {
    console.log(props.name);
    const renderFields = (props) => {
      console.log(props);
        switch (props.type) {
            case 'select':
                return (
                    <div className="relative">
                        <Field
                            name={props?.name}
                            as="select"
                            className={`w-full bg-white p-2 border-theme-border border outline-none rounded-lg px-3 ${classes['override-select']}`}
                        >
                          <option selected value={''} disabled>{props?.placeholder}</option>
                            {props.selectoptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
    
                            ))}
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
                );
            case 'number':
                return (
                    <div className=" border-theme-border border outline-none rounded-lg flex">
                        <div className="bg-theme-tertiary text-theme-content px-3 rounded-s-lg flex items-center">
                            $
                        </div>
                        <Field
                            type={props.type ? props.type : 'text'}
                            name={props?.name}
                            placeholder="0.00"
                            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full outline-none text-base p-2 placeholder-theme-placeholder"
                        />
                        <p className="text-base uppercase text-theme-placeholder pe-2 flex items-center">
                            USD
                        </p>
                    </div>
                );
            case 'date':
                return (
                    <div className=" border-theme-border border outline-none rounded-lg flex relative">
                        <div className=" text-theme-content px-3 rounded-s-lg flex items-center">
                            <CalendarIcon />
                        </div>
                        <Field
                            type={props.type ? props.type : 'text'}
                            name={props?.name}
                            placeholder="0.00"
                            className={` w-full outline-none text-base pe-2 placeholder-theme-placeholder py-2 rounded-e-xl`}
                        />
                    </div>
                );
            default:
                return (
                    <Field
                        type={props.type ? props.type : 'text'}
                        name={props?.name}
                        placeholder={props?.placeholder}
                        className="border-theme-border border w-full py-2 rounded-lg outline-none px-2 text-base"
                    />
                );
        }
    };

    console.log(renderFields(props));

    return (
        <>
            <div>
                <label
                    htmlFor={props?.name}
                    className="text-sm text-theme-content-secondary capitalize"
                >
                    {props?.label}
                    {props.required && (
                        <span className="text-red-500 ms-1">*</span>
                    )}
                </label>
                {renderFields(props)}
                <div>

                <ErrorMessage
                    name={props?.name}
                    component={props.component}
                    className="text-red-500 text-xs"
                    />
                    </div>
            </div>
        </>
    );
};

export default Input;
