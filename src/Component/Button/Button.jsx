import React from 'react'

const Button = (props) => {
    const button = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "9",
        "0",
        "=",
        ".",
    ];
  return (
    <>
      <div className='grid grid-cols-3 gap-4 mx-4 '>
        {button.map((item)=>
          <button className='py-2 px-2 rounded-full bg-black text-white hover:scale-110 duration-500 font-semibold text-lg' onClick={()=> props.onClick(item)}>{item}</button>
        )}  
      </div>
    </>
  )
}

export default Button
