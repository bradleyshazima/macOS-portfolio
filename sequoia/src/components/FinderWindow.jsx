import React, { useState } from 'react';
import { Search, Nav, File } from '@/assets/img'
import {Accordion, AccordionItem} from "@heroui/accordion";
import { About, Education, Experience, Expertise, Projects } from '.';

const Finder = () => {
  const [activeSection, setActiveSection] = useState('About');

  return (
    <div className='flex w-[800px] h-[600px] rounded-2xl overflow-hidden bg-white shadowCustom'>
        {/* sidenav */}
        <div class="h-full w-52 flex flex-col bg-[#DBDBDB]">
          <div className='w-full h-12 flex items-center px-5'>
            <ul className='flex gap-2'>
                <li><span className='block w-[12px] h-[12px] rounded-full bg-[#FF5F57] border border-[#00000033]'></span></li>
                <li><span className='block w-[12px] h-[12px] rounded-full bg-[#FEBC2E] border border-[#00000033]'></span></li>
                <li><span className='block w-[12px] h-[12px] rounded-full bg-[#28C840] border border-[#00000033]'/></li>
            </ul>
          </div>

          <div className='w-full flex-1 flex flex-col px-5'>
            <Accordion defaultExpandedKeys={["1"]}>
              <AccordionItem 
                key="1" 
                aria-label="Profile"
                title={<div className="text-left w-full">Profile</div>}
                className='text-[#00000040] text-[14px] font-bold'>

                <ul className="px-4">
                  {['About', 'Education', 'Expertise', 'Experience', 'Projects'].map(item => (
                    <li
                      key={item}
                      onClick={() => setActiveSection(item)}
                      className={`flex gap-2 cursor-pointer p-1 rounded ${
                        activeSection === item ? 'font-semibold' : ''
                      }`}
                    >
                      <img src={File} alt={item} />
                      <span className='text-black text-base font-normal'>{item}</span>
                    </li>
                  ))}
                </ul> 
              </AccordionItem>
            </Accordion>
          </div>

        </div>

        {/* =============== MAIN CONTENT ============== */}
        <div className='h-full flex-1 flex flex-col'>
          {/* ---Topbar----- */}
          <div className='flex items-center px-5 h-12 w-full bg-[#E9E9E9] shadowCustom gap-4'>
            <img src={Nav} alt="Nav" />
            <h4 className='font-semibold'>Title</h4>
          </div>

          <div className="flex-1 overflow-y-auto">
            {activeSection === 'About' && <About />}
            {activeSection === 'Education' && <Education />}
            {activeSection === 'Expertise' && <Expertise />}
            {activeSection === 'Experience' && <Experience />}
            {activeSection === 'Projects' && <Projects />}
          </div>
        </div>
    </div>
  )
}

export default Finder