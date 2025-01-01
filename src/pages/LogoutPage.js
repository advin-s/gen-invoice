import { redirect } from "react-router"

export const action = () =>{
  localStorage.removeItem('token')
  localStorage.removeItem('expiresIn')

  return redirect('/')
}