import React from 'react'
import resume from '../../assets/KiranBendkoli.pdf'
import PdfComponet from 'components/PdfComponent/PdfComponet'
import Button from 'components/Button'
import TitleSeperator from 'components/Seperator/TitleSeperator'
import Title from 'components/Layouts/Title'

const Resume = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 items-center text-center">
        <Title title="My Resume" />
      </div>
      <p className="flex justify-center text-center pb-10">
        <a href={resume} download>
          <Button>Download resume</Button>
        </a>
      </p>
      <PdfComponet name={resume} />
    </div>
  )
}

export default Resume
