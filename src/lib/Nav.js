import { NavLink } from "react-router"
import LeftArrowShort from "../assets/icons/leftArrowShort"

const Nav = () =>{

const navTabs = ['vendor details', 'invoice details', 'comments']

const NavTabs = ({text}) => {
  return <NavLink to={'comments'} className="px-3 text-theme-content border-b-transparent duration-150 capitalize">
    {text}
  </NavLink>
}

return <div className="py-2">
  <div className="grid grid-cols-2 items-center">
    <p className="text-base font-medium flex items-center gap-x-1 capitalize text-theme-content">
      <button className="p-1 border-transparent border active:border-gray-300 rounded-lg duration-150">
    <LeftArrowShort height={24} width={24}/>
      </button>
    Create new invoice
    </p>
    <div className="flex items-center gap-x-2">
    {
      navTabs.map(nav => <NavTabs text={nav} />)
    }
    </div>
  </div>
</div>
}

export default Nav