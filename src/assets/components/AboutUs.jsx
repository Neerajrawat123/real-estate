import React from "react";

const AboutUs = () => {
  return (
    <section className="relative py-32 px-8">
      <div className="">
        <div className="flex mb-10">
          <div className="w-full md:ps-16 md:w-3/4  pt-10">
            <div className="inner-column">
              <div className="sec-title">
                <div className="text-indigo-700 font-bold text-2xl mb-3 ms-3">
                  About Us
                </div>
                <h2 className="text-3xl mb-8 font-semibold">
                  We Are The Leader In <br /> The Real estate consulting
                </h2>
              </div>
              <div className="leading-8 text-gray-500 mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </div>
              <div className="font-bold mb-12">
                Request Quote:{" "}
                <span className="theme_color">neerajrawat@gmail.com</span>
              </div>
              <a
                href="about.html"
                className="border-2 px-6 py-2 rounded-xl border-indigo-700  text-2xl text-black mr-4 hover:bg-indigo-700 hover:text-white"
              >
                Read More
              </a>
            </div>
          </div>

          <div className=" w-full hidden md:block right-0">
            <div className="inner-column relative">
              <div className="image absolute right-8">
                <img src="public/images/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
