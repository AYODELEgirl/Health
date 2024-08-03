import React from 'react'
// import logo1 from  "../../../assets/images/logo1.png"
import logo1 from "../../../assets/images/logo1.png"
import SigninNavbar from './SigninNavbar'

export default function Signin({modal, setModal, children}) {

  return (
    <div className={`bg-[#0b0b0b9e] fixed top-0 left-0 w-full h-screen z-[10000] grid place-items-center transition-all transform ${modal ? 'translate-y-0 pointer-events-auto':'-translate-y-full pointer-events-none'}`} onClick={() => {
      setModal(false)
    }} >
      <div onClick={(e) => {
      e.stopPropagation()
    }}  className="bg-white w-[50%] rounded-lg">

      {/* <SigninNavbar /> */}
      <div>
      <div className='items-center p-16'>
          {children}
        </div>
      </div>
    </div>
       </div>
  )
   
    
  
}
