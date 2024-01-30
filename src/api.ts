import axios from "axios";
import Cookie from "js-cookie";
import { MutationFunction, QueryFunctionContext } from "@tanstack/react-query";
import { IParticipant } from "./types";

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

export interface IEmailSignupVariables {
    email: string;
    password: string;
    nickname: string; 
    phone_number: number;
    }
    export interface IEmailSignupSuccess {
        ok: string;
    }
    export interface IEmailSignupError {
        error: string;
    }
    
export const emailSignup = ({ email, password, nickname, phone_number }: IEmailSignupVariables) =>
    instance.post(
        `user/signup`,
        { email, password, nickname, phone_number },
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

export const getMyFundingItems = () => instance.get("core/funding-items/myitems").then(response => response.data);

export const getFundingItems = () => instance.get("core/funding-items").then(response => response.data);

export const getFundingDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, fundingPk] = queryKey;
    return instance.get(`core/funding-items/${fundingPk}`).then((response) => response.data);
};

export const getSaleItems = () => instance.get("core/sale-items").then(response => response.data);

export const getMySaleItems = () => instance.get("core/sale-items/myitems").then(response => response.data);

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

export const getParticipantDetail = ({ queryKey }: QueryFunctionContext) => {
    const [_, participantPk] = queryKey;
    return instance.get(`user/my-participants/${participantPk}`).then((response) => response.data);
};


export const getMyParticipants = () => instance.get("user/my-participants").then(response => response.data);


export interface IUploadParicipantsVariables {
    id: string;
    is_paid: boolean | string;
    payment_name : string;
    name : string;
    phone_number : number;
    shipping_name : string;
    shipping_phone_number : number;
    shipping_address1 : string;
    shipping_zipcode : number;
    funding_item : string;
    fundingPk? : string;
    created_at: string;
    updated_at: string;
}

export const uploadParticipants = (variables: IUploadParicipantsVariables) => {
    console.log("fundingPk3:", variables.fundingPk)
    console.log("funding_item:", variables.funding_item)
    
    return instance
        .post(`core/funding-items/${variables.funding_item}/participants`, variables, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
        })
        .then((response) => response.data);
}

export interface IUploadPurchasesVariables {
    id: string;
    is_paid: boolean | string;
    payment_name : string;
    name : string;
    phone_number : number;
    shipping_name : string;
    shipping_phone_number : number;
    shipping_address1 : string;
    shipping_zipcode : number;
    sale_item : string;
    salePk? : string;
}

export const uploadPurchases = (variables: IUploadPurchasesVariables) => {
    
    return instance
        .post(`core/sale-items/${variables.sale_item}/purchases`, variables, {
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

export interface IUploadMypageVariables {
    email: string;
    old_password: string;
    new_password: string;
    nickname: string;
    phone_number: string;
    name: string;
    profile_image: FileList | null;
    password: string;
}

export const uploadMypage = (data: IUploadMypageVariables) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("nickname", data.nickname);
    formData.append("phone_number", data.phone_number.toString());
    formData.append("name", data.name);
    formData.append("password", data.password);

    if (data.old_password) {
        formData.append("old_password", data.old_password);
    }

    if (data.new_password) {
        formData.append("new_password", data.new_password);
    }

    if (data.profile_image) {
        formData.append("profile_image", data.profile_image[0]);
    }
    console.log("formData2:", formData)


    return instance
        .patch(`user/myprofile`, data, {
        headers: {
            "X-CSRFToken": Cookie.get("csrftoken") || "",
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => response.data);
}
