import React from 'react';
import linkedin from '../../images/LinkedIn_Logo.svg.png';
import logo from '../../images/ddlogo_white.png';
import '../../css/custom.css';

const Footer = () => (
  <>
    <div class="footer">
      <div class="footer-wrapper">
        <div class="contact">
          <h3>Get In Touch</h3>
          <p><a href="mailto:danidesalvio@gmail.com">danidesalvio@gmail.com</a></p>
          <p><a href="tel:3152711975">+1 (315) 271-1975</a></p>
        </div>

        <div class="dd-logo">
          <a href="#"><img src={logo} alt="" /></a>
        </div>

        <div class="social">
          <h3>Stay Connected</h3>
          <p class="social-flex"><a href="https://www.linkedin.com/in/dani-desalvio-378b3569/" target="_blank">Find me on <img src={linkedin}/></a></p>
          <p><a href="">View CV</a></p>
        </div>
      </div>
    </div>
  </>
)

export default Footer;