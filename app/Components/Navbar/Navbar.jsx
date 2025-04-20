import Link from "next/link";
import  {React } from "react";
import './Navbar.scss'
import MobileNav from "../MobileNav/MobileNav";


const Navbar = () => {
    
    return (
    <>
          <nav className="nav">
            <div className="wrapper">
                <div className="container">
                    <img className="logo" src="./assets/logo.png" alt="" />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects">
                                PROJECTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/our-clients">
                                OUR CLIENTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/careers">
                                CAREERS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">
                                PROFILE
                            </Link>
                        </li>
                    </ul>
                    <button className="contact">Get a Quote</button>
                    
                </div>
            </div>
          </nav>
          <MobileNav/>
    </>
  );
};

export default Navbar;