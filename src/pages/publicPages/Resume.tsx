import React from 'react'
import resume from '../../assets/KiranBendkoli.pdf'
import PdfComponet from 'components/PdfComponent/PdfComponet'
import Button from 'components/Button'
import TitleSeperator from 'components/Seperator/TitleSeperator'

const Resume = () => {
  const url =
    'https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/KiranBendkoli.pdf?alt=media&token=d69f31c4-2056-49e8-9f04-963125ea91ab'

  return (
    <div>
      <TitleSeperator title="My Resume" />
      <p className="text-center py-6">
        <a href={url} target="_blank">
          <Button>Download resume</Button>
        </a>
      </p>
      <PdfComponet name={resume} />
    </div>
  )
}

export default Resume
