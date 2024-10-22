import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-ring loading-lg text-purple-600 my-20 mx-auto text-center"></span>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}