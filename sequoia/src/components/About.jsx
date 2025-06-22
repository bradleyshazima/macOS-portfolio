// src/components/FinderSections/About.jsx

import React from 'react'
import SplitText from './SplitText'

const About = () => {
  return (
    <div className="flex flex-col w-full h-full px-7 py-3.5">
      <SplitText
        text="About Me"
        className="text-3xl font-bold text-gray-800"
        splitType="chars"
        delay={100}
        duration={0.8}
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
      />
    </div>
  )
}

export default About
