import React from 'react'
import CustomizedButton from './CustomizedButton'

const Intro = () => {
    return (
        <div className='flex flex-col w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] min-h-[90vh] md:min-h-[80vh] md:my-[4%]'>
            {/* <div className='absolute text-[#ffffff29]'>
                <img className="w-[70px] z-0 top-[-15px] left-[-10px]" src="https://svgsilh.com/svg/26432.svg"/>
            </div> */}
            <div className='font-[700] text-[3rem] md:text-[6rem] leading-[4rem] font-sans'>
                <p className="text-[#3CCF91] text-[1.2rem] md:text-[2rem] font-sans z-50 font-[600]">Hey there!, I'm-</p>
                Aman Singh.
            </div>
            <br /> <br />
            <div className='text-[1.3rem] md:text-[1.7rem] font-[600] text-[#8f9094] leading-[1.9rem] '>
                <span className='text-[#ffff] '>Frontend Developer</span> and <span className='text-[#ffff] '>Full Stack Developer. </span>
                A self-taught developer with an
                interest in Computer Science.
            </div> <br />
            <div className='text-[#8f9094] text-[.875rem] md:text-[1.5rem]'>
                🚀 Currently specializing in Web Development (React / Next.js) <br />
                ⚡ Reactjs Developer at TheGoodGameTheory
            </div> <br /> 
            <div className='flex  gap-3 flex-wrap'>
                {[{ name: "Github", img: "https://img.icons8.com/windows/64/3ccf91/github.png", url: "https://github.com/Aman8244" },
                { name: "LinkedIn", img: "https://img.icons8.com/ios-glyphs/30/3ccf91/linkedin.png", url: "https://www.linkedin.com/in/aman-singh-433240225/" },
                { name: "Email", img: "https://img.icons8.com/ios-filled/50/3ccf91/new-post.png", url: "mailto:amansinghmarch16@gmail.com" }
                ].map((el,key)=>{
                    return <CustomizedButton {...el} key={key}/>
                })}
            </div>
        </div>
    )
}

export default Intro
