import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footerBackground">
      <div className="Footer">


        <div className="subFooter">
          <div id="logo">
            <img src="./assets/img/logo-boutique.png" />
          </div>

          <div className='footer-shop'>
            <ul>
              <li><a href="#">SHOP</a></li>
              <li><a href="#">Men's</a></li>
              <li><a href="#">Women's</a></li>
            </ul>
          </div>

          <div className='footer-help'>
            <ul>
              <li><a href="#">HELP</a></li>
              <li><a href="#">Customer Service</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Cookie Notice</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="section-right">
            <div className="footer-social">
              <ul>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://www.pinterest.com/" target="_blank"><i className="fa-brands fa-pinterest-p"></i></a></li>
                <li><a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
              </ul>
            </div>

            <div className="footer-copyright">
              <p>2023 Cookbook. All rights reserved.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
};


export default Footer;
