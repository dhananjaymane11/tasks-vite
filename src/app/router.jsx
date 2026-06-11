import { createBrowserRouter } from "react-router";

import ProtectedRoute from "./ProtectedRoute";
import Tasks from "../screens/tasks";
import Notes from "../screens/notes";
import Profile from "../screens/profile";
import Login from "../screens/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Tasks />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
