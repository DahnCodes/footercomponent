import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

interface AccordionProps {
  title: string
  content: string
}

export function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-[#FFFFFF] w-full lg:w-190 border border-[#596275] rounded-[10px] p-4 sm:p-5 text-[#596275]">
      <h4 className='flex justify-between items-center gap-3 cursor-pointer' onClick={toggleAccordion}>
        <span className="text-sm sm:text-base flex-1">{title}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <FaChevronUp className='text-[#596275]' />
          ) : (
            <FaChevronDown className='text-[#596275]' />
          )}
        </span>
      </h4>
      {isOpen && (
        <div className="mt-3">
          <p className="text-sm sm:text-base">{content}</p>
        </div>
      )}
    </div>
  )
}