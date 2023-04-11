import React, { createContext } from 'react'
import Contexts from '../ContextApi/Contexts';
import Child1 from './Child1';
import Child3 from './Child3';

const ParentComp = () => {


    const myContext = createContext();
    const fullName = "Rajesh Kumar Choudhary";
    const studentName = "Manish Choudhary"

  


  return (
   <>
    {/* <Child1 fullName={fullName} />
    <Child3 asd={studentName}/>
    <Contexts asd={studentName} /> */}
    <myContext.Provider value={studentName}>
      <Child1 />
    </myContext.Provider>

   
   </>



  )
}

export default ParentComp;
export {Contexts};