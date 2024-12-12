"use client"
import { Description, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import {FaHtml5, FaCss3, FaFigma, FaNodeJs ,FaJs ,} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { info } from 'console';
import { title } from 'process';
import classNames from 'classnames';

import { JetBrains_Mono } from 'next/font/google';

const jetbrians_mono = JetBrains_Mono( {
  subsets : ["latin"],
  weight : ["400", "500", "600"]
})




function MyTabs() {
    

// data
const experience ={
    title : "Experience",
    description : "Passionate front-end developer with hands-on experience in building self-initiated projects. Skilled in creating responsive and user-friendly interfaces using modern frameworks like React.js and Next.js. Dedicated to continuous learning and refining skills through practical project development.",
    info :[
        {
            position : "Frontend Web Developer",
            company : "Remote",
            duration : "0"

        },
        {
            position : "Frontend Web Developer",
            company : "Remote",
            duration : "0"

        },
        {
            position : "Frontend Web Developer",
            company : "Remote",
            duration : "0"

        },
        {
            position : "Frontend Web Developer",
            company : "Remote",
            duration : "0"

        }
     ]
}



const education = {
    title : "Education",
    description : "Bachelor of Science (BSc) Shahid Benazir Bhutto University, Nawabshah Currently Pursuing",
    info :[
        {
            institute : "Bhattai High school",
            field : "metric",
            duration : "2019"

        },
        {
            institute : "Govt: Digree collage K.N shah",
            field : "Intermediate",
            duration : "2019 - 2021"

        },
        {
            institute : "BSC2",
            field : "Shaheed Banzirabad Universty Nawabshah",
            duration : "2021 - 2024"

        },
        {
            institute : "Governer Sindh House",
            field : "Ai Web 3.0",
            duration : "2024"

        },
     ]
}


const skills={
  
    title:'My Skills',
    description:'Proficient in HTML, CSS, and JavaScript for creating responsive and dynamic web applications. Experienced with TypeScript for type-safe development and skilled in using Next.js for building server-side rendered and performant React-based apps. Familiar with Sanity CMS for managing structured content efficiently.',
  skillList:[
    {
  icon:<FaHtml5/>,
  name:"html 5"
    },
    {
      icon:<FaCss3/>,
      name:"css3"
        },
        {
          icon:<FaJs/>,
          name:"java-type(script)"
            },
        {
          icon:<FaFigma/>,
          name:"figma"
            },
            {
              icon:<FaNodeJs/>,
              name:"node.js"
                },
                {
                  icon:<SiTailwindcss/>,
                  name:"tailwindcss"
                    },
                    {
                      icon:<SiNextdotjs/>,
                      name:"next.js"
                        },
  
   
  ]
  }



const about ={
    title:'About Me ',
    description:"I am currently enrolled in the Gen AI and Web 3.0 course at the Governor House Institute while pursuing a Bachelor of Science degree at Shahid Benazir Bhutto University, Nawabshah. With expertise in HTML, CSS, JavaScript, TypeScript, Next.js, and Sanity CMS, I am dedicated to building innovative and efficient front-end solutions",
  info:[
    {
    fieldName:"Name",
    fieldValue:"Kabir Iqbal"
  },
  {
    fieldName:"Phone",
    fieldValue:"03163956302"
  },
  {
    fieldName:"Nationality",
    fieldValue:"Pakistani"
  },
  {
    fieldName:"Experience",
    fieldValue:"1.5 year"
  },
  {
    fieldName:"Freelencer",
    fieldValue:"Available"
  },
  
  {
    fieldName:"Email",
    fieldValue:"kabiriqbal110@gmail.comm"
  },
  {
    fieldName:"linkedin",
    fieldValue:"Kabir Iqbal"
  },
  {
    fieldName:"github",
    fieldValue:"Kabir Iqbal"
  },
  {
    fieldName:"Languages",
    fieldValue:"English, urdu,sindhi"
  },
  ]
  };


  return (
    
        <div className={`bg-backgroundcolor text-white ${jetbrians_mono}`}>
       <TabGroup manual vertical className={`flex flex-col md:flex-row gap-10 md:gap-12 w-[85%] sm:w-[80%] mx-auto justify-between  my-24   `} >
      <TabList className={`flex flex-col`} >
        <Tab className={ ({selected}) => classNames ( ` py-3 my-3 md:px-36 rounded-[10px] text-center items-center bg-[rgba(39,39,44,0.5)]`, selected? "bg-yellow-500 font-semibold text-black " : "") } >Experience</Tab>
        <Tab className={ ({selected}) => classNames ( ` py-3 my-3 md:px-36 rounded-[10px] text-center items-center bg-[rgba(39,39,44,0.5)]`, selected? "bg-yellow-500 font-semibold text-black " : "") } >Education</Tab>
        <Tab className={ ({selected}) => classNames ( ` py-3 my-3 md:px-36 rounded-[10px] text-center items-center bg-[rgba(39,39,44,0.5)]`, selected? "bg-yellow-500 font-semibold text-black " : "") } >Skills</Tab>
        <Tab className={ ({selected}) => classNames ( ` py-3 my-3 md:px-36 rounded-[10px] text-center items-center bg-[rgba(39,39,44,0.5)]`, selected? "bg-yellow-500 font-semibold text-black " : "") } >About</Tab>
      </TabList>
      <TabPanels>
        <TabPanel> <div className='flex flex-col'> 
            <h1 className='text-yellow-500 text-3xl mb-4' > {experience.title} </h1> 
            <p className='text-md  tracking-[1px] my-1'> {experience.description} </p>
             </div>
             </TabPanel>

             <TabPanel> <div className='flex flex-col'> 
            <h1 className='text-yellow-500 text-3xl mb-4' > {education.title} </h1> 
            <p className='text-md  tracking-[1px] my-1'> {education.description} </p>
             </div>
             </TabPanel>  
             
             <TabPanel> <div className='flex flex-col '> 
            <h1 className='text-yellow-500 text-3xl mb-4' > {skills.title} </h1> 
            <p className='text-md  tracking-[1px] my-1' > {skills.description} </p>
             </div>
             </TabPanel>  

          <TabPanel> <div className='flex flex-col'> 
            <h1 className='text-yellow-500 text-3xl mb-4' > {about.title} </h1> 
            <p className='text-md  tracking-[1px] my-1' > {about.description} </p>
             </div>
             
             </TabPanel>  
      </TabPanels>
    </TabGroup>
    </div>
    
  )
}

export default MyTabs
