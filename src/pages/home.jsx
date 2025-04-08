import { useLayoutEffect } from "react"
import { NavLink } from "react-router-dom";

const WebLink = ({children, link}) => {
    return(
        <NavLink
            to={link}
            style={({isActive}) => {
                return {
                    color: isActive ? "red" : "purple",
                }
            }}
            className="hover:underline"
        >
            {children}
        </NavLink>
    )
}

//Home page
const Home = () => {
    useLayoutEffect(() => {
        document.title = "Home";
    }, [])
    
    return(
        <div className="flex flex-row justify-end">
        <div className="[&_p]:font-light">
            <h2 className="text-xl font-bold">Welcome!</h2>
            <p>Hi! &#x1F44B;</p>
            <br/>
            <p>This is a simple website meant to showcase my personal work and to give a bit information about myself.</p>
            <p>Website utilizes few modern technologies including <WebLink link="https://react.dev/">ReactJs</WebLink>, <WebLink link="https://vite.dev/">Vite</WebLink> and <WebLink link="https://www.heroui.com/">HeroUI</WebLink><span className="font-normal">&#x1F448; Previously NextUI</span>.</p>
            <br/>
            <p>Currently open for work. If interested, feel free to contact me using any links in footer.</p>
            <br/>
            <p>P.S.: Website still WIP as some things like responsive design require fixing.</p>
        </div>
        <img src="sample2.png" alt="flowers-azalea" className="outline outline-[#090604] outline-offset-4 mt-2 ml-4 w-auto h-[500px]"/>
    </div>
    )
}

export default Home