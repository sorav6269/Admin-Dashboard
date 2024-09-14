import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
  <>
   {/* <!-- Main Sidebar Container --> */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Brand Logo --> */}
    <a href="index3.html" className="brand-link">
      <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: 0.8}}/>
      <span className="brand-text font-weight-light">Admin</span>
    </a>

    {/* <!-- Sidebar --> */}
    <div className="sidebar">
      {/* <!-- Sidebar user panel (optional) --> */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Saurav</a>
        </div>
      </div>

      {/* <!-- SidebarSearch Form --> */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          <li className="nav-item menu-open">
            <Link to="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
              User
                <i className="right fas fa-angle-left"></i>
              </p>
            </Link>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                <Link to="/Display" className="nav-link active">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Display</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Adduser" className="nav-link active">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Add User</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/Logout" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Logout
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      {/* <!-- /.sidebar-menu --> */}
    </div>
    {/* <!-- /.sidebar --> */}
  </aside>
  </>
  )
}

export default Sidebar