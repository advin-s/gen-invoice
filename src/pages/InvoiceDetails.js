import InvoiceIconTwo from "../assets/icons/InvoiceIconTwo"
import Card from "../lib/Card"

const InvoiceDetails = () =>{

  const invoiceDetails = {
    heading:'invoice details',
    icon:<InvoiceIconTwo/>
  }


  return <Card {...invoiceDetails}/>
}

export default InvoiceDetails