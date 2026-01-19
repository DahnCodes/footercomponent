import banner from '../assets/Faqbanner.png'
import { Accordion } from './Accordion'

export function Faq() {
  return (
    <>
      <img src={banner} alt="FAQ Banner" className="w-full" />
      <div className='p-5 sm:p-10 md:p-20 lg:p-40'>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-medium text-[#273043]">
            Frequently Asked Questions (FAQs)
          </h1>
          <p className='text-sm sm:text-base text-[#596275]'>
            Necessary questions answered. Everything you need to know about
            Genesys Academy.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <Accordion
            title="Is Genesys Academy a paid internship?"
            content="No, it's not."
          />
          <Accordion
            title="Can I make payment in installments?"
            content="Of course, you can. We have installment plans made available."
          />
          <Accordion
            title="Can I change my pathway after registration?"
            content="Yes you can, provided that you reach out to us before the program begins."
          />
          <Accordion
            title="Do I get a certificate at the end of the program?"
            content="On completion of the program, you'll receive a certificate."
          />
          <Accordion
            title="How long will the learning at Genesys Academy take?"
            content="The program is scheduled for 6 months."
          />
          <Accordion
            title="Can I get a job recommendation after my internship with Genesys?"
            content="Provision of job opportunities is part of what we offer to our interns who successfully complete the program."
          />
        </div>
      </div>
    </>
  )
}