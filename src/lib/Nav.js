import LeftArrowShort from "../assets/icons/leftArrowShort"

const Nav = () =>{



return <div className="py-2">
  <div className="grid grid-cols-2 items-center">
    <p className="text-base font-medium flex items-center gap-x-1 capitalize">
      <button className="p-1 border-transparent border active:border-gray-300 rounded-lg duration-150">
    <LeftArrowShort height={24} width={24}/>
      </button>
    Create new invoice
    </p>
    <div>
      
    </div>
  </div>
</div>
}

export default Nav