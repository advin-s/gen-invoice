

const Button = (props) =>{
  return <button {...props} className={`py-2 rounded-md hover:bg-opacity-90 duration-200 text-base active:scale-105 duration  ${props?.customClass}`}>{props?.children}</button>
}

export default Button