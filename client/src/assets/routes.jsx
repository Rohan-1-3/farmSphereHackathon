import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact", // Assuming "products" maps to Contact
                element: <Contact />,
            },
        ],
    },
]);

export default router;
