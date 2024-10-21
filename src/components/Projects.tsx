import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
{
    id: 0,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript-based tool for fetching and displaying real-time weather data.",
    img: "/project_5.png",
    tags: ["Next.Js" , "Node" , "CSS" , "Tpyscript"],
},
{
    id: 1,
    title: "Static Interactive Resume",
    desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing user to showcase their skills dynamically. ",
    img: "/project_2.png",
    tags: ["HTML" , "Node" , "CSS" , "Typescript"],
},
{
  id: 2,
  title: "Currency Converter Project",
  desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
  img: "/project_3.png",
  tags: ["HTML" , "Node" , "CSS" , "Typescript"],
},
{
  id: 3,
  title: "Simple Calculator Project",
  desc: "A basic HTML, CSS and Typescript calculator for performing essenial arithmatic operators.",
  img: "/project_4.png", 
  tags: ["HTML" , "Node" , "CSS" , "Typescript"],
},
{
  id: 4,
  title: "Dynamic Resume",
  desc: "A Typescript-based dynamic resume built with HTML and CSS, allowing user to showcase their skills dynamically.",
  img: "/project_1.jpg",
  tags: ["HTML" , "Node" , "CSS" , "Typescript"],
},
{
  id: 5,
  title: "Todo List",
  desc: "A React and Typesript based app for messaging and organizing your tasks efficieny.",
  img: "/project_6.png",
  tags: ["React", "Node", "CSS", "Typescript"],
},

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'  data-aos="zoom-in-right" >
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
       {data.map((el) => (<Card 
       key={el.id}
       title={el.title}
       desc={el.desc}
       img={el.img}
       tags={el.tags}


       />))}
      </div>
    </div>
  )
}

export default Projects
