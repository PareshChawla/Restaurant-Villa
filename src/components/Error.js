import ErrorImg from "../assets/img/11104.jpg";
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    return (
        <>
            <div className="error-page">
                <h1>Oops!!!</h1>
                <h2>{err.status +" : "+err.statusText}</h2>
                <img src={ErrorImg} loading="lazy" alt="errorImage" />
            </div>
        </>
    )
}

export default Error;