import React from 'react';
import './style.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/#">about us</a></li>
  	 				<li><a href="/#">our services</a></li>
  	 				<li><a href="/#">privacy policy</a></li>
  	 				<li><a href="/#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/#">FAQ</a></li>
  	 				<li><a href="/#">shipping</a></li>
  	 				<li><a href="/#">our address</a></li>
  	 				<li><a href="/#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online service</h4>
  	 			<ul>
  	 				<li><a href="/#">career</a></li>
  	 				<li><a href="/#">vaccination</a></li>
  	 				<li><a href="/#">contact</a></li>
  	 				<li><a href="/#">reservation</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="/#"><FaFacebookF/></a>
  	 				<a href="/#"><FaInstagram/></a>
  	 				<a href="/#"><FaLinkedin/></a>
  	 				<a href="/#"><FaTwitter/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	  
  </footer>
  )
}

export default Footer
