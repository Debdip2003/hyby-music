import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Home";
import Albums from "../pages/Albums";
import Artist from "../pages/Artist";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import Error from "../pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, //make the navbar accessible to all the other pages
    children: [
      {
        index: true, // make the home page as the default page
        element: <Homepage />,
      },
      {
        path: "albums",
        element: <Albums />, //album page
      },
      {
        path: "artist",
        element: <Artist />, //artist page
      },
      {
        path: "contact",
        element: <Contact />, //contact page
      },
    ],
    errorElement: <Error />, //error page
  },
]);

export default routes;
