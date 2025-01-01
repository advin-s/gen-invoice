import { ErrorMessage, Field } from 'formik';

const FormField = (props) => {
    return (
        <div>  
            <label htmlFor={props.name} className='text-sm text-gray-500'>{props.name}</label>
            <Field
                type={props.type ? props.type : 'text'}
                name={props.name}
                className="border w-full p-1 rounded-lg outline-none px-2 text-base"
            />
            <ErrorMessage
                name={props.name}
                component={props.component}
                className="text-red-500 text-xs"
            />
        </div>
    );
};

export default FormField;
