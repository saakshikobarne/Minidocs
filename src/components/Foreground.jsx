import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref= useRef(null);

  const data =[
    {
      desc: "Files for uploading",
      fileSize: "0.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "Project files",
      fileSize: "0.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc: "Development environment",
      fileSize: "0.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
    },
  ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap'>
      {data.map((item, index)=>{
        return <Card data={item} reference={ref}/>
      })}
    </div>
  )
}

export default Foreground