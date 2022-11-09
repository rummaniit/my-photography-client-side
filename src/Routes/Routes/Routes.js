import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Opinion from "../../Pages/Home/Services/Servicedetails/Opinion/Opinion";
import Servicedetails from "../../Pages/Home/Services/Servicedetails/Servicedetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Privateroutes from "../../Private/Privateroutes/Privateroutes";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            // {
            //     path: '/opinion',
            //     element: <Privateroutes><Opinion></Opinion></Privateroutes>
            // },
            {
                path: '/addservices',
                element: <Privateroutes><AddServices></AddServices></Privateroutes>
            },

            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                },
                element: <Servicedetails></Servicedetails>
            }
        ])
    }
])
export default routes