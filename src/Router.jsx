import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./components/Home";
import Error from "./components/Error";
import Queries from "./components/Queries";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Private from "./components/Private";
import RecommendationForMe from "./components/RecommendationForMe";
import MyQueries from "./components/MyQueries";
import MyRecommendation from "./components/MyRecommendation";
import AddQuery from "./components/AddQuery";
import QueryDetails from "./components/QueryDetails";
import Loading from "./components/Loading";
import ContactPage from "./components/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: Error,
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/queries",
                Component: Queries,
            },
            {
                path: "/contact",
                Component: ContactPage
            },
            {
                path: "/signin",
                Component: Signin
            },
            {
                path: "/signup",
                Component: Signup
            },
            {
                path: "/recommendationsForMe",
                element: <Private><RecommendationForMe></RecommendationForMe></Private>
            },
            {
                path: "/myQueries",
                element: <Private><MyQueries></MyQueries></Private>
            },
            {
                path: "/myRecommendations",
                element: <Private><MyRecommendation></MyRecommendation></Private>
            },
            {
                path: "/addQuery",
                element: <Private><AddQuery></AddQuery></Private>
            },
            {
                path: "/queryDetails/:queryID",
                Component: QueryDetails,
                loader: ({ params }) => fetch(`https://product-recommendation-system-serve.vercel.app/query/${params.queryID}`),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])