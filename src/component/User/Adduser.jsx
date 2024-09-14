import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import { Link,Navigate} from 'react-router-dom'
function Adduser() {
const[name,setName] = useState('')
const [description,setDescription]= useState('')
const[startdate,setStartdate] = useState('')
const[endDate,setEnddate] = useState('')
const[BufferTime,setBufferTime] = useState('')
const [isAuth,setIsAuth] = useState(false)
const handleSumbit=async(e)=>{
  e.preventDefault()
// console.log(name,Description,startdate,endDate,BufferTime)
try {
  const {data} = await axios.post('http://localhost:4000/api/tenderInsert',{
    name,description,startdate,endDate,BufferTime
  })
  // console.log(data)
  toast.success(data.message)
  setName('')
  setDescription('')
  setStartdate('')
  setEnddate('')
  setBufferTime('')
setIsAuth(true)
} catch (error) {
  toast.error(error.response.data.message)
  console.log(error)
}
}

if(isAuth){
  return <Navigate to={'/Display'}/>
}

  return (
    <>
    {/* <!-- Content Wrapper. Contains page content --> */}
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Add Tenders</h1>
          </div>
          {/* <!-- /.col --> */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Starter Page</li>
            </ol>
          </div>
          {/* <!-- /.col --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
    {/* <!-- /.content-header --> */}

    {/* <!-- Main content --> */}
    <div className="content">
      <div className="container">
     <div className='row'>
    <div className='col-md-2'></div>
    <div className='col-md-8'>
    <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add Tender</h3>
              </div>
              {/* <!-- /.card-header --> */}
              {/* <!-- form start --> */}
              <form onSubmit={handleSumbit}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" onChange={(e)=>{
                      setName(e.target.value)
                    }} placeholder="Enter Name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control"  placeholder="Description" onChange={(e)=>{
                      setDescription(e.target.value)
                    }}/>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Start Date</label>
                    <input type="date" className="form-control" onChange={(e)=>{
                      setStartdate(e.target.value)
                    }} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">End date</label>
                    <input type="date" className="form-control" onChange={(e)=>{
                      setEnddate(e.target.value)
                    }}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Buffer Time</label>
                    <input type="Text" className="form-control" onChange={(e)=>{
                      setBufferTime(e.target.value)
                    }} />
                  </div>
                </div>
                {/* <!-- /.card-body --> */}

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
    </div>
     </div>
            {/* <!-- /.card --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
    {/* <!-- /.content --> */}
  </div>
  {/* <!-- /.content-wrapper --> */}
    </>
  )
}

export default Adduser