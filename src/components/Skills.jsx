import React from 'react'
import html from "../assets/pg-lang/html.png"
import css from "../assets/pg-lang/css.png";
import js from "../assets/pg-lang/js.png"
import react from "../assets/pg-lang/react.png";
import types from "../assets/pg-lang/typescript.png";
import tailcss from "../assets/pg-lang/tailwind.png";
import gsapicon from "../assets/pg-lang/newgsap.png";
import framer from "../assets/pg-lang/newframer.png";
import nodeicon from "../assets/pg-lang/newnode.png";
import expressicon from "../assets/pg-lang/express.png";
import mysql from "../assets/pg-lang/mysql.png";
import mongo from "../assets/pg-lang/mongo.png";
import npmicon from "../assets/pg-lang/npm.png";
import giticon from "../assets/pg-lang/git.png";
import githubicon from "../assets/pg-lang/newgithub.png";
import redux from "../assets/pg-lang/redux.png"
import { motion } from 'framer-motion'
import { BsFlower3 } from 'react-icons/bs'


const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }
  })
};

const Skills = () => {
  return (
    <>
    <div id="skills" className=' flex flex-col  justify-center items-start px-4 py-2 mt-[10%] gap-8 border-b-gray-700'>
      <div className=' flex items-center justify-start gap-4 text-xl font-bold text-gray-600'>
        <motion.span
        initial={{rotate:0}}
        animate={{rotate:360}}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{fontSize:"1.5em"}}
        variants={fadeInVariants}
        >
          <BsFlower3/></motion.span>
        <p className='text-gray-600 text-left text-2xl font-bold'>MY STACK</p>
      </div>
      <div className='flex flex-col items-center justify-between gap-8 px-4 py-2' id="animate-div"
      >
        <motion.div className='flex items-start justify-center border-b-gray-950 mb-8'
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={1}
        >
          <h1 className='text-3xl text-gray-600 font-bold w-[50%] '>FRONTEND</h1>
          <div className='flex items-start justify-end w-[50%] flex-wrap gap-5 px-10'>
              <div className='flex items-center justify-center mr-4'>
                <img src={html} alt="HTML"  className='w-12' />
                <h1 className="text-xl font-semibold text-gray-600">HTML</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={css} alt="css"  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">CSS</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={js} alt=""  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">JavaScript</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={react} alt=""  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">React</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={redux} alt=""  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Redux</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={types} alt=""  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Typescript</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={tailcss} alt="" className='w-12' />
                <h1 className="text-xl font-semibold text-gray-600">Tailwind CSS</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={gsapicon} alt="" className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">GSAP</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={framer} alt="" className='w-12' />
                <h1 className="text-xl font-semibold text-gray-600">Framer Motion</h1>
              </div>

          </div>
        </motion.div>
        <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={2}
         className='flex items-start justify-center border-b-gray-950 mb-8 w-full'>
          <h1 className='text-3xl text-gray-600 font-bold w-[50%] '>BACKEND</h1>
          <div className='flex justify-center items-start w-[50%] flex-wrap gap-5 px-10'>
              <div className='flex items-center justify-center gap-3'>
                <img src={nodeicon} alt="HTML"  className='w-14' />
                <h1 className="text-xl font-semibold text-gray-600">Node JS</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={expressicon} alt="css"  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Express JS</h1>
              </div>

          </div>
        </motion.div>
        <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={3}
        className='flex items-start justify-center border-b-gray-950 mb-8 w-full'>
          <h1 className='text-3xl text-gray-600 font-bold w-[50%] '>DATABASE</h1>
          <div className='flex justify-center items-start w-[50%] flex-wrap gap-5 px-10'>
              <div className='flex items-center justify-center gap-3'>
                <img src={mysql} alt="HTML"  className='w-14' />
                <h1 className="text-xl font-semibold text-gray-600">MySQL</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={mongo} alt="css"  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Mongo DB</h1>
              </div>

          </div>
        </motion.div>
        <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        custom={4}
        className='flex items-start justify-center border-b-gray-950 mb-8 w-full'>
          <h1 className='text-3xl text-gray-600 font-bold w-[50%] '>TOOLS</h1>
          <div className='flex justify-center items-end w-[50%] flex-wrap gap-5 px-10'>
              <div className='flex items-center justify-center gap-3'>
                <img src={npmicon} alt="HTML"  className='w-14' />
                <h1 className="text-xl font-semibold text-gray-600">NPM</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={giticon} alt="css"  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Git</h1>
              </div>
              <div className='flex items-center justify-center gap-3'>
                <img src={githubicon} alt="css"  className='w-12'/>
                <h1 className="text-xl font-semibold text-gray-600">Github</h1>
              </div>

          </div>
        </motion.div>

      </div>

    </div>
    </>
  )
}

export default Skills