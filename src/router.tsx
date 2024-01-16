import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import FundingList from "./routes/FundingList"

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
            path:"/funding-items",
            element:<FundingList />,
        },
    ]
}])

export default router;