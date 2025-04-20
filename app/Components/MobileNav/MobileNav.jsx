"use client"

import React, { useEffect, useState } from "react";
import './MobileNav.scss'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
    const [open, setOpen] = useState(false)
    
    useEffect(() => {
        let handler = () => {
            setOpen(false)
        }
        document.addEventListener("mousedown", handler);
    });


    return (
        <AnimatePresence>
            <div className="mobileNav">
                <div className="wrapper">
                    <div className="navContainer">
                        <img className="logo" src="./assets/logo.png" alt="" />
                        <img className="ham-menu" onClick={() => setOpen(!open)} src="./assets/icons/hamburger-menu.png" alt="" />
                        {open && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                className="menu"
                            >
                                <div className="menu-items">
                                    <ul >
                                        <li className="nav-item">
                                            <Link  className="nav-link" href="/">
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
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default MobileNav;
