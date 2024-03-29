import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root';
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import FundingList from "./routes/FundingList"
import IdolFundingList from "./routes/parameter/IdolFundingList";
import SearchFundingList from "./routes/parameter/SearchFundingList";
import SaleList from "./routes/SaleList";
import CategorySaleList from "./routes/parameter/CategroySaleList";
import SearchSaleList from "./routes/parameter/SearchSaleList";
import FundingUpload from "./routes/FundingUpload";
import SaleUpload from "./routes/SaleUpload";
import Notice from "./routes/Notice";
import Event from "./routes/Events";
import FundingDetail from "./routes/FundingDetail";
import SaleDetail from "./routes/SaleDetail";
import NoticeDetail from "./routes/NoticeDetail";
import EventDetail from "./routes/EventDetail";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Participant from "./routes/Participant";
import Purchase from "./routes/Purchase";
import MyPage from "./routes/mypage/MyPage";
import MyFunding from "./routes/mypage/MyFunding";
import MySale from "./routes/mypage/MySale";
import MyParticipants from "./routes/mypage/MyParticipants";
import MyParticipantDetail from "./routes/mypage/MyParticipantsDetail";
import MyPurchases from "./routes/mypage/MyPurchases";
import MyPurchaseDetail from "./routes/mypage/MyPurchaseDetail";
import MyPageEdit from "./routes/mypage/MyPageEdit";
import KakaoConfirm from "./routes/KakaoConfirm";


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
            path: "funding-items/upload",
            element: <FundingUpload />,
        },
        {
            path: "funding-items/category/:category",
            element: <IdolFundingList />,
        },
        {
            path: "funding-items/search/:search_keyword",
            element: <SearchFundingList />,
        },
        {
            path: "funding-items/:fundingPk",
            element: <FundingDetail />,
        },
        {
            path: "funding-items/:fundingPk/participants",
            element: <Participant />,
        },
        {
            path: "sale-items",
            element: <SaleList />,
        },
        {
            path: "sale-items/category/:category",
            element: <CategorySaleList />,
        },
        {
            path: "sale-items/search/:search_keyword",
            element: <SearchSaleList />,
        },
        {
            path: "sale-items/upload",
            element: <SaleUpload />,
        },
        {
            path: "sale-items/:salePk",
            element: <SaleDetail />,
        },
        {
            path: "sale-items/:salePk/purchases",
            element: <Purchase />,
        },
        {
            path: "notices",
            element: <Notice />,
        },
        {
            path: "notices/:noticePk",
            element: <NoticeDetail />,
        },
        {
            path: "events",
            element: <Event />,
        },
        {
            path: "events/:eventPk",
            element: <EventDetail />,
        },
        {
            path:"login",
            element:<Login />,
        },
        {
            path:"social",
            children:[
                {
                    path:"kakao",
                    element: <KakaoConfirm />,
                }
            ]
        },
        {
            path:"signup",
            element:<SignUp />,
        },
        {
            path:"mypage",
            element:<MyPage />,
        },
        {
            path:"mypage/edit",
            element:<MyPageEdit />,
        },
        {
            path:"my-funding",
            element:<MyFunding />,
        },
        {
            path:"my-sale",
            element:<MySale />,
        },
        {
            path:"my-participants",
            element:<MyParticipants />,
        },
        {
            path:"my-participants/:participantPk",
            element:<MyParticipantDetail />,
        },
        {
            path:"my-purchases",
            element:<MyPurchases />,
        },
        {
            path:"my-purchases/:purchasePk",
            element:<MyPurchaseDetail />,
        },
        
    ]
}])

export default router;