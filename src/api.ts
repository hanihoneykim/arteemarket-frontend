import axios from "axios";
import Cookie from "js-cookie";
import { QueryFunctionContext } from "@tanstack/react-query";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/",
})

instance.defaults.headers.common['Authorization'] = `Bearer ${Cookie.get("token") || ""}`;

export const getMyProfile = () => instance.get("user/myprofile").then(response => response.data)

export interface IEmailLoginVariables {
    email: string;
    password: string;
    }
    export interface IEmailLoginSuccess {
        ok: string;
    }
    export interface IEmailLoginError {
        error: string;
    }
    
export const emailLogIn = ({ email, password }: IEmailLoginVariables) =>
    instance.post(
        `user/login`,
        { email, password },
        {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            "Content-Type": "application/json",
        },
        }
    ).then(response => {
        // 로그인 성공 시에 얻은 토큰을 저장
        const token = response.data.token;
        Cookie.set("token", token);
        console.log(Cookie.get("token"))
        console.log("response.data:", response.data)
        return response.data;
    });

export const logOut = () =>
    instance
        .post(`user/logout`, null, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
        })
        .then((response) => response.data);

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

export const getFundingDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, fundingPk] = queryKey;
    return instance.get(`core/funding-items/${fundingPk}`).then((response) => response.data);
};

export const getSaleItems = () => instance.get("core/sale-items").then(response => response.data);

export const getSaleDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, salePk] = queryKey;
    return instance.get(`core/sale-items/${salePk}`).then((response) => response.data);
};

export const getCategorySaleItems = (CategoryKeyword: string) => {
    return instance.get("core/sale-items", { params: { category: CategoryKeyword } })
        .then(response => response.data);
}

export const getSearchSaleItems = (searchKeyword: string) => {
    return instance.get("core/sale-items/search", { params: { search_keyword: searchKeyword } })
        .then(response => response.data);
}

export const getNotice = () => instance.get("core/notices").then(response => response.data)

export const getNoticeDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, noticePk] = queryKey;
    return instance.get(`core/notices/${noticePk}`).then((response) => response.data);
};

export const getEvent= () => instance.get("core/events").then(response => response.data)

export const getEventDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, eventPk] = queryKey;
    return instance.get(`core/events/${eventPk}`).then((response) => response.data);
};

export interface IUploadParicipantsVariables {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    title: string;
    content: string;
    price: number;
    goal_amount: number;
    end_date: string;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export const uploadParticipants = (variables: IUploadParicipantsVariables, { queryKey }: QueryFunctionContext) => {
    const [_, fundingPk] = queryKey;
    return instance
        .post(`funding-items/${fundingPk}/participants/`, variables, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
        })
        .then((response) => response.data);
}

export interface IUploadFundingVariables {
    title: string;
    content: string;
    price: number;
    goal_amount: number;
    end_date: string;
    image: FileList | null;
    category: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export const uploadFunding = (data: IUploadFundingVariables) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("price", data.price.toString());
    formData.append("goal_amount", data.goal_amount.toString());
    formData.append("end_date", data.end_date);
    formData.append("category", data.category);
    formData.append("bank_name", data.bank_name);
    formData.append("bank_account_number", data.bank_account_number);
    formData.append("bank_account_owner", data.bank_account_owner);

    if (data.image) {
        formData.append("image", data.image[0]);
    }
    console.log("formData:", formData)

    return instance
        .post(`core/funding-items`, formData, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => response.data);
}


export interface IUploadSaleVariables {
    title: string;
    content: string;
    price: number;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export const uploadSale = (variables: IUploadSaleVariables) => {
    return instance
        .post(`core/sale-items`, variables, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => response.data);
}