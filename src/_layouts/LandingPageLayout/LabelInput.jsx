import React from 'react'

function LabelInput({title, placeholder}) {
  return ( 
    <div className='flex flex-col gap-3'>
        <label>{title}</label>
        <input type="text" placeholder={placeholder} className='outline-none border border-gainsboro-500 placeholder:p-3 rounded-md p-1'/>
    </div>
  )
}

export default LabelInput