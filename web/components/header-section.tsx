// import React from 'react'
import Image from 'next/image'

const HeaderSection = ({
    title,
    subTitle
}:{
    title: string;
    subTitle: string;
}) => {
  return (
    <header className="relative h-60 text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image src="/hero.jpg" alt='Header Image' fill className='object-cover object-center w-full h-full'/>
        </div>

    </header>
  )
}

export default HeaderSection