import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import FundingList from "./routes/FundingList"
import IdolFundingList from "./routes/parameter/IdolFundingList";
import SearchFundingList from "./routes/parameter/SearchFundingList";
import SaleList from "./routes/SaleList";
import CategorySaleList from "./routes/parameter/CategroySaleList";

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
        {
            path: "sale-items",
            element: <SaleList />,
        },
        {
            path: "sale-items/:category",
            element: <CategorySaleList />,
        },
        
    ]
}])

export default router;