import { useState } from 'react'
import './App.css'
import {
  Apple, Wifi, Switch,
  Finder, Messages, Photos, Terminal
} from './assets/img'
import { useRef } from 'react';
import { FinderWindow } from './components'
import { Dock, DockIcon } from "@/components/magicui/dock"
import Draggable from 'react-draggable'

function App() {
  const nodeRef = useRef(null);
  return (
    <>
      <main id='desktop' className='w-full h-full flex flex-col items-center'>

        {/* ===== Top NavBar ===== */}
        <div className='flex h-6 w-full items-center justify-between px-7 relative'>
          <ul className='flex gap-4 items-center z-10'>
            <li><img src={Apple} alt="Apple logo" /></li>
            <li><h3 className='font-bold'>Finder</h3></li>
            <li className='regular'>File</li>
            <li className='regular'>Edit</li>
            <li className='regular'>View</li>
            <li className='regular'>Go</li>
            <li className='regular'>Window</li>
            <li className='regular'>Help</li>
          </ul>

          <ul className='flex gap-4 items-center z-10'>
            <li><img src={Wifi} alt="wifi" /></li>
            <li><img src={Switch} alt="Switch" /></li>
            <li><span className='regular'>Mon Jun 22 9:21 AM</span></li>
          </ul>

          <div className="w-full h-full absolute top-0 left-0 bg-[rgba(143,143,143,0.20)] mix-blend-color-burn backdrop-blur-3xl"></div>
        </div>

        {/* ===== Desktop & Dock ===== */}
        <section className='w-full flex-1 flex relative overflow-hidden'>

          {/* ===== Dock ===== */}
          <Dock iconSize={80} iconMagnification={120} className="z-10 absolute bottom-7 left-1/2 -translate-x-1/2 h-20">
            <DockIcon className="!p-0"><img src={Finder} alt="Finder" /></DockIcon>
            <DockIcon className="!p-0"><img src={Messages} alt="Messages" /></DockIcon>
            <DockIcon className="!p-0"><img src={Photos} alt="Photos" /></DockIcon>
            <DockIcon className="!p-0"><img src={Terminal} alt="Terminal" /></DockIcon>
          </Dock>

          {/* ===== Finder Window (Draggable & Bounded) ===== */}
          <Draggable bounds="parent" handle=".finder-header" nodeRef={nodeRef}>
            <div ref={nodeRef} className="absolute top-10 left-10 z-20">
              <FinderWindow />
            </div>
          </Draggable>
        </section>
      </main>
    </>
  )
}

export default App
