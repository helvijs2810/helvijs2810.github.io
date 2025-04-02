import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return(
        <>  
            <div className="flex flex-row mt-4 w-[800px] border-b-2 border-t-2 pt-4 pb-4 border-[#909090]/[0.3]">
                <p className="text-[#053D38] w-max">&#169; 2024-2025 Helvijs Petuhovs, under MIT License</p>
                <div className="ml-auto flex flex-row">
                    {/*Should rewrite all the rotations to a single method and fix occasional decoupling of animation on hover (Probably cause object becomes too small for cursor to be on the object)*/}
                    <motion.a href="https://www.linkedin.com/in/hpetuhovs" whileHover={{rotateX: 360 ,transition: {repeat: Infinity, repeatType: "loop", duration: 1, ease: "easeInOut"}}}><FaLinkedin className="w-[32px] h-[32px]"/></motion.a>
                    <motion.a href="https://github.com/helvijs2810" whileHover={{rotateX: 360 ,transition: {repeat: Infinity, repeatType: "loop", duration: 1, ease: "easeInOut"}}}><FaGithub className="w-[32px] h-[32px] ml-5"/></motion.a>
                    <motion.a href="mailto:h.g.petuhovs@gmail.com" whileHover={{rotateX: 360 ,transition: {repeat: Infinity, repeatType: "loop", duration: 1, ease: "easeInOut"}}}><FaGoogle className="w-[32px] h-[32px] ml-5"/></motion.a>
                </div>
            </div>
        </>
    )
}

export default Footer