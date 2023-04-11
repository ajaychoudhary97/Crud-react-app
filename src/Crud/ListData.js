import React from 'react'

const ListData = ({studentdata, editHandlers, deleteHandlers}) => {
    // console.log(studentdata);
       


  return (
    <>
        <h1>Student List</h1>
        <table border="2" align='center'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Edit</th>
                <th>Delete</th>            
            
            </tr>

                {
                    studentdata.map((item, index)=>
                    {
                        return (
                            <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                                <td><a href="#"onClick={()=>editHandlers(index)}>Edit</a></td>
                                <td><a href="#"onClick={()=>deleteHandlers(item)}>Delete</a></td>
                            </tr>
                            
                            </>
                        )
                    })   

                }


        </table>
    
    
    </>
        

  )
}

export default ListData