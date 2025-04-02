import { useLayoutEffect, useState } from "react";
import ProjectCard from "../components/card";
import { animate, useAnimate } from "framer-motion";

//Fetch JSON that records all my project info. Could used some API to pull stuff from Git, but too much hassle for small project
const response = await fetch("/projects.json");
const file = await response.json();

var elemPos = 0;

//Functions to move content left or right using elemPos to keep track of current position
//Very janky way of implementation, but it works so I do not want to touch it

const moveRight = async () => {
    var elemToMove = document.getElementById("toMove");
    await animate(elemToMove, {opacity: 0}, {duration: 0.5}, {ease: "linear"}); //Wait for animation to make sure things don't transition in middle of it
    if(elemPos - 800 <= file.projects.length * -800){
        elemPos = 0;
    } else {
        elemPos -= 800;
    }
    elemToMove.style.translate = elemPos + "px";
    animate("div", {opacity: 1}, {duration: 0.5}, {ease: "linear"});
}

const moveLeft = async() => {
    var elemToMove = document.getElementById("toMove");
    await animate(elemToMove, {opacity: 0}, {duration: 0.5}, {ease: "linear"}); //Repeat code similar to moving right, with some modifications to checks
    if(elemPos + 800 > 0){
        console.log(file.projects.length);
        elemPos = (file.projects.length-1) * -800;
    } else {
        elemPos += 800;
    }
    elemToMove.style.translate = elemPos + "px";
    animate("div", {opacity: 1}, {duration: 0.5}, {ease: "linear"});
}

//Project page code

const Projects = () => {
    useLayoutEffect(() => {
        document.title = "Projects"; 
    }, [])

    const [scope, animate] = useAnimate(); //Set Framer animation hook

    //Have a grind to hold each page in a single cell
    //Map each array to own grid, where each grid holds up to 4 cards showcasing projects
    //No checks in place cause cause I do not care as much about flexability as things functioning at the moment
    return (
        <div className="overflow-hidden">
            <div className="inline-flex" id="toMove" ref={scope}>
            <div className="grid grid-flow-col gap-0 grid-rows-1"> 
            {file.projects.map((item, index) => (
                <div className="grid grid-cols-2 gap-4 w-max h-max mr-14 ml-14" id="cardContainer" key={index}>
                    {item.section.map((item2, index2) => (
                        <ProjectCard
                            pageURL={item2.url}
                            imageURL={item2.image}
                            projectTitle={item2.title}
                            projectContent={item2.content}
                            key={index2}
                        />
                    ))}
                </div>
                
            ))}
            </div>
            </div>
            <button className="bg-slate-600 rounded-[50%] size-4" onClick={moveLeft}></button>
            <button className="bg-red-400 rounded-[50%] size-4" onClick={moveRight}></button>
        </div>
    )
}

export default Projects