import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';



const Footer = () => {
  const [sub, setSub] = useState(false);

  return (
    <div className='app__footer'>
      <div className="app__footer-content">
        <div className="app__footer-subscribe">
          <h1 className='logo'>Ard-Uno</h1>
          <h4>
            Join our newsletter for free guides, checklists & 
            templates.
          </h4>
          { !sub &&
          <form 
            onSubmit={ (e) => {
              e.preventDefault();
              setSub(true);
           } } 
          >
            <input type="email" placeholder='Enter your email' required />
            <button type="submit">Subscribe</button>
          </form>
          }
          { sub &&
            <h1 className='did-Sub'><span>Thanks</span> For Subscribing.</h1>
          }
          <p>
              By subscribing you agree to our Privacy Policy and
              provide consent to receive updates from our company.
          </p>
        </div>
        <div className="app__footer-links">
            <div className="social-media">
              <h2 className="title">Social Media</h2>
              <div className="social">
                <a href="https://www.linkedin.com/in/choaib-elmadi">
                  <AiFillLinkedin className='icon' /> 
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/Choaib-ELMADI">
                  <AiFillGithub className='icon' /> 
                  <span>Github</span>
                </a>
                <a href="https://instagram.com/choaib_elmadi?igshid=YmMyMTA2M2Y">
                  <AiFillInstagram className='icon' /> 
                  <span>Instagram</span>
                </a>
                <a href="https://www.facebook.com/choaib.elmadi.94">
                  <AiFillFacebook className='icon' /> 
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            <div className="our-pages">
              <h2 className="title">Pages</h2>
              <div className="pages">
                <a href="/#">Home</a>
                <a href="/#Services">Services</a>
                <a href="/#Work">Work</a>
                <a href="/#About">About</a>
              </div>
            </div>
        </div>
      </div>
      <div className="app__footer-rights">
          <div className='line' />
          <div className="rights">
            <p>©2023 <a href='https://choaib-elmadi.netlify.app/' target='_blank' rel='noreferrer'>Choaib-ELMADI</a>. All right reserved.</p>
            <Link className='go' to="/privacy">Privacy Policy</Link>
            <Link className='go' to="/cookie">Cookie Policy</Link>
          </div>
      </div>
    </div>
  );
}

export default Footer;