import React from 'react'

const Finder = () => {
  return (
    <div className='flex w-[800px] h-[600px] rounded-2xl overflow-hidden'>
        {/* sidenav */}
        <div class="hfull w-52 flex flex-col">
            <ul className='flex gap-2'>
                <li><span className='w-[12px] h-[12px] rounded-full bg-[#FF5F57] border-1 border-[#00000033]'></span></li>
                <li><span className='w-[12px] h-[12px] rounded-full bg-[#FEBC2E] border-1 border-[#00000033]'></span></li>
                <li><span className='w-[12px] h-[12px] rounded-full bg-[#28C840] border-1 border-[#00000033]'/></li>
            </ul>
        </div>
    </div>
  )
}

export default Finder