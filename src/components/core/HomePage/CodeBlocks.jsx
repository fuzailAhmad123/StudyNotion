import React from 'react'
import CTAButton from './CTAButton';
import HighLightText from '../HighLightText';
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation';
import "../../../App.css"


const CodeBlocks = ({
    position ,heading,subheading, ctabtn1 ,ctabtn2, codeblock,backgoundGradient , codeColor
}) => {

 
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
               {/* section-1  */}
                     <div className='w-[50%] flex flex-col gap-4'>
                             {heading}
                             <div className='text-richblack-300 font-bold'>
                                {subheading}
                             </div>
                             <div className='flex gap-7 mt-7'>
                                       <CTAButton active={ctabtn1.active} linkedto={ctabtn1.linkedto}>
                                          <div className='flex gap-2  items-center'>
                                            {ctabtn1.btnText}
                                            <FaArrowRight></FaArrowRight>
                                          </div>
                                       </CTAButton>

                                       <CTAButton active={ctabtn2.active} linkedto={ctabtn2.linkedto}>
                                            {ctabtn2.btnText}
                                       </CTAButton>
                                   
                             </div>
                      </div>

                {/* section- 2*/}
                <div className='h-fit flex flex-row  w-[100%] py-4 lg:w-[500px] text-10[px] bg-richblack-800   relative   '>
                    {/* bg gradiant  */}
                       <div className={`${backgoundGradient ? "gradiant1" :"gradiant2"}`}></div>
                    <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold z-2 '>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </div>

                    <div className={`w-[90%] flex  flex-col gap-2 font-bold font-none ${codeColor} pr-2 z-2`}>
                     <TypeAnimation
                             sequence={[codeblock , 2000, ""]}    
                              repeat={Infinity}
                              cursor={true}
                               style={
                               {
                                whiteSpace:"pre-line",
                                display:"block",
                               
                               }
                               }
                               omitDeletionAnimation={true}
                     />
                    </div>
                </div>
    </div>
  )
}

export default CodeBlocks