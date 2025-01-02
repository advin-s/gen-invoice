import { NavLink } from "react-router"
import LeftArrowShort from "../assets/icons/leftArrowShort"

const Nav = () =>{

const navTabs = ['vendor details', 'invoice details', 'comments']

const NavTabs = ({text}) => {
  const createRoute = (text) =>{
    if(text.length === 1){
      return text
    }
    else{
      return text.split(' ').join('-')
    }
  }
  console.log(createRoute(text));
  return <NavLink to={createRoute(text)} className={({isActive})=> isActive ? 'border-b-theme border-b-2 text-theme px-3 duration-150 capitalize':'text-theme-content border-b-transparent  border-b-2 px-3  duration-150 capitalize'}>
    {text}
  </NavLink>
}

return <div className="py-2">
  <div className="grid grid-cols-2 items-center">
    <p className="text-base font-medium flex items-center gap-x-1 capitalize text-theme-content">
      <NavLink to={'/dashboard/view'} className="p-1 border-transparent border active:border-gray-300 rounded-lg duration-150">
    <LeftArrowShort height={24} width={24}/>
      </NavLink>
    Create new invoice
    </p>
    <div className="flex items-center gap-x-2">
    {
      navTabs.map((nav,index) => <NavTabs key={index} text={nav} />)
    }
    </div>
  </div>
</div>
}

export default Nav