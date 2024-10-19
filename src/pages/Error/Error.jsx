import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col gap-4 text-center mt-10">
            <h2 className="text-5xl text-red-600">Opps...!</h2>
            <p className="text-3xl">No content available at this moment</p>
            <Link to={'/'}><button className="btn btn-warning">Go Back</button></Link>
        </div>
    );
};

export default Error;