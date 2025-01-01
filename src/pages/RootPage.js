import { useEffect } from "react"
import { Outlet, useLoaderData, useNavigate, useSubmit } from "react-router"
import { getTokenDuration } from "../utils/auth"


const RootLayout = () =>{
  const navigate = useNavigate()
  const token = useLoaderData()
  
  const submit = useSubmit()

  useEffect(()=>{
    if(token){
      navigate('/invoice/vendor-details')
    }

    if(!token){
      navigate('/')
      return
    }
    const expiresIn = getTokenDuration()
    setTimeout(()=>{
      submit(null, {action:'/logout'})
    },expiresIn)

  },[token,navigate,submit])

  return <Outlet/>
}

export default RootLayout

