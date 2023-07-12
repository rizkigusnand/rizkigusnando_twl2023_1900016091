//import Link from react router dom
import { Link } from "react-router-dom";

//import routes
import Routes from './routes';

export default function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
          <Link to="/" className="btn btn-primary">HOME</Link>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="container">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link active" aria-current="page">POSTS</Link>
                </li>
                </div>
                <div className="container">
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active" aria-current="page">CONTACT</Link>
                </li>
                </div>
                
                
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
              <li className="nav-item">
                  <Link to="/logout" className="btn btn-primary">KELUAR</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />

    </>
  )
  
}