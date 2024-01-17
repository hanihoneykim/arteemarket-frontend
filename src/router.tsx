import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import FundingList from "./routes/FundingList"
import IdolFundingList from "./routes/parameter/IdolFundingList";
import SearchFundingList from "./routes/parameter/SearchFundingList";

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
            element: <FundingList />,
        },
        {
            path: "funding-items/:category",
            element: <IdolFundingList />,
        },
        {
            path: "funding-items/search/:search_keyword",
            element: <SearchFundingList />,
        },
    ]
}])

export default router;