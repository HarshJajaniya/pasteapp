import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Paste from "./components/paste";
import Viewpaste from "./components/viewpaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/paste",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/paste/:id",
    element: (
      <div>
        <Navbar />
        <Viewpaste />
      </div>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
