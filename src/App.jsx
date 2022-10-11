import { useState } from 'react'
import pfp from './images/image-victor.jpg'
import topBg from './images/bg-pattern-top.svg'
import botBg from './images/bg-pattern-bottom.svg'
import heroBg from './images/bg-pattern-card.svg'
// bg-hero-pattern
function App() {
  return (
    <>
      <div className='bg-cyan-500 min-h-screen font-family '>
        <div className='flex justify-start'>
          <img
            src={topBg}
            alt=''
            className='object-none object-right-bottom w-[50rem] h-[30rem]'
          />
        </div>
        <div className='flex justify-end'>
          <img
            src={botBg}
            alt=''
            className='object-none object-left-top w-[50rem] h-[20rem]'
          />
        </div>

        {/* CARD COMPONENT */}
        <div className='absolute top-[15rem] left-[35rem] bg-cyan-500 flex flex-col justify-center w-[25rem] max-h-[20rem] drop-shadow-2xl rounded-lg'>
          <img src={heroBg} alt='' className='rounded-t-lg' />
          <div className='relative'>
            <img
              src={pfp}
              alt=''
              className='object-none rounded-[50%] absolute left-[35%] top-[-3rem] border-[0.4rem] border-white'
            />
          </div>
          <div className='bg-white px-[1rem] py-[1rem] pt-[5rem] flex flex-col justify-center align-middle items-center rounded-b-lg'>
            <div className='font-bold flex flex-row'>
              Victor Crest
              <div className='text-[#6a6f81] font-normal pl-2'>26</div>
            </div>
            <div className='text-[#6a6f81]'>London </div>
            <div className='border-[1px] bg-[#6a6f81] border-[#6a6f81] px-[12rem] my-[1rem]'></div>
            <div className='flex flex-row justify-evenly w-full'>
              <div className='flex flex-col justify-center align-middle items-center'>
                <div className='font-bold'>80K</div>
                <div className='text-[#6a6f81]'>Followers</div>
              </div>
              <div className='flex flex-col justify-center align-middle items-center'>
                <div className='font-bold'>803K</div>
                <div className='text-[#6a6f81]'>Likes</div>
              </div>
              <div className='flex flex-col justify-center align-middle items-center'>
                <div className='font-bold'>1.4K</div>
                <div className='text-[#6a6f81]'>Photos</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center text-white'>
          Challenge by&nbsp;
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by&nbsp;
          <a href='#' className='text-yellow-100'>
            {' '}
            Ashray
          </a>
          .
        </div>
      </div>
    </>
  )
}

export default App
