import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/Layout/MainLayout";


const routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element: <Home/>
            }
        ]
    }
])

export default routes;