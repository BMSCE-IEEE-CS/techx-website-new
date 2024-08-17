import React from "react";
import localFont from "next/font/local";
import Image from 'next/image'
import Logo from "../public/images/Tech X Bangalore Colour White Orange.png"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa6";

const spacex = localFont({ src: "../app/SpaceX.ttf" });

const Footer: React.FC = () => {
  const iconStyle = {
    backgroundColor: "black", 
    color: "white", 
    borderRadius: "50%",
    padding: "10px",
    fontSize: "24px",
    margin: "5px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    border: "2px solid white", 
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-20">
          <div className="mt-5 text-center flex justify-center">
              <div className="relative w-[400px] h-[150px] md:w-[350px] md:h-[100px]">
                <Image
                  src={Logo}
                  alt="TechX Logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
            <p className="mt-2 w-90 sm:w-full md:w-90 lg:w-90 xl:w-80 select-none">
              TechX is an IEEE CS event designed for students and young
              professionals. It focuses on new technologies and offers various
              sessions, including technical demonstrations, talks on emerging
              technologies, and interactions with industry experts. TechX also
              emphasizes leadership development and soft skills, providing
              sessions to help students become effective leaders and prepare for
              interviews.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 lg:mt-10">
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-full h-48 lg:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.2409090360702!2d77.5649372349438!3d12.940991383495657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1723282951998!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2 lg:mb-0 ml-[6%]">
                B.M.S. College of Engineering
              </h3>
              <div className="flex justify-center w-full mt-2">
                <a
                  href="https://linktr.ee/bmsce_ieeecs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-2 rounded-full border border-current hover:bg-orange transition-colors lg:mt-[120%] mt-5 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-full h-48 lg:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6925424903943!2d77.4356121852999!3d12.863124093954529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae472f365fe219%3A0xcae219b3b46324db!2sCHRIST%20(Deemed%20to%20be%20University)%20Bengaluru%20Kengeri%20Campus!5e0!3m2!1sen!2sin!4v1723283048620!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2 lg:mb-0 text-center">
                Christ(Deemed to be University), Kengeri Campus
              </h3>
              <div className="flex justify-center w-full mt-2">
                <a
                  href="https://linktr.ee/ieeecscu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="p-2 rounded-full border border-current hover:bg-orange-10 transition-colors mt-5 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg">Follow us on</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.facebook.com/cs.techx/"
              target="_blank"
              style={iconStyle}
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/cs.techx"
              target="_blank"
              style={iconStyle}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/cs-techx"
              target="_blank"
              style={iconStyle}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="http://syp.computer.org/techx"
              target="_blank"
              style={iconStyle}
            >
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl text-body-color dark:text-dark-6 text-center mt-10">
        <span className="text-xl md:text-2xl">&copy;</span> TechX. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
