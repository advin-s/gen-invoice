import { useEffect, useState } from 'react';
import NoDraftIcon from '../assets/icons/NoDraftIcon';
import Button from '../lib/Button';
import { NavLink } from 'react-router';

const ViewInvoices = () => {
    const [draft, setDraft] = useState([]);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('savedForms')) || [];
        const draftedItems =
            JSON.parse(localStorage.getItem('draftedForms')) || [];
        setSaved(savedItems);
        setDraft(draftedItems);

        console.log(saved, draft);
    }, []);

    return (
        <>
            <div className="container mx-auto">
              <div className='pt-2'>
                <NavLink to={'/dashboard/invoice/vendor-details'}>
                <Button customClass="border border-theme-border px-4 block ms-auto">
                 + Create form
                </Button>
                </NavLink>
              </div>
                <div className="grid lg:grid-cols-2 py-2">
                    <div className="border-theme-border border-e h-[calc(100vh-50px-1rem)]">
                        <p className="text-lg font-bold text-theme-content">
                            Saved Forms
                        </p>

                        {saved.length > 0 ? (
                            <p>Saved items found</p>
                        ) : (
                            <div className="h-full grid place-items-center">
                                <div>
                                    <NoDraftIcon height={45} width={45} customClass='text-theme mx-auto mb-2'/>
                                    <p>No saved forms found</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="ps-3">
                        <p className="text-lg font-bold text-theme-content">
                            Drafted Forms
                        </p>

                        {draft.length > 0 ? (
                            <p>Saved items found</p>
                        ) : (
                            <div className="h-full grid place-items-center">
                                <div>
                                    <NoDraftIcon height={45} width={45} customClass='text-theme mx-auto mb-2'/>
                                    <p>No draft forms found</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewInvoices;
