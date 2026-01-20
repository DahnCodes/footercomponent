import illustration from "../assets/illustration.png"
import hands from "../assets/hands.png"
import stepgirl from "../assets/stepgirl.png"
import shapes from "../assets/shapes.png"
import steps2 from "../assets/steps2.png"
import stepping from "../assets/stepping.png";



export default function PaySmallSmall(){
    return(
        <>
         <div className="mt-25 px-25 py-7.5 block max-md:mt-12.5 max-md:px-5">
      <img 
        src={illustration} 
        alt="" 
        className="absolute right-0 overflow-hidden scale-x-100 w-35 max-md:w-20 top-0"
      />

      <div>
    

        <div className="w-180.5 mx-auto text-center flex flex-col items-center gap-5 max-md:w-145 max-[475px]:w-95 max-[475px]:justify-center max-[475px]:mt-7.5 max-[393px]:w-85 max-[344px]:wrap-break-word max-[344px]:max-w-70.5 max-[344px]:overflow-visible">
          <h1 className="text-[32px] font-bold text-[#273043] max-[475px]:text-2xl">
            Our Flexible Payment Plan
          </h1>

          <p className="text-[#596275] text-base leading-6.25 max-[393px]:text-sm">
            At our Academy, we understand that investing in your education is
            a significant importance to you.We're thrilled to introduce the
            "Easy Payment plan". This plan enables you to pay the program fee
            in a more manageable installments, empowering you to chase your
            aspirations with ease.
          </p>
          
            <button className="w-48.5 h-13.5 px-7.5 py-3.75 gap-2 rounded-[10px] bg-[#f5772f] border-none text-white cursor-pointer hover:bg-[#ff9e66] overflow-visible max-[320px]:w-67.5">
              Begin Application
            </button>
      

          <img 
            src={hands} 
            alt="" 
            className="absolute left-0 top-87.5 opacity-80 max-md:hidden"
          />
        </div>
      </div>

      <section className="mt-87.5 max-md:mt-25">
        <h1 className="text-center text-[32px] font-bold text-[#273043] max-[475px]:text-2xl">
          How does "Pay small small" Work?
        </h1>
        
        <div className="flex flex-col gap-10 mt-20 bg-[url('../assets/vectorr.png')] bg-no-repeat bg-contain bg-center max-md:mt-7.5">
          <div className="flex justify-around text-center max-md:flex-col max-md:items-center max-md:gap-7.5">
            <div className="w-92.5 max-[393px]:w-85 max-[344px]:w-70">
              <h4 className="text-[#f5772f] font-bold text-[40px]">1.</h4>
              <h3 className="text-[#273043] font-bold text-xl max-[393px]:text-base">
                Total Program Fee
              </h3>
              <p className="text-[#596275] font-normal text-base leading-6.25 mt-1.75 max-[393px]:text-sm">
                The total cost for the program is 550,000
              </p>
            </div>
            
            <div className="w-92.5 max-[393px]:w-85 max-[344px]:w-70">
              <h4 className="text-[#f5772f] font-bold text-[40px]">2.</h4>
              <h3 className="text-[#273043] font-bold text-xl max-[393px]:text-base">
                Minimum Enrollment Payment
              </h3>
              <p className="text-[#596275] font-normal text-base leading-6.25 mt-1.75 max-[393px]:text-sm">
                To secure a spot in the next cohort of Genesys Academy, you
                must first pay at least 60% of total fee (N330,000) before the
                start of the program.
              </p>
            </div>
            
            <div className="w-92.5 max-[393px]:w-85 max-[344px]:w-70">
              <h4 className="text-[#f5772f] font-bold text-[40px]">3.</h4>
              <h3 className="text-[#273043] font-bold text-xl max-[393px]:text-base">
                Payment Duration
              </h3>
              <p className="text-[#596275] font-normal text-base leading-6.25 mt-1.75 max-[393px]:text-sm">
                You can spread the payment through the duration of the cohort
                session.
              </p>
            </div>
          </div>

          <div className="flex justify-around text-center max-md:flex-col max-md:items-center max-md:gap-7.5">
            <div className="w-92.5 max-[393px]:w-85 max-[344px]:w-70">
              <h4 className="text-[#f5772f] font-bold text-[40px]">4.</h4>
              <h3 className="text-[#273043] font-bold text-xl max-[393px]:text-base">
                Cohort Selection
              </h3>
              <p className="text-[#596275] font-normal text-base leading-6.25 mt-1.75 max-[393px]:text-sm">
                At the time of registration, you will choose the cohort you
                aim to join. We offer two cohorts each year, so you can plan
                your payments accordingly.
              </p>
            </div>
            
            <div className="w-92.5 max-[393px]:w-85 max-[344px]:w-70">
              <h4 className="text-[#f5772f] font-bold text-[40px]">5.</h4>
              <h3 className="text-[#273043] font-bold text-xl max-[393px]:text-base">
                Flexible Payment
              </h3>
              <p className="text-[#596275] font-normal text-base leading-6.25 mt-1.75 max-[393px]:text-sm">
                Start paying in bits towards your selected cohort as soon as
                you register.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-37.5 overflow-visible">
        <div className="w-249.25 mx-auto h-81.75 mt-7.5 p-10 rounded-[10px] bg-white flex flex-col justify-center gap-5 relative shadow-[2px_2px_2px_0px_rgba(0,0,0,0.1)] max-md:w-145 max-[475px]:w-95 max-[475px]:overflow-visible max-[475px]:h-118.75 max-[393px]:w-82.5 max-[375px]:h-121.25 max-[344px]:w-70 max-[344px]:h-103.75 max-[320px]:h-121.25">
          <img 
            src={shapes} 
            alt="" 
            className="absolute right-0 top-0 max-[393px]:w-20"
          />
          
          <div className="overflow-visible max-[393px] max-[375px] max-[344px] max-[344px]:overflow-visible">
            <h1 className="text-center text-[30px] font-bold text-[#273043] max-[475px]:text-2xl">
              Benefits of "Pay small small"
            </h1>
            
            <p className="relative pl-5 mt-7.5 text-[#273043] overflow-hidden before:content-['•'] before:absolute before:left-0 before:text-[#f5772f] before:text-base max-[475px]:mt-5 max-[393px]:text-sm max-[344px]:mt-2.5 max-[344px]:wrap-break-word max-[344px]:max-w-49.75 max-[344px]:overflow-visible max-[320px]:mt-2.5">
              <span className="text-[#f5772f] max-[393px]:text-lg">Planning:</span> &nbsp;&nbsp;Choose the cohort that fits
              your schedule and financial planning
            </p>
            
            <p className="relative pl-5 mt-7.5 text-[#273043] overflow-hidden before:content-['•'] before:absolute before:left-0 before:text-[#f5772f] before:text-base max-[475px]:mt-5 max-[393px]:text-sm max-[344px]:mt-2.5 max-[344px]:wrap-break-word max-[344px]:max-w-49.75 max-[344px]:overflow-visible max-[320px]:mt-2.5">
              <span className="text-[#f5772f] max-[393px]:text-lg">Flexibility:</span> &nbsp;&nbsp;Pay at your own pace
              within 1 year period
            </p>
            
            <p className="relative pl-5 mt-7.5 text-[#273043] overflow-hidden before:content-['•'] before:absolute before:left-0 before:text-[#f5772f] before:text-base max-[475px]:mt-5 max-[393px]:text-sm max-[344px]:mt-2.5 max-[344px]:wrap-break-word max-[344px]:max-w-49.75 max-[344px]:overflow-visible max-[320px]:mt-2.5">
              <span className="text-[#f5772f] max-[393px]:text-lg">Affordability:</span> &nbsp;&nbsp;Spread the cost over a
              year to ease financial pressure
            </p>
            
            <p className="relative pl-5 mt-7.5 text-[#273043] overflow-hidden before:content-['•'] before:absolute before:left-0 before:text-[#f5772f] before:text-base max-[475px]:mt-5 max-[393px]:text-sm max-[344px]:mt-2.5 max-[344px]:wrap-break-word max-[344px]:max-w-49.75 max-[344px]:overflow-visible max-[320px]:mt-2.5">
              <span className="text-[#f5772f] max-[393px]:text-lg">Accountability:</span> &nbsp;&nbsp;Enhances clarity in the
              payment structure from both parties, keeping clean records
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12.5">
        <div className="absolute left-0 -z-10 -mt-20 max-md:hidden">
          <img src={steps2} alt="" />
        </div>
        
        <div className="flex items-center justify-center gap-2.5 relative overflow-visible">
          <h1 className="text-center text-[32px] font-bold text-[#273043] max-[475px]:text-2xl">
            Steps To Get Started
          </h1>
        </div>

        <div className="flex items-center justify-evenly mt-25 gap-0 max-md:flex-col-reverse max-md:justify-between max-md:overflow-visible max-[475px]:mt-25">
          <div className="overflow-visible flex gap-7.5 max-md:-mt-25 max-[425px]:-mt-25">
            <img 
              src={stepping} 
              alt="" 
              className="max-[393px]:w-13.25 max-[393px]:h-118.5 max-[344px]:w-15.75"
            />
            
            <div className="flex flex-col gap-25 max-[393px]:gap-7.5 max-[375px]:gap-5 max-[344px]:gap-10 max-[320px]:gap-5">
              <div className="max-w-88.75 max-[393px]:text-sm">
                <h4 className="text-xl leading-7.5 max-md:text-lg max-[375px]:text-lg max-[320px]:text-base">
                  Register
                </h4>
                <p className="text-[#273043] max-[375px]:text-base max-[320px]:text-sm">
                  Complete the registration form on our website and choose
                  your target cohort.
                </p>
              </div>
              
              <div className="max-w-88.75 max-[393px]:text-sm">
                <h4 className="text-xl leading-7.5 max-md:text-lg max-[375px]:text-lg max-[320px]:text-base">
                  Payment Plan
                </h4>
                <p className="text-[#273043] max-[375px]:text-base max-[320px]:text-sm">
                  Opt for the "pay small small" plan during registration.
                </p>
              </div>
              
              <div className="max-w-88.75 max-[393px]:text-sm">
                <h4 className="text-xl leading-7.5 max-md:text-lg max-[375px]:text-lg max-[320px]:text-base">
                  Start Paying
                </h4>
                <p className="text-[#273043] max-[375px]:text-base max-[320px]:text-sm">
                  Begin making payments in bits that fit your Budget.
                </p>
              </div>
              
              <div className="max-w-88.75 max-[393px]:text-sm">
                <h4 className="text-xl leading-7.5 max-md:text-lg max-[375px]:text-lg max-[320px]:text-base">
                  Secure your spot
                </h4>
                <p className="text-[#273043] max-[375px]:text-base max-[320px]:text-sm">
                  Ensure you have paid at least 60% (330,000) before the
                  cohort starts to confirm your enrolment
                </p>
              </div>
              
              <div className="max-w-88.75 max-[393px]:text-sm">
                <h4 className="text-xl leading-7.5 max-md:text-lg max-[375px]:text-lg max-[320px]:text-base">
                  Complete Payment
                </h4>
                <p className="text-[#273043] max-[375px]:text-base max-[320px]:text-sm">
                  Continue paying the remaining balance while you are enrolled
                  in the program.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-visible">
            <img 
              src={stepgirl} 
              alt="" 
              className="w-150 max-md:relative max-md:-bottom-32.5 max-md:overflow-visible max-[425px]:w-95 max-[425px]:mt-25 max-[393px]:mt-25"
            />
          </div>
        </div>
        
      
          <button className="w-48.5 h-13.5 px-7.5 py-3.75 gap-2 rounded-[10px] bg-[#f5772f] border-none text-white cursor-pointer hover:bg-[#ff9e66] overflow-visible ml-25 mt-7.5 max-[475px]:w-full max-[475px]:ml-auto">
            Begin Application
          </button>
       
      </section>
    </div>
        </>
    )
}