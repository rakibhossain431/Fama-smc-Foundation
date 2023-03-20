import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Coin from "./Pages/Coin/Coin";
import Consumers from "./Pages/Consumers/Consumers";
import Enterprise from "./Pages/Enterprise/Enterprise";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Government from "./Pages/Government/Government";
import Home from "./Pages/Home/Home";
import Journey from "./Pages/Journey/Journey";
import Labs from "./Pages/Labs/Labs";
import Nft from "./Pages/Nft/Nft";
import SMCWallet from "./Pages/SMCWallet/SMCWallet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "enterprise",
        element: <Enterprise />,
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
    ],
  },
  {
    path: "get-in-touch",
    element: <GetInTouch />,
  },
]);

export default router;
