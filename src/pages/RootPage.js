import { useEffect } from "react"
import { Outlet, useLoaderData, useNavigate, useSubmit } from "react-router"
import { getTokenDuration } from "../utils/auth"


const RootLayout = () =>{
  const navigate = useNavigate()
  const token = useLoaderData()
  const expiresIn = getTokenDuration()
  const submit = useSubmit()

  useEffect(()=>{
    if(token){
      navigate('/invoice')
    }

    setTimeout(()=>{
      submit(null, {action:'/logout'})
    },expiresIn)

  },[token,navigate,expiresIn,submit])

  return <Outlet/>
}

export default RootLayout

