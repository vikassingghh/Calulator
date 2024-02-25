import React from 'react'
import Button from '../Button/Button'


const Input = (props) => {
    const buttonClick = (item)=>{
      if(item==="C"){
        props.newvalue("");
      }else if(item==="="){
        const result = eval(props.display);
        props.newvalue(result);
      }else{
        const newNumber = props.display + item;
        props.newvalue(newNumber);
      }
    }
  return (
    <>
      <center className="mt-5 ">
        <div className='border-black border-2 lg:w-1/4 w-1/2 h-full rounded'>
          <div className='py-2 px-2 '>
            <input className='border-black border-2 w-full h-12 shadow-md rounded font-semibold text-xl' type="text" value={props.display} readOnly/>
          </div>
          <div className='py-4'>
            <Button onClick={buttonClick}/>
          </div>
        </div>
      </center>
    </>
  )
}

export default Input
