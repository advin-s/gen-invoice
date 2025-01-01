import VendorIcon from "../assets/icons/VendorIcon"
import Card from "../lib/Card"

const VendorDetails = () =>{
  const cardDetails = {
    icon:<VendorIcon/>,
    heading:'vendor details'
  }
  return <Card {...cardDetails}/>
}

export default VendorDetails