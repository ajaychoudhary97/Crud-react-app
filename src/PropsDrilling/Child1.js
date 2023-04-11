import React from 'react'
import Child2 from './Child2'

const Child1 = ({fullName}) => {
  return (
   <>
    <Child2 fullName={fullName}/>
   </>
  )
}

export default Child1