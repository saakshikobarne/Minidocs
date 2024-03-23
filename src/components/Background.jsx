import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen fixed z-[2]'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl'>documents</div>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] font-medium leading-none tracking-tight text-zinc-900'>DOCS</h1>
    </div>
  )
}

export default Background