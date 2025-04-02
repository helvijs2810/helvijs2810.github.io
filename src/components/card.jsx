import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"

//Custom card component for displaying projects in Projects page
const ProjectCard = ({pageURL, imageURL, projectTitle, projectContent}) => {
    return(
        <Card className="w-[320px] h-[240px] scale-100 hover:scale-105 duration-300 ease-in-out m-2" isPressable onPress={() => window.location.href = pageURL}>
            <CardHeader className="w-full h-2/3 p-0">
                <img alt="project" src={imageURL} className="w-full h-full object-cover"/>
            </CardHeader>
            <CardBody className="w-full h-1/2">
                <h4 className="font-bold">{projectTitle}</h4>
                <p>{projectContent}</p>
            </CardBody>
        </Card>
    )
}

export default ProjectCard