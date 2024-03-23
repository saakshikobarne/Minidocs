import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { motion } from 'framer-motion';


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-medium leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
          <div className='flex items-center px-8 py-3 justify-between'>
            <h5>{data.fileSize}</h5>
            
              <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close? <RiCloseFill/>: <MdOutlineFileDownload size="1.1em" color='#fff'/>}              
              </span>
          </div>
          {data.tag.isOpen? (
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm font-medium text-black">{data.tag.tagTitle}</h3>
            </div>
          ):null}
          
        </div>
    </motion.div>
  )
}

export default Card
