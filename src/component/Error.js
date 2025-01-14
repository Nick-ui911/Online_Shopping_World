import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    // console.log(err);
return (
    <div>
        <h1>OOooppss...</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status + "  " + err.statusText}</h2>
        <h2></h2>
    </div>
)
};
export default Error;