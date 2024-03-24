import React from 'react';
import { SiGooglesearchconsole } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-none text-black w-full my-16'>
            <hr></hr>
            <footer className="footer p-10 text-base-content">
                <aside className='text-left'>
                    <div className="logo p-0 pb-8 h-0">
                        <NavLink to={"/"} className="text-xl flex items-center gap-2 font-extrabold manrope capitalize cursor-pointer text-gray hover:text-blue-900">career builder <SiGooglesearchconsole /></NavLink>
                    </div>
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr></hr>
        </div>
    );
};

export default Footer;