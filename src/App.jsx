import React, { useEffect } from 'react'
import action from './Redux/action'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state.products)
  console.log(products)

  useEffect(()=>{
    dispatch(action())
  },[dispatch])
  return (
    <div className='mt-20 flex flex-wrap items-center justify-center ' >
      {
        products.map((items)=>
        <div key={items.id} className='w-50 h-100 p-3 m-2 shadow shadow-amber-500 bg-indigo-50 rounded-2xl text-sm '>
            <img className='size-45 rounded border' src={items.img} alt="" />
            <div className='text-xl  font-bold'>{items.name}</div>
            <div>{items.category}</div>
            <div >{items.desc}</div>
            <div>{items.price}</div>
            <div>{items.rating}</div>
            <div>{items.review}</div>
        </div> )
      }
     
    </div>
  )
}

export default App
