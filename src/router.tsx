import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import FundingList from "./routes/FundingList"
import IdolFundingList from "./routes/category/IdolFundingList";

const router = createBrowserRouter([{
    path:"/",
    element:<Root/>,
    errorElement:<NotFound/>,
    children:[
        {
            path:"",
            element:<Home />,
        },
        {
            path: "funding-items",
            children: [
                {
                path: "",
                element: <FundingList />,
                },
                {
                path: ":category",
                element: <IdolFundingList />,
                },
            ],
        },
    ]
}])

export default router;