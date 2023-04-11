import React, {useState} from 'react'
import ListData from './ListData'

const AddData = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [edit, setEdit] = useState(false);
    const [activeuser, setActiveUser] = useState(null);
    const [students, setStudents] = useState([]);

    const addData = (e) =>
    {
        e.preventDefault();
        // console.log(name,email,mobile,address);
        
        let student = {
            name,email,mobile,address
        }

        if(edit)
        {
            let copy = students;
            Object.assign(copy[activeuser], student)
            setStudents([...copy])
            setEdit(false);
            setActiveUser(null);

        }
        else
        {
            setStudents([...students, student]);
            
        }

            setName('');
            setEmail('');
            setMobile('');
            setAddress('');


        
        // console.log(students);




        

    }

    const editHandler = (index) =>
    {
        console.log(index);
        const student =  students[index];
        setName(student.name);
        setEmail(student.email);
        setMobile(student.mobile);
        setAddress(student.address);
        setEdit(true);
        setActiveUser(index);


    }

    const deleteHandler = (index) =>
    {
        let delteUser = students.filter(item => item !==index)
        setStudents([...delteUser])
        setName("");
        setEmail("");
        setMobile("");
        setAddress("");
        setEdit(false)

    }



  return (
                <>
                    <h1>Student Form </h1>
                        <form onSubmit={addData}>
                        <table align='center' border="2">
                            <tr>
                                <th className='input-filed'>Name</th>
                                <td><input type="text" value={name} placeholder='Enter Name' onChange={(e)=> setName(e.target.value)} className='input-filed'/></td>
                            </tr>
                            <tr>
                                <th className='input-filed'>Email</th>
                                <td><input type="email" value={email} placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} className='input-filed'/></td>
                            </tr>
                            <tr>
                                <th className='input-filed'>Mobile</th>
                                <td><input type="number" value={mobile} placeholder='Enter Mobile' onChange={(e)=> setMobile(e.target.value)} className='input-filed'/></td>
                            </tr>
                            <tr>
                                <th className='input-filed'>Address</th>
                                <td><input type="text" value={address} placeholder='Enter Address' onChange={(e)=> setAddress(e.target.value)} className='input-filed'/></td>
                            </tr>
                            <tr>
                                    {
                                        edit? <td colSpan="2"><button type='submit'>Update</button></td>: 
                                        <td colSpan="2"><button type='submit'>Submit</button></td>
                                    }
                                
                            </tr>

                        </table>
                        </form>
                            <br/><br/>

                            <div>
                                <ListData studentdata={students} editHandlers={editHandler} deleteHandlers={deleteHandler}/>
                            </div>
                        


                
                </>
  )
}

export default AddData