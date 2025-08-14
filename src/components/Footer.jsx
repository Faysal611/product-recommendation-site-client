import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer text-white bg-[#161616] sm:footer-horizontal py-22 pl-10 mt-12">
            <aside>
                <img src="logo.png" className='w-50 max-sm:w-30' />
                <p className='relative -top-5 font-semibold'>
                    Product Recommendation Hub

                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link to={"/queries"} className="link link-hover">Queries</Link>
                <Link to={"/recommendationsForMe"} className="link link-hover">For me</Link>
                <Link to={"/myQueries"} className="link link-hover">My queries</Link>
                <Link to={"/contact"} className="link link-hover">Advertisement</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Socials</h6>
                <a  target="_blank" href='https://www.linkedin.com/in/md-faysal-hasan/' className="link link-hover">LinkedIn</a>
                <a  target="_blank" href='https://www.facebook.com/faysal.hasan.14661' className="link link-hover">Facebook</a>
                <a  target="_blank" href='https://www.youtube.com/@faysalhasan9769' className="link link-hover">Youtube</a>
                <a  target="_blank" href='https://x.com/FaysalH044' className="link link-hover">Twitter</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to={"/contact"} className="link link-hover">Terms of use</Link>
                <Link to={"/contact"} className="link link-hover">Privacy policy</Link>
                <Link to={"/contact"} className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;