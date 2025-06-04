import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./components/Home";
import Error from "./components/Error";
import Queries from "./components/Queries";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: Error,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/queries",
                Component: Queries
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/signin",
                Component: Signin
            },
            {
                path: "/signup",
                Component: Signup
            }
        ]
    }
])