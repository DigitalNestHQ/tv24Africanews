import React from "react";
import twitterIcon from "../../../assets/images/Contact-form/twitter.png";
import facebookIcon from "../../../assets/images/Contact-form/facebook.png";
import instaIcon from '../../../assets/images/Contact-form/insta.png';
import linkedinIcon from '../../../assets/images/Contact-form/linkedin.png';
// import logoIcon from "../../../assets/images/Contact-form/logo.png";
import logo from '../../../assets/images/logo.png';
import { pageurl } from '../../../utils/constants';
import "./footer.css";
const Footer = () => {
  return (
    <div>
      {/* footer for desktop */}
      <footer className="footer mt-5 d-none d-md-block">
        <div className="container footerContainer ">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="logo">
                  <a className="logo" href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className=" ">
                  <h5 className="font-weight-bold">Quick links</h5>
                  <div className="d-flex justify-content-end">
                    <ul className="nav nav-pills flex-column mr-5   mt-1">
                      <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.HOMEPAGE}>
                          Home
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.ABOUT}>
                          About us
                        </a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.COURSES}>
                          Courses
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.CURRICULUM}>
                          Curriculum
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.MENTORS}>
                          Mentors
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.PREVIOUSTECHIES}>
                          Previous Techies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.FAQ}>
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.REQUESTCERTIFICATE}>
                          Request Certificates
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.TERMSCONDITIONS}>
                          Terms and Conditions
                        </a>
                      </li>
                    </ul>
                    {/* <ul className="nav nav-pills flex-column   mt-3">
                      
                     
                      <li className="nav-item">
                        <a className="nav-link p-0 " href={pageurl.PASTPROJECT}>
                          Past Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.FORUM}>
                          Forum
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.PRIVACYPOLICY}>
                          Privacy Policy
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href={pageurl.TERMSCONDITIONS}>
                          Terms and Conditions
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div>
                  <h5 className="font-weight-bold">Contact us</h5>
                  <p className=" mt-3">
                    <a href="mailto:Hello@start.ng" className="text-dark">
                      training@zuri.team
                    </a>
                  </p>
                </div>
                <div>
                  <h5 className="font-weight-bold">Office Address</h5>
                  <p className=" mt-3">
                    92, Wolverine Avenue, Ikeja.
                    <br />
                    Lagos State, Nigeria
                  </p>
                </div>
                <div>
                  <h5 className="font-weight-bold">Follow us</h5>
                  <div className="mt-3">
                    <a
                      href="/"
                      className="text-decoration-none inline-block mr-3"
                    >
                      <img src={facebookIcon} alt="facebook-icon" />
                    </a>
                    <a href="/" className="text-decoration-none inline-block mr-3 ">
                      <img src={twitterIcon} alt="social-icon" />

                    </a>
                    <a href="/" className="text-decoration-none inline-block mr-3 ">
                      <img src={instaIcon} alt="social-icon" />
                    </a>
                    <a href="/" className="text-decoration-none inline-block mr-3">
                      <img src={linkedinIcon} alt="social-icon" />

                    </a>

                  </div>
                </div>
              </div>

              <div className="section-bottom">
                <div className="col-12 py-2 text-center">
                  <p className="footer-copyright">© 2020 Zuri Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer for mobile */}
      <footer className="d-md-none d-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row mobile-footer">
                <div className="col-6">
                  <h5 className="font-weight-bold">Quick links</h5>
                  <ul className="nav nav-pills flex-column mr-5   mt-3">
                    <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.HOMEPAGE}>
                        Home
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.ABOUT}>
                        About us
                      </a>
                    </li> */}
                    {/* <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.COURSES}>
                        Courses
                      </a>
                    </li> */}
                    <li className="nav-item mt-1">
                      <a className="nav-link p-0" href={pageurl.CURRICULUM}>
                        Curriculum
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link p-0" href={pageurl.MENTORS}>
                        Mentors
                      </a>
                    </li> */}

                    <li className="nav-item mt-1">
                      <a className="nav-link p-0 " href={pageurl.FAQ}>
                        FAQ
                      </a>
                    </li>

                    <li className="nav-item mt-1">
                      <a className="nav-link p-0 " href={pageurl.PREVIOUSTECHIES}>
                        Previous Techies
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link p-0" href={pageurl.REQUESTCERTIFICATE}>
                        Request Certificates
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link p-0" href={pageurl.TERMSCONDITIONS}>
                        Terms and Conditions
                      </a>
                    </li>

                  </ul>
                  {/* <ul className="nav nav-pills flex-column   mt-1">
                    <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.FAQ}>
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.PREVIOUSTECHIES}>
                        Previous Techies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0" href={pageurl.REQUESTCERTIFICATE}>
                        Request Certificates
                      </a>
                    </li> */}
                  {/* <li className="nav-item">
                      <a className="nav-link p-0 " href={pageurl.PASTPROJECT}>
                        Past Projects
                      </a>
                    </li> */}
                  {/* <li className="nav-item">
                      <a className="nav-link p-0" href={pageurl.FORUM}>
                        Forum
                      </a>
                    </li> */}
                  {/* <li className="nav-item">
                      <a className="nav-link p-0" href={pageurl.PRIVACYPOLICY}>
                        Privacy Policy
                      </a>
                    </li> */}
                  {/* <li className="nav-item">
                      <a className="nav-link p-0" href={pageurl.TERMSCONDITIONS}>
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>  */}
                </div>
                <div className="col-6">
                  <div>
                    <h5 className="font-weight-bold">Contact us</h5>
                    <p>
                      <a href="/" className="text-dark">
                        training@zuri.team
                      </a>
                    </p>
                  </div>
                  <div>
                    <h5 className="font-weight-bold">Office Address</h5>
                    <p>
                      92, Wolverine Avenue, Ikeja.
                      <br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <a className=" logo" href="/">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="col-6">
                  <h5 className="font-weight-bold">Follow us</h5>
                  <a
                    href="/"
                    className="text-decoration-none inline-block mr-3"
                  >
                    <img src={facebookIcon} alt="facebook-logo" />
                  </a>
                  <a href="/" className="text-decoration-none inline-block mr-3 ">
                    <img src={twitterIcon} alt="twitter-logo" />
                  </a>

                  <a href="/" className="text-decoration-none inline-block mr-3 ">
                    <img src={instaIcon} alt="twitter-logo" />
                  </a>

                  <a href="/" className="text-decoration-none inline-block mr-3 ">
                    <img src={linkedinIcon} alt="twitter-logo" />
                  </a>
                </div>
              </div>
              <hr />
              <div className="section-bottom">
                <div className="col-12 py-2 text-center">
                  <p className="footer-copyright">
                    © 2020 Zuri Training. All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
