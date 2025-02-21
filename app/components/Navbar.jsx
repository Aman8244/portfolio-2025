"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Seperator from './Seperator'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();

    return (
        <div className='flex flex-row py-4 space-x-0 md:space-x-4 '>
            <div className='flex flex-row mx-2 w-[50%] md:w-fit'>
                <Button onClick={()=>router.push("/")} className="bg-transparent hover:bg-transparent">
                    <div className='text-[#8f9094] font-[600] text-[32px] m-0 p-0 '>
                        {"{"}
                    </div>
                    <div className='text-[32px]  m-0 p-0 '>
                        {"A"}
                    </div>
                    <div className='text-[#8f9094] m-0 p-0  font-[600] text-[32px]'>
                        {"}"}
                    </div>
                </Button>
            </div>
            <div className='w-[50%] md:w-[90%] p-0 md:px-4'>
                <div>
                    {/** for mobile tablet screen */}
                    <div className='flex md:hidden items-end justify-end mx-3'>
                        <Sheet>
                            <SheetTrigger>
                                <div>
                                    <AlignJustify className="w-[32px] h-[32px]" />
                                </div>
                            </SheetTrigger>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <SheetContent className="bg-[#000000eb] text-[#ffffffeb]">
                                <div className='my-3 w-full h-1'></div>
                                <Seperator />
                                <SheetDescription className="flex flex-col space-y-8 text-[18px] text-[#ffffffeb] font-[600]">
                                    <span onClick={()=>router.push("/")} >
                                        Home
                                    </span>
                                    <span onClick={()=>router.push("/projects")} >
                                        Projects
                                    </span>
                                    <span onClick={()=>router.push("/#contacts")} >
                                        Contacts
                                    </span>
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>

                    </div>
                    <div className='hidden md:flex flex-row items-center  justify-end space-x-4'>
                        <div>
                            <Button onClick={()=>router.push("/")}  className="bg-transparent text-[#acacaa] hover:text-[#ffff]  hover:bg-transparent text-[18px] ">
                                Home
                            </Button>
                        </div>
                        <div>
                            <Button onClick={()=>router.push("/projects")}  className="bg-transparent text-[#acacaa] hover:text-[#ffff] hover:bg-transparent text-[18px] ">
                                Projects
                            </Button>
                        </div>
                        <div>
                            <Button onClick={()=>router.push("/#contacts")}  className="bg-transparent text-[#acacaa] hover:text-[#ffff] hover:bg-transparent text-[18px] ">
                                Contacts
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar