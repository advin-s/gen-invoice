import UploadIcon from '../../assets/icons/UploadIcon'
import Button from '../../lib/Button'
import classes from './uploadInvoice.module.css'
import fileSearch from '../../assets/animation.gif'

const UploadInvoice = () =>{


return <div className={`rounded-lg grid place-items-center ${classes['bg-upload']}`}>
  <div>
  <div className='text-center text-theme-content grid gap-y-2'>
    <p className='text-lg font-bold'>
    Upload Your Invoice
    </p>
    <p className='text-base'>
    To auto-populate fields and save time
    </p>
  </div>

 <img src={fileSearch} alt='file search animation' className='h-56 mx-auto'/>

  <div className='flex justify-center flex-col items-center gap-y-2'>
    <Button customClass="border border-theme-border px-3 capitalize inline-flex items-center gap-x-2 max-w-40">
      Upload file
      <UploadIcon/>
    </Button>
    <div className='text-sm flex gap-1 justify-center'>
      <label className='text-theme font-medium cursor-pointer' for="invoice">Click to upload</label>
      <input className='hidden' type="file" id="invoice" name="invoice" accept="pdf" />
      <span>or Drag and drop</span>
    </div>
  </div>
  </div>
</div>


}

export default UploadInvoice