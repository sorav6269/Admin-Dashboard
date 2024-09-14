import React, {useState,useEffect} from 'react'
import Tabledata from './Tabledata'
import axios from 'axios'
function Display() {
  const[data,setData] =  useState('')
  useEffect(()=>{ 
    try {
       axios.get('http://localhost:4000/api/Tender_get')
    .then((res)=>{
      setData(res.data)
    })
    
      //  console.log(data)
        
      } catch (error) {
        console.log(error)
      }
      
  },[])
console.log(data)
  return (
    <>
    {/* <!-- Content Wrapper. Contains page content --> */}
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Display Tenders Data</h1>
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
      <div className="container-fluid">
        <Tabledata/>
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
    {/* <!-- /.content --> */}
  </div>
  {/* <!-- /.content-wrapper --> */}
    </>
  )
}

export default Display