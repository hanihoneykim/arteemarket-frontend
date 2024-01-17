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
            children: [
                {
                path: "",
                element: <FundingList />,
                },
                {
                path: ":search_keyword",
                element: <SearchFundingList />,
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