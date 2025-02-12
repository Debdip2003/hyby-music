import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
