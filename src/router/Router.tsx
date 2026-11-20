import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

// eslint-disable-next-line react-refresh/only-export-components
const ProjectDetail = lazy(() => import("../pages/ProjectDetail/ProjectDetail"));
// eslint-disable-next-line react-refresh/only-export-components
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

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
                path: "projects/:id",
                element: <Suspense fallback={null}><ProjectDetail /></Suspense>,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <Suspense fallback={null}><NotFound /></Suspense>,
            },
        ],
    }
]);

export default router;
