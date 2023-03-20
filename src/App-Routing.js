import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Coin from "./Pages/Coin/Coin";
import Developers from "./Pages/Developers/Developers";
import Enterprise from "./Pages/Enterprise/Enterprise";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Government from "./Pages/Government/Government";
import Home from "./Pages/Home/Home";
import Impact from "./Pages/Impact/Impact";
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
        path: "enterprise",
        element: <Enterprise />,
      },
      {
        path: "lab",
        element: <Labs />,
      },
      {
        path: "impact",
        element: <Impact />,
      },
    ],
  },
  {
    path: "get-in-touch",
    element: <GetInTouch />,
  }
]);

export default router;
