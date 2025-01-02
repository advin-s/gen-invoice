import { useEffect } from "react"
import { Outlet, useLoaderData, useNavigate, useSubmit } from "react-router"
import { getTokenDuration } from "../utils/auth"
import Header from "../lib/Header"


const RootLayout = () =>{
  const navigate = useNavigate()
  const token = useLoaderData()
  
  const submit = useSubmit()

  useEffect(()=>{
    if(token){
      navigate('/dashboard/invoice/vendor-details')
    }

    if(!token){
      navigate('/')
      return
    }
    const expiresIn = getTokenDuration()

    setTimeout(()=>{
      submit(null, {action:'/logout'})
      navigate('/',{replace:true})
    },expiresIn)

  },[token,navigate,submit])

  return <>
  <Header />
  <Outlet/>
  </>
}

export default RootLayout

