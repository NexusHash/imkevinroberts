import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from 'react-icons/ai'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import Image from 'next/image';
import kr from "../public/vdgd.png";
import kranimate from "../public/programmer.gif"
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode,setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Im Kevin Roberts</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className='bg-white px-10 md:px-10 dark:bg-slate-800 transition-all duration-300 ease-in-out'>
        <section className=' min-h-screen'>
          <nav className='py-10 mb-5 flex justify-between'>
            <h1 className='text-xl font-SegoeUI dark:text-blue-200'>developedbyKevin</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
                  </li>
                <li>
                  <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a>
                  </li>
              </ul>
          </nav>  
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-teal-600 font-semibold md:text-6xl dark:text-blue-200'> Kevin Roberts </h2>
            <h3 className='text-2xl py-2 md:text-3xl text-black dark:text-orange-500'> Front-End Developer </h3>
            <p className='text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-blue-200'> Design and User Experience minded Front-End Developer. I love building cool stuff </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 pb-10 text-gray-700 dark:text-orange-600'>
            <AiFillTwitterCircle className='transition-all ease-in duration-300 cursor-pointer hover:scale-105 translate-y-5'/>
            <AiFillLinkedin className='transition-all ease-in duration-300 cursor-pointer hover:scale-105 translate-y-5'/>
            <AiFillGithub className='transition-all ease-in duration-300 cursor-pointer hover:scale-105 translate-y-5'/>
          </div>
          <div className='relative object-cover fill mx-auto mt-10 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 shadow-blue-500 shadow-md'>
            <Image src={kranimate} alt='' layout=''/>
          </div>
        </section>

        {/* SECOND PAGE */}

        <section>
          <div className='text-center mx-auto mt-20'>
            <h3 className='text-3xl py-1 dark:text-orange-500'> About me </h3>
            <p className='text-md py-2 leading-8 max-w-2xl mx-auto mb-20 dark:text-blue-200'> I'm a South African <span className='text-blue-400 font-bold'>Front-End Web Developer</span> with a keen interest in building elegant and responsive user centered web apps. I have a strong foundation in <span className='text-blue-400 font-bold'>ReactJS</span> and <span className='text-blue-400 font-bold'>SASS</span> frameworks. Currently occupied as a lead front-end dev for <a href='https://www.gsasconnect.net/' className='text-blue-400 font-bold hover:scale-105 '>GSASConnect</a> social platform  </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 justify-center mx-auto lg:w-1/3 dark:bg-orange-600 dark:shadow-blue-500 dark:shadow-md hover:scale-105 hover:rotate-3 transition-all duration-200'>
              <Image className='mx-auto' src={code} width={100} height={100} alt={''}/>
              <h3 className='text-2xl font-bold pt-8 pb-2 dark:text-gray-50'>
                Elegant Code
                </h3>
              <p className='py-2 font-semibold text-lg dark:text-gray-100'>
                
                </p>
              
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>ReactJS</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>NextJS</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>SASS</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Tailwind</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 justify-center mx-auto lg:w-1/3 dark:bg-orange-600 dark:shadow-blue-500 dark:shadow-md hover:scale-105 hover:rotate-[-3deg] transition-all duration-200'>
              <Image className='mx-auto' src={design} width={100} height={100} alt={''}/>
              <h3 className='text-2xl font-bold pt-8 pb-2 dark:text-gray-50'>
                Beautiful Designs
                </h3>
              <p className='py-2 font-semibold text-lg dark:text-gray-100'>
                
                </p>
              
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Figma</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Photoshop</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Illustrator</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Adobe XD</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 justify-center mx-auto lg:w-1/3 dark:bg-orange-600 dark:shadow-blue-500 dark:shadow-md hover:scale-105 hover:rotate-[3deg] transition-all duration-200'>
              <Image className='mx-auto' src={consulting} width={100} height={100} alt={''}/>
              <h3 className='text-2xl font-bold pt-8 pb-2 dark:text-gray-50'>
                Optimization
                </h3>
              <p className='py-2 font-semibold text-lg dark:text-gray-100'>
                
                </p>
              
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>SEO</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Responsiveness</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Google Analytics</p>
              <p className='text-gray-700 py-1 font-semibold dark:text-gray-100'>Web Caching</p>
            </div>

          </div>
        </section>
        <section>
          <div className='text-center mt-10'>
            <h3 className='text-3xl py-1 dark:text-orange-600'>Portfolio</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-blue-200 mb-10'> Take a look at some of my projects that I'm proud of </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} alt='' className='rounded-lg object-cover responsive' width={'100vw'} height={'100vh'}/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web3} alt='' className='rounded-lg object-cover responsive' width={'100vw'} height={'100vh'}/>
            </div>
            <div className='basis-1/3 flex-1'>
            <Image src={web2} alt='' className='rounded-lg object-cover responsive' width={'100vw'} height={'100vh'}/>
            </div>
          </div>
        </section>
      </main> 
    </div>
  )
}
