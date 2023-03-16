import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Coin from "./Pages/Coin/Coin";
import GetInTouch from "./Pages/GetInTouch/GetInTouch";
import Government from "./Pages/Government/Government";
import Home from "./Pages/Home/Home";
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
        path: "get-in-touch",
        element: <GetInTouch />,
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
        path: "lab",
        element: <Labs />,
      },
    ],
  },
]);

export default router;
