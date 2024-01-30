export interface IBanner {
    image: string;
    id: number;
}

export interface IBannerResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IBanner[];
}

export interface IFundingItem {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    current_amount: number;
    current_percentage: number;
    title: string;
    content: string;
    price: number;
    goal_amount: number;
    end_date: string;
    image: string;
    category: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export interface ISaleItem {
    id: string;
    creator_nickname: string;
    creator_profile_image: string;
    title: string;
    content: string;
    price: number;
    image: string;
    category_name: string;
    bank_name: string;
    bank_account_number: string;
    bank_account_owner:string;
}

export interface INotice {
    id: string;
    title: string;
    content: string;
}

export interface INoticeResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: INotice[];
}

export interface IEvent {
    id: string;
    title: string;
    image: string;
    content: string;
}

export interface IEventResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IEvent[];
}

export interface IUser {
    nickname: string;
    email: string;
    profile_image: string;
    name: string;
    phone_number: string;
    is_admin: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    date_joined: string;
    password: string;
}

export interface IParticipant {
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

export interface IMyParticipant {
    id: string;
    is_paid: boolean | string;
    payment_name : string;
    name : string;
    phone_number : number;
    shipping_name : string;
    shipping_phone_number : number;
    shipping_address1 : string;
    shipping_zipcode : number;
    fundingPk? : string;
    created_at: string;
    updated_at: string;
    funding_item : {
        id: string;
        title: string;
        image: string;
        current_percentage: number;
        
    }

}

export interface IPurchase {
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
    fundingPk : string;

}

export interface IFundingResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IFundingItem[];
}

export interface ISaleResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: ISaleItem[];
}

export interface IMyParticipantsResponse {
    links: {
        next: string | null;
        previous: string | null;
    };
    count: number;
    total_pages: number;
    results: IMyParticipant[];
}