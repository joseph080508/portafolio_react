import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "projects",
                element: <Project />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    }
]);

export default router