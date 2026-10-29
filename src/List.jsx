import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearList0, deleteList0 } from './component/actioncreators'

function List() {
    // const state = useSelector(state => state)
    const products = useSelector(state => state.products)
    const count = useSelector(state => state.count)
    const totalAmount = useSelector(state => state.totalAmount)
    const dispatch = useDispatch()
  return (
    <div>
        {
            count > 0 ?
            products.map((prod)=>{
                return(
                    <>
                    <div className='prodlist'>
                        <div className='listinfo'>
                            <p><b>Item : </b>{prod.name}</p>
                            <p><b>Price : </b>{prod.amount}</p>
                        </div>
                        <div className='listdel'>
                            <button onClick={()=>dispatch(deleteList0(prod))}>Delete</button>
                        </div>
                    
                    </div>
                    </>
                )
            })
            :
            <p className='noprod'>No Product</p>
        }
        <h3>total Amount : {totalAmount}</h3>
        <button className='clearbtn' onClick={()=>dispatch(clearList0())}>Clear list</button>
    </div>
  )
}

export default List``