import { motion } from "motion/react"

//Fade in animation when loading in About page via Framer
const FadeIn = ({children, delaySec}) => {
    return(
        <motion.div
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{duration: 1, delay: delaySec, ease: "linear"}}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn