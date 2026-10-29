import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoList0 } from './component/actioncreators'

function App() {
  let dispatch = useDispatch()
  const [text, settext] = useState("")
  const [amt, setAmt] = useState("")

  function expbutton(val){
    settext(val)
    if(val == Number(val)){
      settext("")
      alert("Enter Words")
    }
    
  }
  function addexp(val){
    setAmt(val)
    if(val != Number(val)){
      setAmt("")
      alert("Enter Number")
      
    }
  }
  function addprod(){
    if(text.trim()==""){
      alert("Missing item name")
      return
    }
    if(amt.trim()==""){
      alert("Missing amount")
      return
    }
    if(Number(amt) <= 0){
      alert("Amount must be greater than 0")
      return
    }
    dispatch(addtoList0({
      name: text,
      amount: Number(amt)
    }))
    settext("")
    setAmt("")
    
  }
  return (
    <div className='labelexp'>
      <div className='inputexp'>
        <div className='expinput'>
          <label htmlFor="expname">Expense name :</label>
          <input type="text" id='expname' name='expname' placeholder='Expense'
          value={text} onChange={(e)=>{expbutton(e.target.value)}}/>
        </div>
        <div className='amountinput'>
          <label htmlFor="Amountname">Amount :</label>
          <input type="text" id='Amountname' name='Amountname' placeholder='Amount..'
          value={amt} onChange={(e)=>{addexp(e.target.value)}}/>
        </div>
      </div>
      <button onClick={()=>{addprod()}}>Add to List</button>
    </div>
  )
}

export default App