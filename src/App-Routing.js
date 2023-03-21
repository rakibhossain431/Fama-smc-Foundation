import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Layout from "./Layout/Layout";
import Coin from "./Pages/Coin/Coin";
import Consumers from "./Pages/Consumers/Consumers";
import Developers from "./Pages/Developers/Developers";
import Enterprise from "./Pages/Enterprise/Enterprise";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Government from "./Pages/Government/Government";
import Home from "./Pages/Home/Home";
import Impact from "./Pages/Impact/Impact";
import Journey from "./Pages/Journey/Journey";
import Labs from "./Pages/Labs/Labs";
import Nft from "./Pages/Nft/Nft";
import Partners from "./Pages/Partners/Partners";
import Relations from "./Pages/Relations/Relations";
import SMCWallet from "./Pages/SMCWallet/SMCWallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "consumers",
        element: <Consumers />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "coin",
        element: <Coin />,
      },
      {
        path: "wallet",
        element: <SMCWallet />,
      },
      {
        path: "nft",
        element: <Nft />,
      },
      {
        path: "government",
        element: <Government />,
      },
      {
        path: "developers",
        element: <Developers />,
      },
      {
        path: "enterprise",
        element: <Enterprise />,
      },
      {
        path: "lab",
        element: <Labs />,
      },
      {
        path: "journey",
        element: <Journey />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
      {
        path: "relation",
        element: <Relations />,
      },
      {
        path: "investor-relations",
        element: <Relations />,
      },
      {
        path: "get-in-touch",
        element: <GetInTouch />,
      },
    ],
  },
]);

export default router;
