const SavedForm = (props) => {
    
    return (
        <>
            <div className="p-2 border rounded-lg grid grid-cols-2">

               {

                Object.entries(props).map(([key,value], index)=>{
                  const label = key.split('_').join(' ')

                  return (
                    <div key={index}>
                      <label htmlFor="" className="text-theme-content-secondary text-sm">{label}</label>
                      <p className="text-theme-content">{value}</p>
                    </div>
                  )
                })
               }
            </div>
        </>
    );
};

export default SavedForm;
