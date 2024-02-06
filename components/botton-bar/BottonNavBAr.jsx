
import Link from 'next/link';
import React, { useEffect } from 'react'



export default function BottonNavBAr() {

    useEffect(()=>{
        console.log("componente funcionando")
    },[])

    return (
        <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
               Angel
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/about"}>
                    About US
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href={"/#"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href={"/link1"}>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/link2"}>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/link3"}>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
  
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
}
