const Heading = ({heading,icon}) =>{
  return <div className="flex items-center gap-x-3">
    <div className="h-14 w-14 rounded-full bg-theme-secondary grid place-items-center">
      {icon}
    </div>
    <p className="mb-0 text-2xl font-medium capitalize">{heading}</p>
  </div>
}

export default Heading