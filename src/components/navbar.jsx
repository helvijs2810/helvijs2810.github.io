import { NavLink } from "react-router-dom"
import { Navbar, NavbarBrand, NavbarItem, NavbarContent } from "@nextui-org/react"

//Navigation bar component
const Navigation = () => {
    return (
        <Navbar className="h-[64px] border-b-2 border-[#909090]/[0.3]">
            <NavbarBrand className="h-[64px]">
                {/*look, I know it looks bad but I can assure you that I am not racist*/}
                <NavLink to="/" style={({isActive}) => {
                    return {
                        color: isActive ? "black" : "black",
                    }
                }}>
                    <div className="flex flex-row hover:italic">
                        <div className="h-[64px]">
                            <p className="text-8xl font-[Garamond]">G</p>
                        </div>
                        <div className="h-[64px] w-[240px] overflow-hidden">
                            <p className="text-8xl font-[Garamond]">ints</p>
                        </div>
                    </div>
                </NavLink>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <NavLink to="/" className="hover:text-orange-500">Home</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/projects" className="hover:text-orange-500">Projects</NavLink>
                </NavbarItem>
                <NavbarItem>
                    <NavLink to="/about" className="hover:text-orange-500">About</NavLink>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Navigation