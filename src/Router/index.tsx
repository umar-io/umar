import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Index from "../Pages/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element:(
            <>
            <Layout/>
            </>
        ),
        children: [
            {
              index: true,
              path: "/",
              element: <Index />,
            }
          ],
    }
]);

export default router