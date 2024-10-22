import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/Shared/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute>
                            <News></News>
                        </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;