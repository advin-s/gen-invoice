import { Field } from 'formik';
import CommentsIcon from '../assets/icons/CommentsIcon';
import Card from '../lib/Card';
import Heading from '../lib/Heading';
import SendIcon from '../assets/icons/SendIcon';

const CommentsPage = () => {
    const commentsDetails = {
        heading: 'comments',
        icon: <CommentsIcon />
    };

    return (
        <>
            <Heading {...commentsDetails} />
            <div className='rounded-lg border-theme-border border flex items-center mt-3'>
            <Field
                type={'text'}
                name={'comments'}
                placeholder="Add a comment and use @Name to tag someone"
                className=" w-full py-2 outline-none px-2 text-base placeholder-theme-placeholder rounded-lg"
            />
              <button className='outline-none active:scale-105 p-3 duration-150' type='button'>
              <SendIcon/>
              </button>
            </div>
        </>
    );
};

export default CommentsPage;
