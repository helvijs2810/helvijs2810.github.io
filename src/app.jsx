import { Outlet } from "react-router-dom"
import Navigation from "./components/navbar"
import Footer from "./components/footer"

const App = () => {
    return(
        <>
        <div className="w-[100%] h-[800px] flex flex-col justify-center items-center">
            <div className="w-[800px] h-[800px] font-noto">
                <Navigation className="font-noto"/>
                <div className="w-[100%] h-[688px] flex flex-row pt-20 z-20">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default App