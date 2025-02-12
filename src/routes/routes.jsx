import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Home";
import Albums from "../pages/Albums";
import Artist from "../pages/Artist";
import Contact from "../pages/Contact";
import Layout from "../components/Layout";
import Error from "../pages/Error";
import Search from "../pages/Search";
import AdminLogin from "../pages/AdminLogin";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AdminDashboard from "../pages/AdminDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Navbar accessible on all pages
    children: [
      {
        index: true, // Default page is Homepage
        element: <Homepage />,
      },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "artist",
        element: <Artist />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />, // Error page
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />, // Admin login (outside Layout)
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoutes>
        <AdminDashboard />
      </ProtectedRoutes>
    ),
  },
]);

export default routes;
