import { Children, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { NextUIProvider } from "@nextui-org/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

//Importing all pages for router
import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/about"
import App from "./app"

//Setup CSS and Error page
import "./index.css"
import "./pages/main.css"
import ErrorPage from "./pages/error"

//Basic router setup
const root = createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
        ],
    },
])

//Renderer with NextUI
root.render(
    <StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </StrictMode>,
)