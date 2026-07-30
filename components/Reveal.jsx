
"use client";
import { motion } from "motion/react";
export default function Reveal({children,delay=0,className=""}){
 return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.7,delay}}>{children}</motion.div>
}
