import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          element: authUser ? <Home /> : <Navigate to="/login" />,
          index: true,
        },
        {
          path: "/login",
          element: authUser ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "/signup",
          element: authUser ? <Navigate to="/" /> : <SignUp />,
        },

        // {
        //   path: "/logout",
        //   element: <Logout />,
        // },
      ],
      // errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
