import { NavLink } from "react-router"
import Button from "../lib/Button"

const NotFoundComponent = () =>{
  return (
    <div className="h-dvh bg-theme-secondary grid place-items-center">
     <div className="gap-y-3 flex flex-col">
     <p className="text-7xl font-bold text-theme text-center">404</p>
     <p>Oops! The page you're looking for doesn't exist</p>
     <NavLink to={'/dashboard'}>
     <Button customClass={'px-3 bg-theme text-white mx-auto block'}>
      Go to Dashboard
     </Button>
     </NavLink>
     </div>
    </div>
  )
}

export default NotFoundComponent