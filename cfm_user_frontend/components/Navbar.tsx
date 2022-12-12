
export default function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
    <div className="flex item-center justify-between">

      <div className="pt-2">
        <div className="tracking-widest text-xl">👨🏼‍💻CFM</div>
      </div>
     
      <div className="hidden space-x-6 align-middle justify-center text-center font-medium md:flex">
        <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Sign Up</button>
        <button  className="font-medium text-xs inline-block px-6 py-2.5 border-2  uppercase rounded hover:shadow-md border-slate-400 focus:shadow-lg focus:border-slate-700 focus:outline-none hover:border-slate-700 active:shadow-lg transition duration-150 ease-in-out">Login</button>
      </div>
      
     
    </div>
    
  </nav>
  )
}
