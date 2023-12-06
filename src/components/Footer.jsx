import React from "react";

function Footer() {
  return (
    <div className="bg-indigo-600 pt-6 md:flex gap-4 px-4">
      <div className="flex pb-10 md:ps-12 md:w-2/3 justify-between flex-wrap gap-4">
        <div className="text-white">
          <h1 className="font-semibold text-2xl mb-4">Company</h1>
          <ul className="text-white flex gap-1 flex-col ps-1">
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="text-white ">
          <h1 className="font-semibold text-2xl mb-4">Products</h1>
          <ul className="text-white flex gap-1 flex-col ps-1">
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
            </ul>
        </div>
        <div className="text-white ">
          <h1 className="font-semibold text-2xl mb-4">Accounts</h1>
          <ul className="text-white flex gap-1 flex-col ps-1">
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className="text-white ">
          <h1 className="font-semibold text-2xl mb-4">Resources</h1>
          <ul className="text-white flex gap-1 flex-col ps-1">
            <li>Flats</li>
            <li>Real estate</li>
            <li>Apartments</li>
            <li>Studio</li>
          </ul>
        </div>
        <div className="text-white ">
          <h1 className="font-semibold text-2xl mb-4">support</h1>
          <ul className="text-white flex gap-1 flex-col ps-1">
            <li>Contact us</li>
            <li>Chat us</li>
            <li>Meet up</li>
          </ul>
        </div>
        </div>
        <div className="md:w-60 md:px-2 px-6 py-5 md:ml-16">
          <h1 className="font-semibold text-3xl mb-6 text-center text-white">
            Social
          </h1>
          <ul className="flex gap-2">
            <li className="">
              <a href="">
                <img src="images/icons/facebook.png" alt="" />
              </a>
            </li>
            <li className="">
              <a href="">
                <img src="/images/icons/instagram.png" alt="" />
              </a>
            </li>
            <li className="">
              <a href="">
                <img src="/images/icons/twitter.png" alt="" />
              </a>
            </li>
            <li className="">
              <a href="">
                <img src="/images/icons/whatsapp.png" alt="" />
              </a>
            </li>
            <li className ="">
              <a href="">
                <img src="images/icons/youtube.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
    
    </div>
  );
}

export default Footer;
