import useDimensions from 'hooks/useDimensions'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'

export interface PdfProps {
  name: string
}

const PdfComponet: React.FC<PdfProps> = ({ name }) => {
  const { width: windowWidth } = useDimensions()
  console.log(windowWidth)
    const getWidth= (windowWidth:number)=>{
        if(windowWidth<500){
            return windowWidth-20;
        }else if(windowWidth>500 && windowWidth<700){
            return windowWidth-100;
        }else{
            return 600;
        }
    }
  return (
    <div className="flex justify-center overflow-hidden  bg-backround">
      <Document file={name} className={'w-fit text-center rounded overflow-hidden'}>
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          width={getWidth(windowWidth)}
        />
      </Document>
    </div>
  )
}

export default PdfComponet