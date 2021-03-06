import { useRoutes } from "react-router-dom";
import Home from "./../pages/home/Home";
import Login from "./../components/authComponent/Login";
import Signup from "../components/authComponent/Signup";
import NotFound from "../pages/notfound/NotFound";
import MyProfile from "./../components/profile/MyProfile";
import UploadProfilePhoto from "../components/profile/UploadProfilePhoto";
import MyAccount from "../components/profile/MyAccount";
import PasswordReset from "./../components/authComponent/PasswordReset";
import PhoneAuth from "./../components/authComponent/PhoneAuth";
import ProtectedRoute from "./../helpers/ProtectedRoute";
import UpdatePassword from "./../components/profile/UpdatePassword";

import Movies from "../components/movies/Movies";
import UploadMovie from "../components/movies/UploadMovie";
import MovieDetails from "../components/movies/MovieDetails";

let StreamBaseRoutes = () => {
  let StreamRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "password-reset",
      element: <PasswordReset />,
    },
    {
      path: "phone-auth",
      element: <PhoneAuth />,
    },
    {
      path: "user",
      element: (
        <ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "upload-photo",
          element: <UploadProfilePhoto />,
        },
        {
          path: "update-password",
          element: <UpdatePassword />,
        },
        {
          path: "my-account",
          element: <MyAccount />,
        },
        {
          path: "movie",
          element: (
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          ),

          children: [
            {
              path: "upload-movie",
              element: <UploadMovie />,
            },
          ],
        },
      ],
    },

    {
      path: ":movieName/:id",
      element: (
        <ProtectedRoute>
          <MovieDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return StreamRoutes;
};

export default StreamBaseRoutes;
