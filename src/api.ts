import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/"
})

export const getMyProfile = () => instance.get("user/myprofile").then(response => response.data)

export const getBanners = () => instance.get("core/mainpage-banners").then(response => response.data)

export const getHomeFundingItems = () => instance.get("core/funding-items?recent=true").then(response => response.data)

export const getSearchFundingItems = (searchKeyword: string) => {
    return instance.get("core/funding-items/search", { params: { search_keyword: searchKeyword } })
        .then(response => response.data);
}

export const getCategoryFundingItems = (CategoryKeyword: string) => {
    return instance.get("core/funding-items", { params: { category: CategoryKeyword } })
        .then(response => response.data);
}

export const getFundingItems = () => instance.get("core/funding-items").then(response => response.data);

export const getSaleItems = () => instance.get("core/sale-items").then(response => response.data);

export const getCategorySaleItems = (CategoryKeyword: string) => {
    return instance.get("core/sale-items", { params: { category: CategoryKeyword } })
        .then(response => response.data);
}

export const getSearchSaleItems = (searchKeyword: string) => {
    return instance.get("core/sale-items/search", { params: { search_keyword: searchKeyword } })
        .then(response => response.data);
}

export const getNotice = () => instance.get("core/notices").then(response => response.data)

export const getEvent= () => instance.get("core/events").then(response => response.data)

