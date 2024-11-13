import { createBrowserRouter } from "react-router-dom";
import { Home, Maze } from "./routes";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/maze",
    element: <Maze />,
  },
]);

export default router;
