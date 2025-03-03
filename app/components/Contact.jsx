import React from 'react'
import CustomizedButton from './CustomizedButton'
import GetInTouchForm from './GetInTouchForm'

const Contact = () => {

  return (
    <div id='contacts' className='flex md:w-[80%] md:mx-[10%] w-[90%] mx-[5%] flex-col items-center justify-center py-[4%]'>
      <div className='capitalize text-[2rem] md:text-[3rem] font-[700]'>
        Get in touch
      </div>
      <div className='my-5'>
        <p className="text-[#8f9094] text-[.875rem] md:text-[1rem] text-center">
          I'm currently specializing in
          <span className="text-[#3ccf91]"> Web Development</span>.<br />
          Feel free to get in touch and talk more about your projects.
        </p>
      </div>
      <GetInTouchForm/>
      <div className='flex gap-4 flex-wrap items-center justify-center my-10'>
        {[{ name: "LinkedIn", img: "https://img.icons8.com/ios-glyphs/30/3ccf91/linkedin.png", url: "https://www.linkedin.com/in/aman-singh-433240225/" },
        { name: "Email", img: "https://img.icons8.com/ios-filled/50/3ccf91/new-post.png", url: "mailto:amansinghmarch16@gmail.com" }, { name: "Resume", img: "https://img.icons8.com/ios-filled/50/3ccf91/document--v1.png", url: "/aman-singh.pdf" }].map((el, key) => {
          return <CustomizedButton {...el} key={key} />
        })}
      </div>
    </div>
  )
}

export default Contact