import { useLayoutEffect } from "react";

//Some custom components I built for this page
import ListItem from "../components/list";
import ProfilePhoto from "../components/photo";
import FadeIn from "../components/fade";

import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiLua } from "react-icons/si";
import { FaPython } from "react-icons/fa";

//About page, very basic. Nothing to see here.
const About = () => {
    useLayoutEffect(() => {
        document.title = "About";
    }, [])    

    return(
        <>
        <div className="flex flex-row">
            <div className="[&>ul]:pl-10 w-[525px] ml-[10px] [&_p]:font-light">
                <FadeIn delaySec={0}>
                    <h2 className="text-2xl font-semibold">History</h2>
                    <p>Have been programming since around 2009 creating simple 2D GameMaker games, and websites such as personal Minecraft page. 
                        Usually I get inspiration for making things through websites such as Pinterst or personal life experiences.
                    </p>
                    <br/>
                    <p>Not too long ago graduated from university with 2:2 degree in Computer Science, currently seeking work experience as a software dev.</p>
                </FadeIn>
                <br/>
                <FadeIn delaySec={1}>
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <ul className="grid grid-cols-3">
                        {/*Ugly monster of a code that I could shorten but whatever*/}
                        <ListItem listIcon={<IoLogoJavascript/>} listItem={"JavaScript"}/>
                        <ListItem listIcon={<IoLogoReact/>} listItem={"React Js"}/>
                        <ListItem listIcon={<SiNextdotjs/>} listItem={"Next Js"}/>
                        <ListItem listIcon={<FaJava/>} listItem={"Java"}/>
                        <ListItem listIcon={<FaPhp/>} listItem={"PHP"}/>
                        <ListItem listIcon={<GrMysql/>} listItem={"MySQL"}/>
                        <ListItem listIcon={<SiLua/>} listItem={"Lua"}/>
                        <ListItem listIcon={<FaPython/>} listItem={"Python"}/>
                    </ul>
                </FadeIn>
                <br/>
                <FadeIn delaySec={2}>
                    <h2 className="text-2xl font-semibold">Experience</h2>
                    <p>Have been working in retail for 3 years starting 2nd year in university, allowing me to improve on both my communication and teamworking skills.</p>
                </FadeIn>
            </div>
            <FadeIn delaySec={0} className="w-max h-max">
                <ProfilePhoto/>
                <p className="text-gray-500">Hover over image &#x1F60F;</p>
            </FadeIn>
        </div>
        </>
    )
}

export default About