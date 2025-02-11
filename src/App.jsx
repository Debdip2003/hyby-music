import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ThemeProvider } from "../context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
