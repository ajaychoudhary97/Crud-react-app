import React, {useRef, useState}  from 'react'

const UseRef = () => {

    const [name, setName] = useState("Ajay");
    // calling UseRef Hook 
    const refCall = useRef();
    console.log(refCall);
    // we recieve an object with value it name has current so we can use current key by manipulate our dom 

    const Reset = () =>
    {
        // setName("");
        refCall.current.focus();
        refCall.current.style.color="red";
        refCall.current.value="Manish Choudhary"
        
    }

  return (
    <>

    <h1>UseRef Hooks</h1>

    <input type="text" ref={refCall} value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>Reset()}>Reset</button>
    
    
    </>
  )
}

export default UseRef