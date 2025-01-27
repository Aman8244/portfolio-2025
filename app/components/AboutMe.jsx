import React from 'react'

const AboutMe = () => {
    return (
        <div className='w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] py-[4%] flex gap-6 flex-wrap'>
            <div className='w-[100%] md:w-[50%]'>
                <h2 className='font-[cursive] font-[700] text-[1.5rem] text-[#ffffeb]'>
                    ⚡ About Me
                </h2>
                <br />
                <div className='text-[#8f9094] font-sans'>
                    Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.
                    <br /> <br />
                    I really liked to build stuff using no-code tools
                    back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Company
                    and a SaaS Company <br />
                    I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
                    Open Source
                    and Competitive Programming
                    <br /><br />
                    When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
                </div>
            </div>
            <div className='flex justify-center w-[100%] md:w-[40%] items-center'>
                <img className='rounded-[100%] w-[80%]' src={"/dp.jpg"} alt={"My picture"} width={800} height={800}/>
            </div>
        </div>
    )
}

export default AboutMe