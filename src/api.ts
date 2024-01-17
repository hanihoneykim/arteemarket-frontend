import axios from "axios";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/"
})

export const getBanners = () => instance.get("core/mainpage-banners").then(response => response.data)

export const getHomeFundingItems = () => instance.get("core/funding-items?recent=true").then(response => response.data)

export const getSearchFundingItems = (searchKeyword: string) => {
    return instance.get("core/funding-items", { params: { search_keyword: searchKeyword } })
        .then(response => response.data);
}

export const getFundingItems = (queryParams:any) => instance.get("core/funding-items", { params: queryParams }).then(response => response.data);


