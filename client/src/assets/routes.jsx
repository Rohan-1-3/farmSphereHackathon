import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage";
import SignupPage from "../components/Forms/SignupPage";
import LoginPage from "../components/Forms/LoginPage";
import IsFarmerPage from "../components/Forms/IsFarmerForm";

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
            {
                path: "/user",
                element: <IsFarmerPage />
            },
            {
                path: "/signup",
                element: <SignupPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            }
        ],
    },
]);

export default router;
