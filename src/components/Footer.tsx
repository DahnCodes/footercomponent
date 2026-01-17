import footerlogo from '../assets/footerlogo.png'
import call from '../assets/call.png'
import sms from '../assets/sms.png'
import facebook from  "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import x from "../assets/x.png"
import linkedin from "../assets/linkedin.png"
import youtube from "../assets/youtube.png"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Address */}
          <div className="flex flex-col gap-4 text-[#596275] 
                          items-center text-center 
                          lg:items-start lg:text-left">
            <img src={footerlogo} alt="Genesys Logo"  />

            <p className="leading-relaxed">
              Kilometer 7, Enugu/Port Harcourt Expressway, Centenary City,
              Enugu, Nigeria.
            </p>

            <a href="#" className="text-[#F5772F] font-medium hover:underline">
              Get Direction
            </a>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <img src={call} alt="Call" className="w-5" />
                <span>+234 814 012 0539</span>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <img src={sms} alt="Email" className="w-5" />
                <span>academy@genesystechhub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 
                          items-center text-center 
                          lg:items-start lg:text-left">
            <h4 className="text-lg font-medium text-[#273043]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-[#596275]">
              <li className="hover:text-[#F5772F] cursor-pointer">Home</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Pathways</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Testimonies</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Contact Us</li>
              <li className="hover:text-[#F5772F] cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Pathways */}
          <div className="flex flex-col gap-4 
                          items-center text-center 
                          lg:items-start lg:text-left">
            <h4 className="text-lg font-medium text-[#273043]">
              Pathways
            </h4>
            <ul className="flex flex-col gap-3 text-[#596275]">
              <li className="hover:text-[#F5772F] cursor-pointer">Product Design</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Front End</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Back End</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Data Analysis</li>
              <li className="hover:text-[#F5772F] cursor-pointer">Quality Assurance</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 
                          items-center text-center 
                          lg:items-start lg:text-left">
            <h4 className="text-lg font-medium text-[#273043]">
              Follow Us
            </h4>
            <div className="flex gap-4 justify-center lg:justify-start">
              <img src={facebook} alt="Facebook" className="cursor-pointer" />
              <img src={instagram} alt="Instagram" className=" cursor-pointer" />
              <img src={x} alt="X" className=" cursor-pointer" />
              <img src={linkedin} alt="LinkedIn" className="cursor-pointer" />
              <img src={youtube} alt="YouTube" className=" cursor-pointer" />
            </div>
          </div>

        </div>

        <p className="text-center text-sm text-[#596275] mt-12">
          © 2026 Genesys Tech Hub  Powered by Hubly
        </p>
      </div>
    </footer>
  )
}

