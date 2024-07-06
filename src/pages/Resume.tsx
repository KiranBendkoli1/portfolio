import React from 'react'
import resume from '../assets/KiranBendkoli.pdf'
import PdfComponet from 'components/PdfComponent/PdfComponet'
const Resume = () => {
  return (
    <div>
      
      <PdfComponet name={resume} />
    </div>
  )
}

export default Resume
