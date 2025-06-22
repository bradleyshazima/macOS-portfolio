import { useState } from 'react'
import './App.css'
import { Apple, Dark, Light, Wifi, Switch, AppleWhite, Finder, Folder, Messages, Photos, Terminal } from './assets/img';
import { FinderWindow } from './components';
import { Dock, DockIcon } from "@/components/magicui/dock";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id='desktop' className='w-full h-full flex flex-col items-center'>
        {/* NavBar */}
        <div className='flex h-6 w-full items- justify-between px-7 relative'>
          <ul className='flex gap-4 items-center z-10'>
            <li><img src={Apple} alt="Apple logo"/></li>
            <li><h3 className='font-bold'>Finder</h3></li>
            <li className='regular'>File</li>
            <li className='regular'>Edit</li>
            <li className='regular'>View</li>
            <li className='regular'>Go</li>
            <li className='regular'>Window</li>
            <li className='regular'>Help</li>
          </ul>

          <ul className='flex gap-4 items-center z-10'>
            <li><img src={Wifi} alt="wifi"/></li>
            <li><img src={Switch} alt="Switch"/></li>
            <li><span className='regular'>Mon Jun 22 9:21 AM</span></li>
          </ul>

          <div class="w-full h-full absolute top-0 left-0 bg-[rgba(143,143,143,0.20)] mix-blend-color-burn backdrop-blur-3xl"></div>
        </div>

        <section className='w-full flex-1 flex px-8 py-4 relative overflow-hidden'>
          {/* ========== DOCK ========== */}
          <Dock iconSize={80} iconMagnification={120} className="z-10 absolute bottom-7 left-1/2 -translate-x-1/2 h-20">
            <DockIcon className="!p-0">
              <img src={Finder} alt="Finder" />
            </DockIcon>
            <DockIcon className="!p-0">
              <img src={Messages} alt="Messages" />
            </DockIcon>
            <DockIcon className="!p-0">
              <img src={Photos} alt="Photos" />
            </DockIcon>
            <DockIcon className="!p-0">
              <img src={Terminal} alt="Terminal" />
            </DockIcon>
          </Dock>


          <FinderWindow/>
        </section>
      </main>
    </>
  )
}

export default App
