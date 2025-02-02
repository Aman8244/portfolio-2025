"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CustomizedButton = ({ name, img, url }) => {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(url)} className="flex p-3 md:p-2 md:space-x-1 items-center justify-center rounded-[0.375rem] md:min-w-[2rem] font-[600] text-[#ffff] bg-[#ffffff14] cursor-pointer border-0 hover:border hover:border-[#ffffff29] ">
            <Image className='md:w-[25px] w-[18px]' src={img} alt='platform' height={25} width={25} />
            {name}
        </Button>
    )
}

export default CustomizedButton