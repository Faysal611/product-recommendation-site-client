import { RouterProvider } from "react-router";
import Layout from "./Layout";
import { createRoot } from "react-dom/client";
import { router } from "./Router";
import ContextProvider from "./ContextProvider";

createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
)