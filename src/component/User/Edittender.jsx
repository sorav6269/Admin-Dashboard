import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
function Edittender() {

   const [name, setName] = useState('')
   const [description,setDescription]= useState('')
   const[startdate,setStartdate] = useState('')
   const[endDate,setEnddate] = useState('')
   const[BufferTime,setBufferTime] = useState('')
    const {id} = useParams()
    // console.log(id) 
      useEffect(() => {
        try {
          axios.get(`http://localhost:4000/api/Tender_view/${id}`).then((res) => {
        const tenderdata = res.data
        console.log(tenderdata)
          setName(tenderdata.name)
          setDescription(tenderdata.description)
          setStartdate(tenderdata.startdate)
          setEnddate(tenderdata.endDate)
          setBufferTime(tenderdata.BufferTime)
       
        })
        } catch (error) {
          console.log(error)
        }

      },[])
      //  console.log(name,description,startdate,endDate,BufferTime)

      const updateForm = async(e)=>{
        e.preventDefault(); 
        // console.log(name,description,startdate,endDate,BufferTime)
        try {
          const response = await axios.post(`http://localhost:4000/api/Tender_update/${id}`,FormData)
          if (response.status === 200) {
            toast.success(response.data.message,{position:"top-right"})
            //  setFormData{intialFormData}; // Reset the form field
            Navigate('/')
          }
          else{
            console.error('Failed to insert data')
          }
        } catch (error) {
          console.log('Error inserting data:',error)
        }
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
                <h1 className="m-0">Update Tenders</h1>
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
                    <h3 className="card-title">Update Tender</h3>
                  </div>
                  {/* <!-- /.card-header --> */}
                  {/* <!-- form start --> */}
                  <form onSubmit={updateForm}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" 
                        value={name} placeholder="Enter Name"  onChange={(e)=>{
                          setName(e.target.value)
                        }}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" className="form-control"  placeholder="Description"  onChange={(e)=>{
                      setDescription(e.target.value)
                    }} value={description}/>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Start Date</label>
                        <input type="date" className="form-control" value={startdate}  onChange={(e)=>{
                      setStartdate(e.target.value)
                    }} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">End date</label>
                        <input type="date" className="form-control"  onChange={(e)=>{
                      setEnddate(e.target.value)
                    }} value={endDate}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Buffer Time</label>
                        <input type="Text" className="form-control" value={BufferTime}  onChange={(e)=>{
                      setBufferTime(e.target.value)
                    }} />
                      </div>
                    </div>
                    {/* <!-- /.card-body --> */}
    
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Update</button>
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

export default Edittender