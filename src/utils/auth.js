import { redirect } from "react-router";

export const handleToken = (res) => {
    const token = res.accessToken;
    const expiresIn = new Date();
    expiresIn.setMinutes(expiresIn.getMinutes() + 2);
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn);
};

export const getTokenDuration = () => {
    const storedExpiresIn = localStorage.getItem('expiresIn');
    const expirationDate = new Date(storedExpiresIn);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    return duration;
};

export const getToken = () =>{
  const token = localStorage.getItem('token')
  const expiresIn = localStorage.getItem('expiresIn')

  if(expiresIn < 0){
    return null
  }

  return token 
}

export const checkAuth = () =>{
  const token = getToken()

  if(!token){
    return redirect('/')
  }
}
