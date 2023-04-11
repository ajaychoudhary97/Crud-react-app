import React, { useEffect, useState } from 'react'

const ReactApi = () => {
    // const [data, setData] = useState([]);

    const [user, setUser] = useState([]);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();



    const fetchData = async () => {
      return fetch("https://jsonplaceholder.typicode.com/users").then((res)=>
      {
            res.json().then((data)=>{
                setUser(data);
                console.log(data);

            })
      })
            
    }
  
    useEffect(() => {
      fetchData();
    },[])


    const addData = (e) =>
    {
        e.preventDefault();
        console.log(name,email,mobile,address)
        setName("");
        setEmail("");
        setMobile("");
        setAddress("");

    }



  return (
    <>
        <h1>API Data</h1>

        <table border="2" align="center">
            <tr>
                <th className='input-filed'>ID</th>
                <th className='input-filed'>Name</th>
                <th className='input-filed'>UserName</th>
                <th className='input-filed'>Email</th>
                <th className='input-filed'>City</th>
            </tr>

                {
                    user.map((item)=>
                    {
                        return(
                            <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>

                                </tr>
                            
                            
                            </>
                        )

                    })

                }



        </table>
                    <form onSubmit={addData}>
                    <h1>API Form Data</h1>
                    <table border="2" align="center">
                        <tr>
                            <th>Name:</th>
                            <td className='input-filed'><input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/></td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td className='input-filed'><input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/></td>
                        </tr>
                        <tr>
                            <th>Mobile:</th>
                            <td className='input-filed'><input type='number' value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Enter Mobile'/></td>
                        </tr>

                        <tr>
                            <th>Address:</th>
                            <td className='input-filed'><input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address'/></td>
                        </tr>

                        <tr>
                            
                            <td className='input-filed' colSpan="2"><button type='submit' >Submit</button></td>
                        </tr>

                    
                    </table>
                    </form>
                  
                    <br/><br/><br/><br/><br/>
       

    
    </>

  )
}

export default ReactApi