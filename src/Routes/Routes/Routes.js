import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
// import Opinion from "../../Pages/Home/Services/Servicedetails/Opinion/Opinion";
import Servicedetails from "../../Pages/Home/Services/Servicedetails/Servicedetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Myreview from "../../Pages/My Review/Myreview";
import Register from "../../Pages/Register/Register";
import Update from "../../Pages/Update/Update";
import Privateroutes from "../../Private/Privateroutes/Privateroutes";
import Main from "../Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://my-photography-server-side-2.vercel.app/reviews/${params.id}`),
                element: <Update></Update>
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
                path: '/myreview',
                element: <Privateroutes><Myreview></Myreview></Privateroutes>
            },

            {
                path: '/services/:id',
                loader: ({ params }) => {
                    return fetch(`https://my-photography-server-side-2.vercel.app/services/${params.id}`)
                },
                element: <Servicedetails></Servicedetails>
            }
        ])
    }
])
export default routes