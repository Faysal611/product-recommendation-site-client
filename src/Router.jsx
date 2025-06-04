import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./components/Home";
import Error from "./components/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: Error,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])