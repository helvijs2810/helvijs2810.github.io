import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error)
    
    return (
        <>
            <h1>Whoops</h1>
            <p>Some kind of fucky whuckies happened here: </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    )
}

export default ErrorPage