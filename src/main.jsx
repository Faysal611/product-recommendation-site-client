import { RouterProvider } from "react-router";
import Layout from "./Layout";
import { createRoot } from "react-dom/client";
import { router } from "./Router";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}></RouterProvider>
)