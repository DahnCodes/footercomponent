import { IoMdSend } from 'react-icons/io'
import banner from '../assets/Faqbanner.png'
import location from "../assets/location.png"
import email from "../assets/email.png"
import hourglass from "../assets/hourglass.png"
import caller from "../assets/caller.png"




export function ContactUs() {
  return (
    <>
        <img src={banner} alt="" className=" w-full" />
      <div>

      <div className="flex flex-col lg:flex-row items-center px-5 md:px-20 lg:px-25 py-20 gap-10 lg:gap-0">
        {/* Contact Form Section */}
        <div className="block max-w-82.5 sm:max-w-95 lg:max-w-171">
          <h1 className="text-2xl md:text-4xl mb-3 font-medium">
            Let's hear from you!
          </h1>
          <p className="leading-6 text-base text-[#596275] font-normal">
            Do you have any questions or in need of assistance? Reach out to our
            committed support team. We value your feedback and inquiry. We are
            just a click or call away and ready to help.
          </p>

          <form className="flex flex-col mt-[6%] gap-2.5">
            <label htmlFor="fname">Full Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Full Name"
              className="w-full lg:w-145 h-15 rounded-[10px] border border-[#b1b1b1] px-5 py-6 outline-none text-base font-extralight mb-5"
            //   value={}
            //   onChange={}
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full lg:w-145 h-15 rounded-[10px] border border-[#b1b1b1] px-5 py-6 outline-none text-base font-extralight mb-5"
            //   value={}
            //   onChange={}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type in your message"
              className="w-full lg:w-145 h-41.5 rounded-[10px] border border-[#b1b1b1] px-5 py-6 outline-none text-base font-extralight"
              value=""
            />

            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full sm:w-95 lg:w-32.5 h-13.5 bg-[#f5772f] text-white border-none rounded-[10px] px-7.5 py-3.75 mt-[5%] text-base gap-2.5 cursor-pointer"
                // disabled=""
              >
                {}
                <IoMdSend className="text-2xl" />
              </button>
            </div>
          </form>
        </div>

        {/* Details Section */}
        <div className="px-2.5 md:px-0">
          <div className="mt-[10%] md:mt-[15%] lg:mt-0">
            {/* Location */}
            <div className="flex gap-7.5 mt-[5%] md:mt-[9%] lg:mt-[5%]">
              <div className="overflow-visible">
                <img src={location} alt="" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[24px] font-normal mb-2 text-[#596275]">
                  Location
                </h3>
                <p className="font-normal text-[#596275] text-sm md:text-base">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#596275] no-underline hover:text-[#f5772f]"
                  >
                    {}
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-7.5 mt-[5%] md:mt-[9%] lg:mt-[5%]">
              <div className="overflow-visible">
                <img src={caller} alt="" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[24px] font-normal mb-2 text-[#596275]">
                  Phone
                </h3>
                <a
                  href="tel:+234 814 012 0539"
                  className="text-[#596275] no-underline hover:text-[#f5772f]"
                >
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    +234 814 012 0539
                  </p>
                </a>
              </div>
            </div>

            {/* Mail */}
            <div className="flex gap-7.5 mt-[5%] md:mt-[9%] lg:mt-[5%]">
              <div className="overflow-visible">
                <img src={email} alt="" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[24px] font-normal mb-2 text-[#596275]">
                  Mail
                </h3>
                <a
                  href="mailto:academy@genesystechhub.com"
                  className="text-[#596275] no-underline hover:text-[#f5772f]"
                >
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    academy@genesystechhub.com
                  </p>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-7.5 mt-[5%] md:mt-[9%] lg:mt-[5%]">
              <div className="overflow-visible">
                <img src={hourglass} alt="" />
              </div>
              <div>
                <h3 className="text-[24px] md:text-[24px] font-normal mb-2 text-[#596275]">
                  Business Hours
                </h3>
                <div className="flex gap-5 mt-[2%]">
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    Monday - Friday
                  </p>
                  <div className="border-2 border-[#f5772f] rounded-[10px]"></div>
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    8am - 5pm
                  </p>
                </div>
                <div className="flex gap-5 mt-[2%]">
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    Saturday - Sunday
                  </p>
                  <div className="border-2 border-[#f5772f] rounded-[10px]"></div>
                  <p className="font-normal text-[#596275] text-sm md:text-base">
                    Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
