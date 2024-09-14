import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Tabledata() {
  const [data, setData] = useState([])
  useEffect(() => {
    try {
      axios.get('http://localhost:4000/api/Tender_get').then((res) => (
        setData(res.data)
      ))
      console.log(data)

    } catch (error) {
      console.log(error)
    }

  }, [])
  console.log(data)
  return (
    <>
      <div className="card">
        <div className="card-header">
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#Adduser">
            AddUser
          </button>
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Buffer Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((user, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.description}</td>
                    <td>{user.startdate}</td>
                    <td>{user.endDate}</td>
                    <td>{user.BufferTime}</td>
                    <td>
                      <Link to={/Viewtender/ + user._id}><i className="fa-solid fa-eye"></i></Link>
                      <Link to={/Edittender/ + user._id}><i className="fa-solid fa-pen-to-square" style={{ marginRight: "10px", marginLeft: "10px" }}></i></Link>
                      <button onClick={() => deleteTender(user._id)}><i className="fa-solid fa-trash"></i></button>

                    </td>
                  </tr>
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Buffer Time</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* <!-- /.card-body --> */}
      </div>
      {/* <!-- /.card --> */}


      {/* AddUser Model */}
      <div className="modal fade" id="Adduser">
        <div className="modal-dialog">
          <div className="modal-content">
            <div class="modal-header">
              <h4 className="modal-title">Default Modal</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className='for-group'>
                  <label htmlFor="">Name</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='for-group'>
                  <label htmlFor="">Email</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='for-group'>
                  <label htmlFor="">Password</label>
                  <input type="text" className='form-control' />
                </div>
                <div className='for-group'>
                  <label htmlFor="">Confirm Password</label>
                  <input type="text" className='form-control' />
                </div>
                <button className='btn btn-info'>Sumbit</button>
              </form>
            </div>

          </div>
          {/* <!-- /.modal-content --> */}
        </div>
        {/* <!-- /.modal-dialog --> */}
      </div>
      {/* <!-- /.modal --> */}
    </>
  )
}

export default Tabledata