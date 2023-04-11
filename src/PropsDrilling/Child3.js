import React from 'react'

const Child3 = ({fullName, asd}) => {
    console.log(fullName)
  return (
    <>
    <div>Child3 {fullName}</div>
    <h1>Hello {asd}</h1>
    </>
  )
}

export default Child3