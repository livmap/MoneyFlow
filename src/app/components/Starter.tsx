import React from 'react'
import Image from 'next/image'

const Starter = () => {
  return (
    <div className='w-screen h-screen bg-white absolute top-0 left-0 flex items-center justify-center'>
        <Image src={'/icon.png'} alt={'The Logo Icon'} width={300} height={300} priority />
    </div>
  )
}

export default Starter