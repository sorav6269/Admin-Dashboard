import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Viewtender() {
    const [data, setData] = useState([])
    const {id} = useParams()
    // console.log(id) 
      useEffect(() => {
        try {
          axios.get(`http://localhost:4000/api/Tender_view/${id}`).then((res) => (
            setData(res.data)
          ))
          console.log(data)

        } catch (error) {
          console.log(error)
        }

      }, [])
      console.log(data)
    return(
        <>
        
        
        <div className="card">
        
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Buffer Time</th>
          
              </tr>
            </thead>
            <tbody>
              
                <tr>
                    <td>{data.name}</td>
                    <td>{data.description}</td>
                    <td>{data.startdate}</td>
                    <td>{data.endDate}</td>
                    <td>{data.BufferTime}</td>
                   
                  </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Buffer Time</th>
               
              </tr>
            </tfoot>
          </table>
        </div>
        {/* <!-- /.card-body --> */}
      </div>

        </>
    )

}

export default Viewtender