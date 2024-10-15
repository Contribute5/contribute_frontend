import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChallengesPage from "./pages/challengesPage/ChallengesPage";
import SingleChallenge from "./pages/singleChallenge/SingleChallenge";
import { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/challenges",
      element: <ChallengesPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />,
    },
    {
      path: "/single_challenge/:id",
      element: <SingleChallenge />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
