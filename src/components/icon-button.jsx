import { motion } from "framer-motion"

//Custom component for flippin animations on icons in footer using Framer
const IconLink = ({targetLink, linkIcon}) => {
    return(
        <>
            <motion.a 
                href={targetLink}
                whileHover={{
                    rotate: 15,
                    transition: {
                        repeat: 1,
                        repeatType: "reverse",
                        duration: 2
                    },
                }}
            >
                {linkIcon}
            </motion.a>
        </>
    )
}

export default IconLink